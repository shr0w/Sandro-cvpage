import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import BlogPost from '../../components/layouts/blog-post'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

// Definimos los componentes permitidos explícitamente
const components = {
  h1: (props) => <Heading as="h1" size="2xl" mb={4} {...props} />,
  h2: (props) => <Heading as="h2" size="xl" mb={4} {...props} />,
  h3: (props) => <Heading as="h3" size="lg" mb={3} {...props} />,
  p: (props) => <Text mb={4} {...props} />,
  pre: (props) => <Box as="pre" p={4} borderRadius="md" bg="gray.800" overflowX="auto" {...props} />,
  code: (props) => <Box as="code" fontFamily="mono" {...props} />,
  // Anulamos explícitamente los componentes que no queremos
  nav: () => null,
  footer: () => null,
  header: () => null,
  // Contenedor principal
  wrapper: ({ children }) => (
    <Box className="prose prose-lg">
      {children}
    </Box>
  )
}

export default function Post({ post }) {
  return (
    <BlogPost
      title={`${post.title} | Blog`}
      description={post.excerpt}
      image={post.coverImage}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Container maxW="container.md">
          <Box mb={8}>
            <Heading as="h1" mb={4}>
              {post.title}
            </Heading>
            <Text color="gray.500" mb={6}>{post.date}</Text>
            {post.coverImage && (
              <Box position="relative" height="400px" mb={8} borderRadius="lg" overflow="hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </Box>
            )}
          </Box>
          <Box
            sx={{
              '& img': {
                borderRadius: 'lg',
                margin: '2rem auto'
              }
            }}
          >
            <MDXRemote 
              {...post.content} 
              components={components}
              // Deshabilitamos la ejecución de JavaScript en el contenido MDX
              scope={{}}
              // No permitimos importaciones
              allowedImports={{}}
            />
          </Box>
        </Container>
      </motion.div>
    </BlogPost>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'excerpt',
    'coverImage'
  ])

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
      format: 'mdx',
      development: false,
      // Deshabilitamos la ejecución de JavaScript en el contenido MDX
      jsx: false,
      // No permitimos importaciones
      useDynamicImport: false
    },
    scope: {},
    parseFrontmatter: true
  })

  return {
    props: {
      post: {
        ...post,
        content: mdxSource
      }
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug
      }
    })),
    fallback: false
  }
} 