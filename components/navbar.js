import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Button,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'




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

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props
  const { t } = useTranslation()
  const router = useRouter()
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
          {t('navbar.projects')}
          </LinkItem>
          <LinkItem href="/posts" path={path}>
          {t('navbar.aboutme')}
          </LinkItem>
          <LinkItem href="/public/docs/cv/test.pdf" path={path}>
            CV PDF
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/shr0w"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
          <NextLink href="/" locale={router.locale === 'es' ? 'en' : 'es'}>
            <Button colorScheme="teal" size="xs">
              {router.locale === 'es' ? 'EN' : 'ES'}
            </Button>
          </NextLink>
          
          <Flex>
            <Box p='1'>
            </Box>
            <Box p='1'>
              <ThemeToggleButton />
            </Box>
          </Flex>
        </Stack>

        <Box flex={1} align="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/works">
                  Works
                </MenuItem>
                <NextLink href="/portfolio" passHref>
                  <MenuItem as={Link}>Portfolio</MenuItem>
                </NextLink>
                <NextLink href="/cv" passHref>
                  <MenuItem as={Link}>CV PDF</MenuItem>
                </NextLink>
                <MenuItem as={Link} href="https://github.com/shr0w">
                  View Source
                </MenuItem>
                <NextLink href="/" locale={router.locale === 'es' ? 'en' : 'es'} passHref>
                  <MenuItem as={Link}>
                    <Button colorScheme="teal" size="sm">
                      {router.locale === 'es' ? 'English' : 'Español'}
                    </Button>
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
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