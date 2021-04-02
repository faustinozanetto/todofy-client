import React from 'react'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import { Heading, ModalFooter } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { TodoEditForm } from '../forms/todo/TodoEditForm'
import { NormalTodoFragment } from '../../generated/graphql'

interface ITodoEditModal {
  data: NormalTodoFragment;
}

export const TodoEditModal: React.FC<ITodoEditModal> = ({ data }) => {
  const router = useRouter();
  const initialRef = React.useRef() as React.MutableRefObject<HTMLButtonElement>;
  const finalRef = React.useRef() as React.MutableRefObject<HTMLButtonElement>;

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={true}
        isCentered
        onClose={() => {
          router.back();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading fontSize='xl'>Edit Todo</Heading>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <TodoEditForm
              todo={data}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
