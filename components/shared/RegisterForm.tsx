import React from 'react';
import { BiDumbbell } from 'react-icons/bi';
import { Box, Stack, InputGroup, InputLeftElement, Select, useToast } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { FormErrorMessage, FormControl, Input, Button, Icon } from '@chakra-ui/react';
import { validateEmailInput, validateInput, validatePassword } from '../../util/formInputs';
import { AiFillStar, AiTwotoneLock, MdEmail } from 'react-icons/all';
import axios from 'axios';
import { RegisterUserUrl } from '../../api/account/auth';
import { CenterColumnFlex } from '../layout/Flexes';
import { PORTAL_URL } from '../util/WebAppLinks';
import { IUser } from 'powerbuddy-shared/lib';

const RegisterForm = () => {
  const { handleSubmit, errors, register, formState } = useForm();
  const toast = useToast();

  const onSubmit = async ({ username, email, password }: any) => {
    const user: IUser = {
      email: email,
      userName: username,
      password: password,
    };
    try {
      const response = await axios.post(RegisterUserUrl(), user);
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      toast({
        title: 'Success',
        description: 'Successfully Signed Up',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top',
      });
      window.location.href = PORTAL_URL;
    } catch (error) {
      if (error?.response?.status === 409) {
        toast({
          title: 'Error',
          description: 'Username or email already in use, please try another',
          status: 'error',
          duration: 2000,
          isClosable: true,
          position: 'top',
        });
      }
    }
  };

  return (
    <CenterColumnFlex>
      <Box borderStyle="rd" border="1px" p="5" rounded="lg">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <FormControl isInvalid={errors.name}>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<AiFillStar />} />
                <Input name="username" placeholder="Username" ref={register({ validate: validateInput })} />
              </InputGroup>
              <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.email}>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<MdEmail />} />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  aria-describedby="email-helper-text"
                  ref={register({ validate: validateEmailInput })}
                />
              </InputGroup>
              <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.password}>
              <InputGroup>
                <InputLeftElement pointerEvents="none" fontSize="1.2em" size="20px" children={<AiTwotoneLock />} />
                <Input type="password" name="password" placeholder="Password" ref={register({ validate: validatePassword })} />
              </InputGroup>
              <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.select}>
              <Select icon={<BiDumbbell />} name="select" placeholder="Select Sport" ref={register({ validate: validateInput })}>
                <option value="Weightlifting">Weightlifting</option>
                <option value="Powerlifting">Powerlifting</option>
              </Select>
              <FormErrorMessage>{errors.select && errors.select.message}</FormErrorMessage>
            </FormControl>

            <Button mt={4} variantColor="teal" variant="outline" isLoading={formState.isSubmitting} type="submit">
              Register
            </Button>
          </Stack>
        </form>
      </Box>
    </CenterColumnFlex>
  );
};

export default RegisterForm;
