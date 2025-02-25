import { 
  Container, 
  Heading, 
  SimpleGrid, 
  Grid, 
  Box, 
  Text 
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbGym from '../public/images/contents/about-gym.jpg'
import thumbGaming from '../public/images/contents/about-gaming.jpg'
import thumbGastronomy from '../public/images/contents/about-gastronomy.jpg'
import thumbNetflix from '../public/images/contents/about-netflix.jpg'
import thumbRead from '../public/images/contents/about-reading.jpg'
import thumbCoffee from '../public/images/contents/about-coffee.jpg'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Posts = () => {
  const { t } = useTranslation('common');
  return (
    <Layout title="About">
      {/* Ajusta el ancho máximo y el padding vertical para centrar y dar espacio */}
      <Container maxW="container.lg" py={8}>
        
        {/* Encabezado principal */}
        <Heading 
          as="h3" 
          fontSize="2xl" 
          mb={6} 
          textAlign="center"
        >
          {t('aboutme.title')}
        </Heading>

        {/* Grid principal: 2 columnas en pantallas medianas en adelante, 1 en móviles */}
        <Grid 
          templateColumns={{ base: '1fr', md: '2fr 1fr' }} 
          gap={8} 
          alignItems="start"
        >
          {/* Columna Izquierda: Gustos */}
          <Box>
            <Section delay={0.1}>
              <Heading 
                as="h4" 
                fontSize="xl" 
                mb={4}
              >
                {t('aboutme.thingsIDoTitle') || 'Things I Like to Do'}
              </Heading>
              <SimpleGrid 
                columns={{ base: 1, md: 2 }} 
                gap={6}
              >
                <GridItem
                  title={t('aboutme.gym')}
                  thumbnail={thumbGym}
                />
                <GridItem
                  title={t('aboutme.gaming')}
                  thumbnail={thumbGaming}
                />
                <GridItem
                  title={t('aboutme.gastronomy')}
                  thumbnail={thumbGastronomy}
                />
                <GridItem
                  title={t('aboutme.netflix')}
                  thumbnail={thumbNetflix}
                />
              </SimpleGrid>
            </Section>

            <Section delay={0.3} mt={8}>
              <SimpleGrid 
                columns={{ base: 1, md: 2 }} 
                gap={6}
              >
                <GridItem
                  title={t('aboutme.reading')}
                  thumbnail={thumbRead}
                />
                <GridItem
                  title={t('aboutme.coffee')}
                  thumbnail={thumbCoffee}
                />
              </SimpleGrid>
            </Section>
          </Box>

          {/* Columna Derecha: Texto */}
          <Box
            /* Fondo ligeramente claro con transparencia si usas un tema oscuro */
            bg="whiteAlpha.100"
            p={6}
            borderRadius="lg"
            boxShadow="lg"
          >
            <Heading 
              as="h4" 
              fontSize="xl" 
              mb={4}
            >
              {t('aboutme.megustatitle') || 'What People Say About Me'}
            </Heading>
            <Text 
              fontSize="md" 
              lineHeight="taller"
              whiteSpace="pre-line"
            >
              
              {t('aboutme.megustatext') || 'Aquí puedes incluir el texto que desees sobre ti.'}
            </Text>
          </Box>
        </Grid>
      </Container>
    </Layout>
  );
}

export default Posts

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
