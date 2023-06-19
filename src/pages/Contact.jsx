import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Container, Box, Center } from '@chakra-ui/react';

export default function Contact() {
  return (
    <Box w="auto" minH="100vh" bgGradient="linear(to-r, pink.200, purple.500)">
      <Container
        bgGradient="linear(to-r, pink.200, purple.500)"
        w="auto"
        minH="100vh"
        pt="50px"
        pb="50px"
      >
        <Center h="auto" color="white" fontSize="4xl" fontWeight="extrabold">
          <h1>Phonebook</h1>
        </Center>
        <ContactForm />
        <Filter />
        <ContactList />
      </Container>
    </Box>
  );
}
