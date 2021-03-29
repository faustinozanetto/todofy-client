import React from 'react';
import { AppLayout } from '../../layout/AppLayout';
import {
  Box,
  Heading,
  VStack,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { LoginForm } from '../../components/forms/LoginForm';
import { SEO } from '../../components/seo';
import { withApollo } from '../../utils/apollo/withApollo';

interface ILogin {}

const LoginPage: React.FC<ILogin> = ({}) => {
  return (
    <AppLayout>
      <SEO
        title='Login | Todofy'
        description='The coolest Todo App in the web'
      />
      <Box d='flex' flexDir='column' alignContent='center'>
        <VStack>
          <Heading
            mb={4}
            textAlign='center'
            size='4xl'
            fontWeight='bold'
            bgClip='text'
            bgGradient='linear(to-l, green.300, teal.600)'
          >
            Account
          </Heading>
          <Text
            mt={4}
            textAlign='center'
            alignContent='center'
            justifyContent='center'
            fontWeight='medium'
          >
            <Stack direction={['column', 'row']}>
              <Text>Don't have an account?</Text>
              <Box
                as='a'
                marginStart='1'
                href='/user/register'
                color={useColorModeValue('blue.600', 'blue.200')}
                fontWeight='medium'
                _hover={{ color: 'blue.600' }}
              >
                Register One!
              </Box>
            </Stack>
          </Text>
        </VStack>
      </Box>
      {/* Login form Box */}
      <Box mt={4} maxW={{ base: '18em', sm: '25em', lg: '30em' }} mx='auto'>
        <Box
          bg={useColorModeValue('white', 'gray.700')}
          shadow='base'
          p={4}
          rounded='lg'
        >
          <LoginForm />
        </Box>
      </Box>
    </AppLayout>
  );
};

export default withApollo({ ssr: false })(LoginPage);