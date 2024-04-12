import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Center,
    Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
    <Layout title="Pandemic Simulator">
        <Container>
            <Title>
                Pandemic simulator <Badge>2022</Badge>
            </Title>
            <Center my={6}>
                <Image src="/images/works/amembo_icon.png" alt="icon" />
            </Center>
            <P>
                A Java GUI Application that let users input certain parameters about a population in
                terms of how many people are vaccinated or unvaccinated, and then run a simulation to see how
                quickly a disease will spread through the population of a given size.
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Java, Java GUI</span>
                </ListItem>
                <ListItem>
                    <Meta>Github</Meta>
                    <Link href="https://github.com/benvgaming/INFO3136-Project-2">
                        source
                    </Link>
                </ListItem>
            </List>
                <WorkImage src="/images/works/pandemic1.png" alt="pandemic" />
                <WorkImage src="/images/works/pandemic2.png" alt="pandemic" />
                <WorkImage src="/images/works/pandemic3.png" alt="pandemic" />
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
