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
import { ForgotPasswordForm } from '../../components/forms';
import { withApollo } from '../../utils/apollo/withApollo';

interface IForgotPassword {}

const ForgotPasswordPage: React.FC<IForgotPassword> = ({}) => {
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
              <Text>Password reset </Text>
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
          <ForgotPasswordForm />
        </Box>
      </Box>
    </AppLayout>
  );
};

export default withApollo({ ssr: false })(ForgotPasswordPage);
