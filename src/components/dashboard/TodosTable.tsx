import React, { useState } from 'react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { HStack, IconButton, Table, Tbody, Td, Th, Thead, Tr, useDisclosure, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { useDeleteTodoMutation, UserTodosQuery } from '../../generated/graphql'
import { ConfirmTodoDelete } from './ConfirmTodoDelete'
import { TodoRow } from './TodoRow'
import { TodoEditModal } from './TodoEditModal'

interface ITodosTable {
  todos?: UserTodosQuery;
}

export const TodosTable: React.FC<ITodosTable> = ({ todos }) => {
  const {
    isOpen: isOpenDelete,
    onOpen: onOpenDeleteConfirm,
    onClose: onCloseDelete,
  } = useDisclosure();

  const [currentTodoID, setCurrentTodoID] = useState<number>(0);
  const [deleteTodo] = useDeleteTodoMutation();
  const toast = useToast();
  const router = useRouter();

  const confirmTodoDelete = async () => {
    const response = await deleteTodo({
      variables: { input: { id: currentTodoID } },
      update: (cache) => {
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
    onCloseDelete();
  };
  return (
    <>
      <ConfirmTodoDelete
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
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
                    router.push(`/todo/edit/${todo.id}`);
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
