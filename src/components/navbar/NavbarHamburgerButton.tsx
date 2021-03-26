import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from '@chakra-ui/icons';

type NavbarHamburgerButtonProps = {
  onToggle: () => void;
  isOpen: boolean;
};

export const NavbarHamburgerButton: React.FC<NavbarHamburgerButtonProps> = ({
  onToggle,
  isOpen,
}) => {
  return (
    <>
      <IconButton
        onClick={onToggle}
        icon={
          isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
        }
        variant={'ghost'}
        aria-label={'Toggle Navigation'}
      />
    </>
  );
};
