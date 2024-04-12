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
    <Layout title="Yum">
        <Container>
            <Title>
                Yum <Badge>2022</Badge>
            </Title>
            <Center my={6}>
                <Image src="/images/works/amembo_icon.png" alt="icon" />
            </Center>
            <P>
                a website to play Yum/Yahtzee board game, user can spend money earned from games to buy cosmetic
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>SpringBoot, Angular JS</span>
                </ListItem>
                <ListItem>
                    <Meta>Github</Meta>
                    <Link href="https://github.com/DTully2/PlayYum">
                        source
                    </Link>
                </ListItem>
            </List>

            <WorkImage src="/images/works/yum.png" alt="yum" />
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
