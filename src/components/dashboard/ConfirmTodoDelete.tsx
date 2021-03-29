import React from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from '@chakra-ui/react';

interface IConfirmTodoDelete {
  isOpen: boolean;
  onClose: () => void;
  onConfirmDelete: () => void;
}

export const ConfirmTodoDelete: React.FC<IConfirmTodoDelete> = ({
  isOpen,
  onClose,
  onConfirmDelete,
}) => {
  const cancelRef = React.useRef() as React.MutableRefObject<HTMLButtonElement>;
  return (
    <>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Confirm Delete?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quis
            odio culpa exercitationem earum numquam magnam voluptatum,
            cupiditate excepturi animi?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button
              colorScheme='red'
              ml={3}
              onClick={() => {
                onConfirmDelete.call(this);
              }}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
