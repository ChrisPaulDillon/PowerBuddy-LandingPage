import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { ITemplateProgramFeed } from 'powerbuddy-shared/lib';
import React from 'react';
import { GetLandingPageMetrics } from '../api/public/metrics';
import { GetTemplateFeedUrl } from '../api/public/template';
import { ModalDrawerForm } from '../components/common/ModalDrawer';
import Header from '../components/landing/LandingHeader';
import Hero from '../components/landing/LandingHero';
import LandingList from '../components/landing/LandingList';
import { PageHeader } from '../components/layout/Page';
import RegisterForm from '../components/shared/RegisterForm';

interface ILandingPageMetrics {
  setCount: number;
  userCount: number;
}

export default function Home({feedData, metrics}: any) {
  const { isOpen: isRegOpen, onOpen: openReg, onClose: onRegClose } = useDisclosure();

  return (
    <Flex direction="column" align="center" m="0 auto" px={10} maxW={{ xl: '1300px' }} >
      <PageHeader title="The All In One Weightlifting Solution" />
      <Header />
      <Box>
        <Hero openReg={openReg} templateFeed={feedData!} userCount={metrics?.userCount!} repCount={metrics?.setCount!} />
        {isRegOpen && (
          <ModalDrawerForm isOpen={isRegOpen} onClose={onRegClose} title="Sign Up!">
            <RegisterForm />
          </ModalDrawerForm>
        )}

        <LandingList />
      </Box>
    </Flex>)
}

export const getStaticProps: GetStaticProps = async () => {
  const templateResponse = await axios.get<ITemplateProgramFeed[]>(GetTemplateFeedUrl());
  const metricsResponse = await axios.get<ILandingPageMetrics>(GetLandingPageMetrics());
  return {
    props: {
      feedData: templateResponse.data,
      metrics: metricsResponse.data
    },
  };
};