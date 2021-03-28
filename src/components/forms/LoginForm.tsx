import React, { useContext } from 'react';
import { Formik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import { Box, Spacer, Stack } from '@chakra-ui/layout';
import { FormField } from './FormField';
import { Button, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { toErrorMap } from '../../utils';
import { useLoginMutation, MeQuery, MeDocument } from '../../generated/graphql';
import { authContext } from '../user/userContext';
import { setAccessToken } from '../../utils/accessToken';

interface ILoginValues {
  username: string;
  password: string;
}

interface ILoginForm {}
/**
 * Sign in schema input validation with Yup.
 */
const signInSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required!')
    .min(3, 'Username has to be longer than 3 characters!')
    .max(25, 'Username has to be shorter than 25 characters!'),
  password: Yup.string()
    .required('Password is required!')
    .min(3, 'Password has to be longer than 3 characters!')
    .max(25, 'Password has to be shorter than 25 characters!'),
});

export const LoginForm: React.FC<ILoginForm> = ({}) => {
  const [login] = useLoginMutation();
  const router = useRouter();
  const initialValues: ILoginValues = {
    username: '',
    password: '',
  };
  const toast = useToast();

  const { setAuthData } = useContext(authContext);

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={async (values, { setErrors }) => {
          const response = await login({
            variables: values,
            update: (store, { data }) => {
              if (!data) {
                return;
              }

              store.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  me: data.login.user,
                },
              });
            },
          });
          if (response && response?.data?.login?.accessToken) {
            try {
              setAccessToken(response.data.login.accessToken);
              //  setAuthData(response.data.login.accessToken!);
            } catch (error) {
              console.error(error);
            }
          }
          const errors = response.data?.login.errors;
          if (errors) {
            setErrors(toErrorMap(errors));
            toast({
              title: 'An error occurred',
              description: errors[0].message,
              status: 'error',
              duration: 1500,
              isClosable: true,
            });
          } else if (response.data?.login.user) {
            if (typeof router.query.next === 'string') {
              router.push(router.query.next);
            } else {
              router.push('/');
              toast({
                title: 'Logged in Successfully',
                status: 'success',
                duration: 1500,
                isClosable: true,
              });
            }
          }

          // loginCall();
        }}
      >
        {(props: FormikProps<ILoginForm>) => {
          const { isSubmitting } = props;
          return (
            <Form>
              <FormField
                name='username'
                label='Username'
                placeholder='Username'
                type='text'
                isRequired
              />
              <FormField
                name='password'
                label='Password'
                placeholder='Password'
                type='password'
                isRequired
              />
              <Stack
                direction={{ base: 'column', sm: 'row', md: 'row' }}
                justify='center'
                mt={6}
              >
                <Button
                  colorScheme='teal'
                  width='100%'
                  onClick={() => {
                    router.push('/user/forgot-password');
                  }}
                >
                  Forgot Password?
                </Button>
                <Spacer />
                <Button
                  colorScheme='teal'
                  type='submit'
                  width='100%'
                  isLoading={isSubmitting}
                >
                  Login
                </Button>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};
