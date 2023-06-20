import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registrationThunk } from 'redux/auth/authOperations';
import {
  Container,
  Heading,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { AddIcon, StarIcon, AtSignIcon, ViewOffIcon } from '@chakra-ui/icons';

export const Registration = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registrationThunk(user));
  };

  const handleChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container mb="40px" mt="20px">
      <form onSubmit={handleSubmit}>
        <Heading textAlign="center" color="white" mb="20px">
          Registration form
        </Heading>
        <InputGroup mb="20px" mt="20px">
          <InputLeftElement pointerEvents="none">
            <StarIcon color="white" />
          </InputLeftElement>
          <Input
            _focus={{
              borderColor: 'pink.500',
              boxShadow: '0 0 0 1px #D53F8C',
            }}
            size="md"
            mb="10px"
            w="100%"
            name="name"
            type="text"
            placeholder="Name..."
            autoComplete="on"
            minLength="2"
            value={user.name}
            onChange={handleChange}
          />
        </InputGroup>
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
            placeholder="Email..."
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={user.email}
            onChange={handleChange}
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
            value={user.password}
            onChange={handleChange}
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
          Sign UP
        </Button>
      </form>
    </Container>
  );
};
