import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

const BlogPost = ({ children, title, description, image }) => {
  return (
    <>
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

      <Box as="main" pb={8}>
        <Container maxW="container.md" pt={20}>
          {children}
        </Container>
      </Box>
    </>
  )
}

export default BlogPost 