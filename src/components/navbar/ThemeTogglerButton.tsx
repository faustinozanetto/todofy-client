import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode, Tooltip, IconButton } from '@chakra-ui/react';

interface ThemeTogglerButtonProps {}

export const ThemeTogglerButton: React.FC<ThemeTogglerButtonProps> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Tooltip label='Toggle Color Mode' aria-label='Toggle Color Mode'>
        <IconButton
          aria-label='Color Mode'
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant='ghost'
        />
      </Tooltip>
    </>
  );
};
