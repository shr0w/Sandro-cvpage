import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import Footer from '../footer'
import PageTransition from '../page-transition'
import VoxelDogLoader from '../voxel-dog-loader'
import { useRouter } from 'next/router'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, title, description, image }) => {
  const router = useRouter()
  const isHome = router.pathname === '/'

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="author" content="Sandro" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta property="og:site_name" content="Sandro Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={20}>
        {isHome && <LazyVoxelDog />}
        <PageTransition>
          {children}
        </PageTransition>
      </Container>

      <Footer />
    </Box>
  )
}

export default Main
