import React from 'react';
import { Formik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import { Box, Stack } from '@chakra-ui/layout';
import { FormField } from './FormField';
import { Button, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useRegisterMutation } from '../../generated/graphql';
import { toErrorMap } from '../../utils';

interface IRegisterForm {}

interface IRegisterFormValues {
  username: string;
  email: string;
  password: string;
}

/**
 * Register schema input validation with Yup.
 */
const registerSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required!')
    .min(3, 'Username has to be longer than 3 characters!')
    .max(25, 'Username has to be shorter than 25 characters!'),
  email: Yup.string()
    .email('E-mail is not valid!')
    .required('E-mail is required!'),
  password: Yup.string()
    .required('Password is required!')
    .min(3, 'Password has to be longer than 3 characters!')
    .max(25, 'Password has to be shorter than 25 characters!'),
});

export const RegisterForm: React.FC<IRegisterForm> = ({}) => {
  const router = useRouter();
  const toast = useToast();
  const [register] = useRegisterMutation();
  const initialValues: IRegisterFormValues = {
    username: '',
    email: '',
    password: '',
  };
  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values, { setErrors }) => {
          const response = await register({
            variables: { input: values },
          });
          const errors = response.data?.register.errors;
          const user = response.data?.register.user;
          if (errors) {
            setErrors(toErrorMap(errors));
            toast({
              title: 'An error occurred',
              description: errors[0].message,
              status: 'error',
              duration: 1500,
              isClosable: true,
            });
          } else if (user) {
            router.push('/');
            toast({
              title: 'Registered Successfully',
              status: 'success',
              duration: 1500,
              isClosable: true,
            });
          }
        }}
      >
        {(props: FormikProps<IRegisterFormValues>) => {
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
                name='email'
                label='Email'
                placeholder='Email'
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
                  type='submit'
                  width='100%'
                  isLoading={isSubmitting}
                >
                  Register
                </Button>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};
