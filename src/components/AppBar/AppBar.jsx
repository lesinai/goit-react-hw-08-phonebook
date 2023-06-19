import { useSelector } from 'react-redux';
import { selectorIsLogin } from 'redux/auth/authSelectors';
import AuthForm from 'components/AuthForm/AuthForm';
import Navigation from 'components/Navigation/Navigation';
import { Container, Box } from '@chakra-ui/react';

function AppBar() {
  const isLoggedIn = useSelector(selectorIsLogin);

  return (
    <>
      <Box
        w="auto"
        minH="100vh"
        bgGradient="linear(to-r, pink.200, purple.500)"
      >
        <Container
          pt="20px"
          bgGradient="linear(to-r, pink.200, purple.500)"
          w="auto"
          minH="100vh"
          pb="50px"
        >
          <Navigation />

          {!isLoggedIn && <AuthForm />}
        </Container>
      </Box>
    </>
  );
}

export default AppBar;
