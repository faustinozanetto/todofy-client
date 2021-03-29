import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import {
  IconButton,
  HStack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDeleteTodoMutation, UserTodosQuery } from '../../generated/graphql';
import { ConfirmTodoDelete } from './ConfirmTodoDelete';
import { TodoRow } from './TodoRow';

interface ITodosTable {
  todos?: UserTodosQuery;
}

export const TodosTable: React.FC<ITodosTable> = ({ todos }) => {
  const { isOpen, onOpen: onOpenDeleteConfirm, onClose } = useDisclosure();
  const [currentTodoID, setCurrentTodoID] = useState<number>(0);
  const [deleteTodo] = useDeleteTodoMutation();
  const toast = useToast();

  const confirmTodoDelete = async () => {
    const response = await deleteTodo({
      variables: { input: { id: currentTodoID } },
      update: (cache) => {
        // Post:77
        cache.evict({ id: 'Todo:' + currentTodoID });
      },
    });
    const errors = response.errors;
    if (errors) {
      toast({
        title: 'An error occurred',
        description: errors[0].message + '😕',
        status: 'error',
        duration: 1500,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Success',
        description: 'Successfully deleted the Todo! 😄',
        status: 'success',
        duration: 1500,
        isClosable: true,
      });
    }
    onClose();
  };
  return (
    <>
      <ConfirmTodoDelete
        isOpen={isOpen}
        onClose={onClose}
        onConfirmDelete={() => {
          confirmTodoDelete();
        }}
      />
      <Table variant='simple' size='lg' colorScheme='linkedin'>
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Description</Th>
            <Th>Completed</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {todos &&
            todos.userTodos.todos?.map((todo) => {
              return (
                <TodoRow
                  key={todo.id}
                  todo={todo}
                  onEdit={() => {
                    setCurrentTodoID(todo.id);
                  }}
                  onDelete={async () => {
                    setCurrentTodoID(todo.id);
                    onOpenDeleteConfirm.call(this);
                  }}
                />
              );
            })}
        </Tbody>
      </Table>
    </>
  );
};
