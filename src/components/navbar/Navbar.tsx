import React, { ReactNode } from 'react'
import { Box, Button, Container, Flex, Heading, HStack, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { NavbarLink, ThemeTogglerButton } from '.'
import { NavbarLogo } from './NavbarLogo'
import { NavbarHamburgerButton } from './NavbarHamburgerButton'
import { NAVBAR_LINKS } from '../../data'
import { __isServer__ } from '../../utils/constants'
import { useMeQuery } from '../../generated/graphql'
import { UserDetailsMenu } from '../user'

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const {
    isOpen: hamburgerIsOpen,
    onToggle: hamburgerOnToggle,
  } = useDisclosure();
  const router = useRouter();
  const { data: userData, loading } = useMeQuery();

  let userContent: ReactNode = null;

  if (loading) {
    userContent = <Heading fontSize='md'>Loading...</Heading>;
  } else if (userData && userData.me) {
    userContent = <UserDetailsMenu userData={userData} />;
  } else {
    userContent = (
      <HStack>
        <Button
          variant='outline'
          colorScheme='teal'
          onClick={() => {
            router.push('/user/login');
          }}
        >
          Sign In
        </Button>
        <Button
          variant='outline'
          colorScheme='teal'
          onClick={() => {
            router.push('/user/register');
          }}
        >
          Sign Up
        </Button>
      </HStack>
    );
  }

  return (
    <Box>
      <Flex
        as='header'
        height='80px'
        width='full'
        top='0'
        boxShadow='md'
        justifyContent='center'
        backgroundColor={useColorModeValue('white', 'gray.800')}
      >
        <Container as={Flex} maxW='5xl' align='center'>
          {/* Hamburger Button */}
          <Flex display={['flex', 'flex', 'none', 'none', 'none']}>
            <NavbarHamburgerButton
              onToggle={hamburgerOnToggle}
              isOpen={hamburgerIsOpen}
            />
          </Flex>

          {/* Logo */}
          <Flex
            flex={[1, 1, 0, 0, 0]}
            alignItems='center'
            justifyContent='center'
            mr={[0, 0, 8, 8, 8]}
          >
            <NavbarLogo />
          </Flex>

          {/* Links */}
          <Flex flex={1} display={['none', 'none', 'flex']}>
            <HStack spacing={4} alignContent='center' justifyContent='center'>
              {NAVBAR_LINKS.map((link, index) => {
                return (
                  <NavbarLink
                    key={index}
                    label={link.label}
                    href={link.href}
                    tooltip={link.tooltip}
                  />
                );
              })}
            </HStack>
          </Flex>

          {/* User buttons */}
          <Flex display={['none', 'none', 'flex']} mr={[0, 0, 4]}>
            {userContent}
          </Flex>

          {/* Theme Toggle Button */}
          {!userData?.me && !loading ? (
            <Flex>
              <ThemeTogglerButton />
            </Flex>
          ) : null}
        </Container>
      </Flex>
    </Box>
  );
};
