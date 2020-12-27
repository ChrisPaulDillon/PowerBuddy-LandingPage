import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import Head from 'next/head'
import React from 'react';
import { GetLandingPageMetrics } from '../api/public/metrics';
import { GetTemplateFeedUrl } from '../api/public/template';
import { ModalDrawerForm } from '../components/common/ModalDrawer';
import Header from '../components/landing/LandingHeader';
import Hero from '../components/landing/LandingHero';
import LandingList from '../components/landing/LandingList';
import { PageHeader } from '../components/layout/Page';
import RegisterForm from '../components/shared/RegisterForm';
import { useAxios } from '../hooks/useAxios';
import { ITemplateProgramFeed } from '../interfaces/templates';

interface ILandingPageMetrics {
  setCount: number;
  userCount: number;
}

export default function Home() {
  const { data: feedData } = useAxios<ITemplateProgramFeed[]>(GetTemplateFeedUrl());
  const { data: metrics } = useAxios<ILandingPageMetrics>(GetLandingPageMetrics());
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
