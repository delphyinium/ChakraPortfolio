import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={4} mb={6} align="center">
            Hello, I am a young developer based in the US! 
            </Box>

            <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
        <Heading as='h2' variant="page-title">
            delphinium
        </Heading>
        <p>Amateur Developer ( Programmer / Musician / Visionary )</p>
            </Box>
        </Box>
    </Container>
)
}

export default Page