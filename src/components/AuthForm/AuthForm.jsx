import { LinkAuth } from '../App/App.Styled';
import { Text } from '@chakra-ui/react';

function AuthForm() {
  return (
    <nav>
      {
        <Text fontSize="2xl" color="white" textAlign="center">
          Please <LinkAuth to="/register">Sign up</LinkAuth> or{' '}
          <LinkAuth to="/login">Log in</LinkAuth> to have access to the
          Phonebook!
        </Text>
      }
    </nav>
  );
}
export default AuthForm;
