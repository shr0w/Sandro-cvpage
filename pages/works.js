import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { GridItem } from '../components/grid-item'
import thumbSolvento from '../public/images/works/solvento.png'
import thumbSanitas from '../public/images/works/sanitas.png'
import thumbMsi from '../public/images/works/msi.png'
import thumbCafesalvador from '../public/images/works/cafesalvador.png'
import thumbZwheel from '../public/images/works/zwheel.png'
import thumbOnlylens from '../public/images/works/onlylens.png'
import thumbCdm from '../public/images/works/cdm.png'
import { useTranslation } from 'react-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Works = () => {
  const { t } = useTranslation('common');
  return (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={26} mb={4}>
      {t('works.title')}
      </Heading>
      <Section>
      <p>{t('works.description')}</p>
      </Section>

      <SimpleGrid>
        <Section>
          <WorkGridItem id="https://solventoconsulting.com" title={t('works.solvento.title')} thumbnail={thumbSolvento}>
          {t('works.solvento.copy')}
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="https://www.sanitas.es" title={t('works.sanitas.title')} thumbnail={thumbSanitas}>
          {t('works.sanitas.copy')}
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="https://es.msi.com/" title={t('works.msi.title')} thumbnail={thumbMsi}>
          {t('works.msi.copy')}
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="https://cafesalvadorbcn.com/" title={t('works.cafesalvador.title')} thumbnail={thumbCafesalvador}>
          {t('works.cafesalvador.copy')}
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>

    <Container>
      <hr style={{ borderTop: '1px solid #ccc', margin: '40px 0' }} />
    </Container>

    <Container>
    <Heading as="h3" fontSize={26} mb={4}>
    {t('collabs.title')}
      </Heading>
    </Container>
    <Container mb={10} align="justify">
    {t('collabs.copy')}
      </Container>
    <SimpleGrid columns={[3, 3, 3]} gap={10}>
    <Section>
          <GridItem id="https://zwheel-shop.com/" title="Zwheel" Text="Zwheel" thumbnail={thumbZwheel}>
          {t('collabs.zwheel')}
          </GridItem>
        </Section>
        <Section>
          <GridItem id="https://onlylens.com" title="OnlyLens" Text="OnlyLens" thumbnail={thumbOnlylens}>
          {t('collabs.onlylens')}
          </GridItem>
        </Section>
        <Section>
          <GridItem id="https://controldemision.com" title="Control De Misión" Text="CDM" thumbnail={thumbCdm}>
          {t('collabs.cdm')}
          </GridItem>
        </Section>
      </SimpleGrid>
  </Layout>
)};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});


export default Works
