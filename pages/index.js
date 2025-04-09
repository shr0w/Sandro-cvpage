import React from 'react';
import { chakra, Box, Button, Container, Heading, List, ListItem, SimpleGrid, UnorderedList, useColorModeValue, Link } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoGithub } from 'react-icons/io5';
import Image from 'next/image';
import NextLink from 'next/link';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';



const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),});
const Page = () => {
  const { t } = useTranslation('common');
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          css={{ backdropFilter: 'blur(10px)' }}
          p={3}
          mb={6}
          align="center"
        >
          {t('common.intro')}
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Sandro Vargas
            </Heading>
            <p>Marketeer, Web Developer and Designer.</p>
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
                src="/images/profile-sandro-vargas.jpg"
                alt="Profile image"
                borderRadius="full"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>

        {/* About Me Section */}
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            {t('common.about-title')}
          </Heading>
          <Paragraph indent={true}>{t('about-me.intro')}</Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              {t('common.portfolio-button')}
            </Button>
          </Box>
        </Section>

        {/* Bio Section */}
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            {t('common.bio-title')}
          </Heading>
          <BioSection>
            <BioYear>1992 </BioYear>
            {t('bio.born')}
          </BioSection>
          <BioSection>
            <BioYear>2014 </BioYear>
            {t('bio.ondigital-job')}
          </BioSection>
          <BioSection>
            <BioYear>2018 </BioYear>
            {t('bio.tech-job')}
          </BioSection>
          <BioSection>
            <BioYear>2020 </BioYear>
            {t('bio.solvento-job')}
          </BioSection>
          <BioSection>
            <BioYear>2025 </BioYear>
            {t('bio.artic-job')}
          </BioSection>
        </Section>

        {/* Skills Section */}
        <Section delay={0.3}>
          <SimpleGrid columns={{ sm: 1, md: 2 }}>
            <Box mb={2} as="article">
              <Heading as="h4" variant="section-title">
                I ❤
              </Heading>
              <UnorderedList>
                <ListItem>{t('skills.stuff.tv')}</ListItem>
                <ListItem>{t('skills.stuff.vydia')}</ListItem>
                <ListItem>{t('skills.stuff.food')}</ListItem>
                <ListItem>{t('skills.stuff.basket')}</ListItem>
                <ListItem>{t('skills.stuff.bigbrain')}</ListItem>
                <ListItem>{t('skills.stuff.kitty')}</ListItem>
              </UnorderedList>
            </Box>
            <Box mb={2} as="article">
              <Heading as="h4" variant="section-title">
                Hard Skills
              </Heading>
              <UnorderedList>
                <ListItem>{t('skills.hard.basics')}</ListItem>
                <ListItem>{t('skills.hard.next-react')}</ListItem>
                <ListItem>{t('skills.hard.css')}</ListItem>
                <ListItem>{t('skills.hard.ia')}</ListItem>
                <ListItem>{t('skills.hard.cms')}</ListItem>
                <ListItem>{t('skills.hard.creative')}</ListItem>
              </UnorderedList>
            </Box>
          </SimpleGrid>
        </Section>

        {/* Social Media Section */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Social Networks
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/shr0w" isExternal>
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub size={20} />}
                >
                  @shr0w
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/sandro-vargas/" isExternal>
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin size={20} />}
                >
                  @sandrovargas
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.instagram.com/perduvoyageur/" isExternal>
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram size={20} />}
                >
                  @perduvoyageur
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/perduvoyageur/" isExternal>
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoTwitter size={20} />}
                >
                  @perduvoyageur
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])), // Load the 'common' namespace translations for the current locale.
    },
  });

export default Page;