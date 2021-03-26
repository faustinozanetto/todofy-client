import React from 'react';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from 'styled-components';

const StyledLogo = styled.a`
  background: linear-gradient(90deg, #66f, #09f, #00ff9d, #f39, #66f);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow_animation 6s ease-in-out infinite;
  background-size: 400% 100%;

  @keyframes rainbow_animation {
    0%,
    to {
      background-position: 0 0;
    }

    50% {
      background-position: 100% 0;
    }
  }
`;

export const NavbarLogo: React.FC<{}> = ({}) => {
  return (
    <>
      <Text as={StyledLogo} fontSize='4xl' fontWeight='bold'>
        Todofy
      </Text>
    </>
  );
};
