import React, { InputHTMLAttributes } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  InputProps,
} from '@chakra-ui/react';
import { useField } from 'formik';

type IFormField = InputProps &
  InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: string;
    helperText?: string;
    isRequired?: boolean;
  };

export const FormField: React.FC<IFormField> = ({
  label,
  isRequired,
  helperText,
  ...props
}) => {
  const [field, { error }] = useField(props);
  return (
    <Box my={4}>
      <FormControl isInvalid={!!error} isRequired={isRequired}>
        <FormLabel htmlFor={field.name}>{label}</FormLabel>
        <Input {...field} {...props} id={field.name} />
      </FormControl>
    </Box>
  );
};
