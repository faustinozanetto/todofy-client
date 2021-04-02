import React from 'react';
import { Formik, FormikProps, Form } from 'formik';
import * as Yup from 'yup';
import { Box, Stack } from '@chakra-ui/layout';
import { FormField } from './FormField';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface IForgotPasswordForm {}

interface IForgotPasswordFormValues {
  username: string;
  email: string;
  newPassword: string;
}

/**
 * Forgot password schema input validation with Yup.
 */
const signInSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required!')
    .min(3, 'Username has to be longer than 3 characters!')
    .max(25, 'Username has to be shorter than 25 characters!'),
  email: Yup.string()
    .email('E-mail is not valid!')
    .required('E-mail is required!'),
  newPassword: Yup.string()
    .required('Password is required!')
    .min(3, 'Password has to be longer than 3 characters!')
    .max(25, 'Password has to be shorter than 25 characters!'),
});

export const ForgotPasswordForm: React.FC<IForgotPasswordForm> = ({}) => {
  const router = useRouter();
  const initialValues: IForgotPasswordFormValues = {
    username: '',
    email: '',
    newPassword: '',
  };
  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={(values: IForgotPasswordFormValues, actions) => {
          console.log(values);
        }}
      >
        {(props: FormikProps<IForgotPasswordForm>) => {
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
                name='newPassword'
                label='New Password'
                placeholder='New Password'
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
                  Change Password
                </Button>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};
