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
import { RegisterForm } from '../../components/forms/RegisterForm';
import { withApollo } from '../../utils/apollo/withApollo';

interface IRegister {}

const RegisterPage: React.FC<IRegister> = ({}) => {
  return (
    <AppLayout>
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
              <Text>Start your journey with Todofy</Text>
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
          <RegisterForm />
        </Box>
      </Box>
    </AppLayout>
  );
};

export default withApollo({ ssr: false })(RegisterPage);