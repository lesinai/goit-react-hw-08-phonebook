import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authOperations';
import {
  Container,
  Heading,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { AtSignIcon, ViewOffIcon, AddIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';

export const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(loginThunk(user));
  };

  return (
    <Container mt="20px" mb="40px">
      <form onSubmit={handleSubmit}>
        <Heading textAlign="center" color="white" mb="20px">
          Login Form
        </Heading>
        <InputGroup mb="20px" mt="20px">
          <InputLeftElement pointerEvents="none">
            <AtSignIcon color="white" />
          </InputLeftElement>
          <Input
            _focus={{
              borderColor: 'pink.500',
              boxShadow: '0 0 0 1px #D53F8C',
            }}
            size="md"
            mb="10px"
            w="100%"
            name="email"
            autoComplete="on"
            type="text"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="Email..."
            value={email}
            onChange={handleEmailChange}
          />
        </InputGroup>
        <InputGroup mb="20px" mt="20px">
          <InputLeftElement pointerEvents="none">
            <ViewOffIcon color="white" />
          </InputLeftElement>
          <Input
            mb="10px"
            _focus={{
              borderColor: 'pink.500',
              boxShadow: '0 0 0 1px #D53F8C',
            }}
            size="md"
            w="100%"
            name="password"
            type="password"
            placeholder="Password..."
            minLength="7"
            autoComplete="on"
            value={password}
            onChange={handlePasswordChange}
          />
        </InputGroup>
        <Button
          leftIcon={<AddIcon />}
          colorScheme="pink"
          variant="solid"
          type="submit"
          mr="auto"
          ml="auto"
          display="flex"
          mt="20px"
        >
          Login
        </Button>
      </form>
    </Container>
  );
};
