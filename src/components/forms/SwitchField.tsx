import React, { InputHTMLAttributes } from 'react'
import { Box, FormControl, FormLabel, Switch, SwitchProps } from '@chakra-ui/react'
import { useField } from 'formik'

type ISwitchField = SwitchProps &
  InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    name: string;
    helperText?: string;
    isRequired?: boolean;
  };

export const SwitchField: React.FC<ISwitchField> = ({
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
        <Switch if={field.name} size='md' {...props} />
      </FormControl>
    </Box>
  );
};
