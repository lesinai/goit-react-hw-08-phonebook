import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/authSelectors';
import { logoutThunk } from 'redux/auth/authOperations';
import { Button, Container, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelector);

  return (
    <Container
      display="flex"
      justifyContent="end"
      alignItems="end"
      flexDirection="column"
    >
      <Text mr="10px" color="white">{`${name}`}</Text>
      <Button
        rightIcon={<ArrowForwardIcon />}
        colorScheme="pink"
        variant="solid"
        display="flex"
        type="button"
        onClick={() => dispatch(logoutThunk())}
      >
        Log Out
      </Button>
    </Container>
  );
}

export default UserMenu;
