import React from 'react';
import NextLink from 'next/link'
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
    bio1: 'Born in Ho Chi Minh City, Vietnam',
    bio2: 'Completed the Computer Programmer Analyst Advanced Diploma at Fanshawe College',
    bio3: 'Work at Blockchain lab, Osaka Metropolitan University as a back-end intern developer',
    bio4: 'Workinig as freelancer',
    hobby: 'Reading books, Automation and Productivity tools and technology, Fighting games, Board games    ',

  },
  vn: {
    greeting: 'Xin Chào, Tôi là lập trình viên ở Việt Nam',
    work: 'Tên mình là Mạnh Cường, mình còn được gọi là Ben. Mình có sở thích lập trình những thứ mà mình muốn. Mình có thể tự bản thân làm mọi thứ, từ việc lập kế hoạch và thiết kế cho đến giải quyết vấn đề trong cuộc sống bằng lập trình',
    bio1: 'Sinh ra ở Thành Phố Hồ Chí Minh, Việt Nam',
    bio2: 'Hoàn thành Khóa \"Computer Programmer Analyst\" tại Trường Cao đẳng Fanshawe',
    bio3: 'Thực tập tại Blockchain lab, Đại học Osaka Metropolitan',
    bio4: 'Làm việc tự do',
    hobby: 'Đọc sách, phần mềm tự động hóa và tăng năng suất, game đối kháng, board game',
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

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          {translations[selectedLanguage].work}
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          {translations[selectedLanguage].bio1}
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          {translations[selectedLanguage].bio2}
        </BioSection>
        <BioSection>
          <BioYear>2023/03 - 2023/07</BioYear>
          {translations[selectedLanguage].bio3}
        </BioSection>
        <BioSection>
          <BioYear>2023/08 - Up to current</BioYear>
          {translations[selectedLanguage].bio4}
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          {translations[selectedLanguage].hobby}
        </Paragraph>
      </Section>
    </div>
  );
};

export default Content;
