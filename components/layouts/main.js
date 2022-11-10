import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>delphinium - homepage</title>
            </Head>

            <Container maxW="container.md">
                {children}
            </Container>
        </Box>
    )
}

export default Main