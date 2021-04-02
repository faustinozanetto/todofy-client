import * as Yup from 'yup'
import React from 'react'
import { Form, Formik, FormikProps } from 'formik'
import { Box, Stack } from '@chakra-ui/layout'
import { Button, useToast } from '@chakra-ui/react'
import { route } from 'next/dist/next-server/server/router'
import { useRouter } from 'next/router'

import { FormField, SwitchField } from '../index'
import { toErrorMap } from '../../../utils'
import { NormalTodoFragment, useUpdateTodoMutation } from '../../../generated/graphql'

interface ITodoEditValues {
  title: string;
  description: string;
  completed: boolean;
}

interface ITodoEdit {
  todo: NormalTodoFragment;
}
/**
 * Sign in schema input validation with Yup.
 */
const editFormSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required!')
    .min(3, 'Title has to be longer than 3 characters!')
    .max(25, 'Title has to be shorter than 25 characters!'),
  description: Yup.string()
    .required('Description is required!')
    .min(3, 'Description has to be longer than 3 characters!')
    .max(200, 'Description has to be shorter than 200 characters!'),
  completed: Yup.boolean().required('Completed is required!'),
});

export const TodoEditForm: React.FC<ITodoEdit> = ({ todo }) => {
  const [updateTodo] = useUpdateTodoMutation();
  const router = useRouter();
  const toast = useToast();

  if (!todo) {
    return <div>error</div>;
  }

  const initialValues: ITodoEditValues = {
    title: todo.title,
    description: todo.description,
    completed: todo.completed,
  };

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        validationSchema={editFormSchema}
        onSubmit={async (values, { setErrors }) => {
          const response = await updateTodo({
            variables: {
              id: todo?.id!,
              title: values.title,
              description: values.description,
              completed: values.completed,
            },
          });
          console.log(response);

          const errors = response?.data?.updateTodo?.errors!;
          if (errors) {
            setErrors(toErrorMap(errors));
            console.log(errors);
            toast({
              title: 'An error occurred',
              description: errors[0].message,
              status: 'error',
              duration: 1500,
              isClosable: true,
            });
          } else if (response?.data?.updateTodo?.todo!) {
            toast({
              title: 'Successfully edited Todo!',
              status: 'success',
              duration: 1500,
              isClosable: true,
            });
            router.back();
          }
        }}
      >
        {(props: FormikProps<ITodoEditValues>) => {
          const { isSubmitting } = props;
          return (
            <Form>
              <FormField
                name='title'
                label='Title'
                defaultValue={todo?.title!}
                type='text'
              />
              <FormField
                name='description'
                label='Description'
                defaultValue={todo?.description!}
                type='text'
              />
              <SwitchField
                name='completed'
                label='Completed'
                defaultChecked={todo?.completed}
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
                  Save
                </Button>
              </Stack>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};
