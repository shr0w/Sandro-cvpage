import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbPandemic from '../public/images/works/pandemic1.png'
import thumbYum from '../public/images/works/yum.png'
const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="pandemic" title="Pandemic" thumbnail={thumbPandemic}>
            A Pandemic simulator
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="yum" title="Yum" thumbnail={thumbYum}>
            A website to play the board game Yum/Yahtzee
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
