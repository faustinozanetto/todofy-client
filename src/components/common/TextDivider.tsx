import React from 'react';
import { Box, Divider, Flex, FlexProps } from '@chakra-ui/react';

export const TextDivider: React.FC<FlexProps> = (props: FlexProps) => {
  return (
    <Flex align='center' color='gray.300' {...props}>
      <Box flex='1'>
        <Divider borderColor='currentcolor' />
      </Box>
      <Box as='span' px='3'>
        {props.children}
      </Box>
      <Box flex='1'>
        <Divider borderColor='currentcolor' />
      </Box>
    </Flex>
  );
};
