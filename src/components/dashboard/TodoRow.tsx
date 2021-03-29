import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import { Tr, Td, HStack, IconButton, Heading } from '@chakra-ui/react';
import React from 'react';
import { NormalTodoFragment } from '../../generated/graphql';

interface TodoRowProps {
  todo?: NormalTodoFragment;
  onEdit: () => void;
  onDelete: () => void;
}

export const TodoRow: React.FC<TodoRowProps> = ({ todo, onEdit, onDelete }) => {
  return (
    <>
      <Tr>
        <Td>
          <Heading fontWeight='600' fontSize='md'>
            {todo?.title}
          </Heading>
        </Td>
        <Td>{todo?.description}</Td>
        <Td>{todo?.completed ? 'Completed! ✅ ' : 'Not Completed ❌'}</Td>
        <Td>
          <HStack spacing={2}>
            <IconButton
              aria-label='Edit Todo'
              icon={<EditIcon />}
              colorScheme='green'
              onClick={() => onEdit.call(this)}
            >
              Edit
            </IconButton>
            <IconButton
              aria-label='Delete Todo'
              icon={<DeleteIcon />}
              colorScheme='red'
              onClick={() => onDelete.call(this)}
            >
              Delete
            </IconButton>
          </HStack>
        </Td>
      </Tr>
    </>
  );
};
