import React from 'react';
import { useLanguage } from './language-context';

import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'

import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

import Image from 'next/image'
const translations = {
  en: {
    greeting: 'Hello, I\'m an indie developer based in Vietnam',
    work: 'My name is Manh Cuong, I also go with Ben. I have a passion building digital services/stuffs that I want. I has a knack for all things, from planning and designing to all the way to solving real-life problem with programming.',
    hobby: '',

  },
  vn: {
    greeting: 'Xin Chào, Tôi là lập trình viên ở Việt Nam',
    work: '',
  },
  // Add more translations here
};

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})
const Content = () => {
  const { selectedLanguage } = useLanguage();

  return (
    <div>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        {translations[selectedLanguage].greeting}
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Manh Cuong
          </Heading>
          <p>Backend Developer ( Software/Web Developer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/ben.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Content;
