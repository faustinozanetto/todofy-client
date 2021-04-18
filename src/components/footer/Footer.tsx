import React from 'react';
import {
  Container,
  Box,
  Stack,
  Text,
  Link,
  Grid,
  useColorModeValue,
  HStack,
  IconButton,
  BoxProps,
  Divider,
  Flex,
  Input,
  Button,
  FormControl,
  Heading,
} from '@chakra-ui/react';
import { FiFacebook, FiTwitter } from 'react-icons/fi';
import { FooterCategory } from './FooterTypes';

const footerData: FooterCategory[] = [
  {
    title: 'Company',
    links: [
      { label: 'Why Gardeniox', href: '/' },
      { label: 'Our Story', href: '/' },
      { label: 'Careers', href: '/' },
      { label: 'FAQ', href: '/' },
    ],
  },
  {
    title: 'Product',
    links: [
      { label: 'How it works', href: '/' },
      { label: 'Pricing', href: '/' },
      { label: 'Use Cases', href: '/' },
      { label: 'Integrations', href: '/' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/' },
      { label: 'Partnerships', href: '/' },
      { label: 'Case Studies', href: '/' },
      { label: 'Help Center', href: '/' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Login', href: '/' },
      { label: 'Register', href: '/' },
      { label: 'Chat with Us', href: '/' },
      { label: 'Twitter', href: '/' },
    ],
  },
];

export const Footer = (props: BoxProps) => {
  return (
    <Box
      as='footer'
      bg={useColorModeValue('gray.100', 'gray.900')}
      color={useColorModeValue('gray.600', 'gray.500')}
      py='4em'
      {...props}
    >
      <Box
        maxW={{ base: '36rem', md: '80rem' }}
        px={{ base: '1.5rem', md: '2rem' }}
        py={{ base: '3rem', md: '5rem' }}
        mx='auto'
      >
        {/* Top */}
        <Box
          d='flex'
          flexDirection={{ base: 'column', lg: 'row' }}
          alignItems='flex-start'
          justifyContent='space-between'
          mb={{ base: '2.5rem', md: '2.5rem', lg: '4rem' }}
        >
          {/* Left */}
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(4, 1fr)',
            }}
            gap={{ base: '3rem', md: '2.5rem' }}
            marginInlineEnd={{ md: '1rem', lg: '4rem' }}
            maxWidth={{ md: '42rem' }}
            width='auto'
            flex='1 1 0%'
          >
            {footerData.map((data, index) => {
              return (
                <FooterLinksSection
                  key={index}
                  title={data.title}
                  links={data.links}
                />
              );
            })}
          </Grid>

          {/* Right */}
          <Box
            flexDir={{ lg: 'row' }}
            flex='2 1 0%'
            maxWidth={{ lg: '420px' }}
            ml={{ lg: 'auto' }}
            mt={{ base: '3rem', lg: '0' }}
          >
            <Text
              textTransform='uppercase'
              mb={{ base: '1.5rem', lg: '2.5rem' }}
              fontWeight='700'
              letterSpacing='0.025rem'
            >
              Subscribe to our newsletter!
            </Text>
            <Text lineHeight='1.625'>
              Get Overflow resources, curated content, and design inspiration
              delivered straight into your inbox. Be the first to learn the news
              about new features and product updates.
            </Text>
            <form>
              <Box d={{ md: 'flex' }} mt='2rem' maxWidth='36rem'>
                <FormControl marginInlineEnd='-1px'>
                  <Input placeholder='Your email' />
                </FormControl>
                <Button
                  colorScheme='blue'
                  borderTopLeftRadius={{ md: '0' }}
                  borderBottomLeftRadius={{ md: '0' }}
                  width={{ base: '100%', md: 'auto' }}
                >
                  Subscribe
                </Button>
              </Box>
            </form>
          </Box>
          {/* <Box paddingInlineEnd={{ base: '3rem' }} mb={{ base: '2.5rem' }}>
            <Text
              as='a'
              color={useColorModeValue('gray.800', 'white')}
              fontSize='4xl'
              fontWeight='bold'
              href='/'
              bgClip='text'
              bgGradient='linear(to-l, #7928CA, #FF0080)'
            >
              Gardeniox
            </Text>
            <HStack
              dir='row'
              display='flex'
              flexDir='row'
              mt='2rem'
              alignItems='center'
            >
              <IconButton
                aria-label='Gardeniox Twitter'
                colorScheme='gray'
                icon={<FiTwitter />}
              />
              <IconButton
                aria-label='Gardeniox Facebook'
                colorScheme='gray'
                icon={<FiFacebook />}
              />
              <IconButton
                aria-label='Gardeniox Twitter'
                colorScheme='gray'
                icon={<FiTwitter />}
              />
              <IconButton
                aria-label='Gardeniox Twitter'
                colorScheme='gray'
                icon={<FiTwitter />}
              />
            </HStack>
          </Box> */}
        </Box>

        {/* Separator */}
        <Divider my='2.5rem' />

        {/* Bottom */}
        <Flex
          justifyContent='space-between'
          flexDir={{ md: 'column-reverse', lg: 'row' }}
          alignItems={{ md: 'flex-start', lg: 'center' }}
        >
          {/* Left */}
          <HStack
            d='flex'
            width={{ md: '100%', lg: 'auto' }}
            mt={{ md: '2rem', lg: '0' }}
            justifyContent={{ md: 'space-between', lg: 'flex-start' }}
            alignItems={{ base: 'flex-start', md: 'center' }}
            flexDir={{ base: 'column', md: 'row' }}
          >
            <Heading textAlign='center'>Gardeniox</Heading>
            <HStack d='flex' alignItems='center' flexDir='row'>
              <IconButton
                aria-label='Gardeniox Twitter'
                colorScheme='gray'
                variant='ghost'
                icon={<FiTwitter />}
              />
              <IconButton
                aria-label='Gardeniox Facebook'
                colorScheme='gray'
                variant='ghost'
                icon={<FiFacebook />}
              />
              <IconButton
                aria-label='Gardeniox Twitter'
                colorScheme='gray'
                variant='ghost'
                icon={<FiTwitter />}
              />
              <IconButton
                aria-label='Gardeniox Twitter'
                colorScheme='gray'
                variant='ghost'
                icon={<FiTwitter />}
              />
            </HStack>
          </HStack>
          {/* Right */}
          <HStack>
            <Text>
              Made with ❤️ on 🇦🇷 by{' '}
              <Link to='https://github.com/faustinozanetto' mt='0.5rem'>
                Faustino Zanetto
              </Link>
            </Text>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

const FooterLinksSection: React.FC<FooterCategory> = ({ title, links }) => {
  return (
    <Box>
      <Text fontWeight='700' mb='1rem'>
        {title}
      </Text>
      <Stack d='flex' flexDir='column'>
        {links &&
          links.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.label}
            </Link>
          ))}
      </Stack>
    </Box>
  );
};
