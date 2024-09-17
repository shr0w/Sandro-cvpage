import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


const NotFound = () => {
  const { t } = useTranslation('common');
  return (
    <Container>
      <Heading as="h1">{t('404.title')}</Heading>
      <Text>{t('404.text')}</Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
        {t('404.button')}
        </Button>
      </Box>
    </Container>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])), // Load the 'common' namespace translations for the current locale.
    },
  });

export default NotFound
