import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbBoxing from '../public/images/contents/about-boxing.jpg'
import thumbGaming from '../public/images/contents/about-gaming.jpg'
import thumbCulture from '../public/images/contents/about-culture.jpg'
import thumbNetflix from '../public/images/contents/about-netflix.jpg'
import thumbRead from '../public/images/contents/about-reading.jpg'
import thumbCoffee from '../public/images/contents/about-coffee.jpg'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Posts = () => {
  const { t } = useTranslation('common');
  return (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
      {t('aboutme.title')}
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title= {t('aboutme.boxing')}
            thumbnail={thumbBoxing}
            href="https://www.youtube.com/watch?v=bSMZgXzC9AA"
          />
          <GridItem
            title={t('aboutme.gaming')}
            thumbnail={thumbGaming}
            href="https://www.youtube.com/watch?v=-qBavwqc_mY"
          />
          <GridItem
            title={t('aboutme.culture')}
            thumbnail={thumbCulture}
            href="https://www.youtube.com/watch?v=KKxhf50FIPI"
          />
          <GridItem
            title={t('aboutme.netflix')}
            thumbnail={thumbNetflix}
            href="https://www.youtube.com/watch?v=1OFDMwDlnOE"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title={t('aboutme.reading')}
            thumbnail={thumbRead}
            href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
          />
          <GridItem
            title={t('aboutme.coffee')}
            thumbnail={thumbCoffee}
            href="https://blog.inkdrop.app/i-stopped-setting-a-financial-goal-for-my-saas-a92c3db65506"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)
}
export default Posts

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
  });
