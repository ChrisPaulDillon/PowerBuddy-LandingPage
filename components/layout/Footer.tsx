import React from 'react';
import { Box, Flex, Stack, useDisclosure, useToken } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      as="nav"
      //   bg={`linear-gradient(to left, rgba(63, 17, 109), rgba(58, 58, 58, 0))`}
      w="100%"
      justifyContent="flex"
      alignItems="space-between"
      minH="6vh"
      position="sticky"
      bottom={0}
      zIndex={5}>
      <Stack isInline w="100%" justify="space-between" align="center">
        <Flex pt={2}>
          <Box mx={2}></Box>

          {/* <MCalendar /> */}
        </Flex>
      </Stack>
    </Flex>
  );
};

export default Footer;
