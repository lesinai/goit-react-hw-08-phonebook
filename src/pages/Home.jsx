import { Container, Heading } from '@chakra-ui/react';

function Home() {
  return (
    <Container
      pt="50px"
      bgGradient="linear(to-r, pink.200, purple.500)"
      pb="50px"
    >
      <Heading
        color="pink.500"
        as="b"
        fontSize="4xl"
        display="flex"
        justifyContent="center"
      >
        WELCOME
      </Heading>
    </Container>
  );
}

export default Home;
