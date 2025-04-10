import { Box, Container, Heading, SimpleGrid, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import AnimationWrapper from '../../components/animation-wrapper'
import { getAllPosts } from '../../lib/api'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Blog({ posts }) {
  const { t } = useTranslation('common')
  
  return (
    <AnimationWrapper>
      <Container maxW="container.md">
        <Heading as="h1" mb={8}>
          {t('blog.title')}
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {posts.map((post, index) => (
            <AnimationWrapper key={post.slug} delay={index * 0.1}>
              <Link as={NextLink} href={`/blog/${post.slug}`} _hover={{ textDecoration: 'none' }}>
                <Box
                  p={6}
                  borderWidth="1px"
                  borderRadius="lg"
                  _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                  transition="all 0.3s"
                >
                  <Heading as="h2" size="md" mb={2}>
                    {post.title}
                  </Heading>
                  <Text color="gray.500" mb={4}>
                    {post.date}
                  </Text>
                  <Text noOfLines={3}>{post.excerpt}</Text>
                  <Text mt={4} color="blue.500">
                    {t('blog.readMore')} →
                  </Text>
                </Box>
              </Link>
            </AnimationWrapper>
          ))}
        </SimpleGrid>
      </Container>
    </AnimationWrapper>
  )
}

export async function getStaticProps({ locale }) {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
    'coverImage'
  ])

  return {
    props: { 
      posts,
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
} 