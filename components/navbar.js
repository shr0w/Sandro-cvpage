import Logo from './logo'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import {
  Container,
  Box,
  Link,
  Heading,
  Flex,
  IconButton,
  useColorModeValue,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import { IoLinkSharp } from "react-icons/io5"

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const Navbar = props => {
  const { path } = props
  const { t } = useTranslation()
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff80', '#20202380')}
      css={{ backdropFilter: 'blur(10px)', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        align="center"
        justify="space-between"
      >
        <Flex align="center" w="auto">
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Flex gap={2} ml="auto">
          <ThemeToggleButton />
          <IconButton
            icon={<HamburgerIcon />}
            variant="outline"
            onClick={onOpen}
            aria-label="Abrir menú"
            size="md"
          />
        </Flex>

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          size="xs"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Menú</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="stretch">
                <LinkItem href="/works" path={path} onClick={onClose}>
                  {t('navbar.projects') || 'Proyectos'}
                </LinkItem>
                <LinkItem href="/blog" path={path} onClick={onClose}>
                  {t('navbar.blog') || 'Blog'}
                </LinkItem>
                <LinkItem href="/megusta" path={path} onClick={onClose}>
                  {t('navbar.aboutme') || 'Sobre mí'}
                </LinkItem>
                <LinkItem href={t('navbar.cv') || '/cv'} path={path} onClick={onClose}>
                  CV PDF
                </LinkItem>
                <LinkItem
                  target="_blank"
                  href="https://github.com/shr0w"
                  path={path}
                  display="inline-flex"
                  alignItems="center"
                  style={{ gap: 4 }}
                  onClick={onClose}
                >
                  <IoLogoGithub />
                  {t('navbar.source') || 'Fuente'}
                </LinkItem>
                <LinkItem
                  target="_blank"
                  href="https://not-linktree-six.vercel.app/"
                  path={path}
                  display="inline-flex"
                  alignItems="center"
                  style={{ gap: 4 }}
                  onClick={onClose}
                >
                  <IoLinkSharp />
                  {t('navbar.links') || 'Otros links'}
                </LinkItem>
                <Button
                  onClick={() => {
                    router.push('/', undefined, { locale: router.locale === 'es' ? 'en' : 'es' })
                    onClose()
                  }}
                  colorScheme="teal"
                  size="sm"
                >
                  {router.locale === 'es' ? 'EN' : 'ES'}
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
    </Box>
  )
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])), // Load the 'common' namespace translations for the current locale.
    },
  };
}

export default Navbar