import { React } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectorIsLogin } from 'redux/auth/authSelectors';
import UserMenu from 'components/UserMenu/UserMenu';
import { Box, Container } from '@chakra-ui/react';
import { LinkNav } from 'components/App/App.Styled';

export default function Navigation() {
  const isLoggedIn = useSelector(selectorIsLogin);
  return (
    <Box w="auto" bgGradient="linear(to-r, pink.200, purple.500)">
      <Container
        bgGradient="linear(to-r, pink.200, purple.500)"
        w="auto"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Container>
          <LinkNav to="/" replace>
            HOME
          </LinkNav>
          {isLoggedIn && (
            <LinkNav to="contacts" replace>
              CONTACTS
            </LinkNav>
          )}
        </Container>
        {isLoggedIn && <UserMenu />}
      </Container>
      <Outlet />
    </Box>
  );
}
