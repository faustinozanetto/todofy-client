import React from 'react';
import {
  HStack,
  useColorModeValue,
  Flex,
  Icon,
  Text,
  useColorMode,
  Switch,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { FiMoon, FiSun } from 'react-icons/fi';

interface UserDetailsMenuItemProps {
  text: string;
  isSwitch: boolean;
  icon?: IconType | undefined;
  onClick: () => void;
}

export const UserDetailsMenuItem: React.FC<UserDetailsMenuItemProps> = ({
  text,
  isSwitch,
  icon,
  onClick,
}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const selectIcon = () => {
    if (isSwitch) {
      return colorMode ? FiMoon : FiSun;
    }
    return icon;
  };
  return (
    <HStack
      py='0.4rem'
      px='0.8rem'
      justify='space-between'
      _hover={{
        cursor: 'pointer',
        color: useColorModeValue('pink.500', 'purple.500'),
        fontWeight: '500',
      }}
      onClick={async () => {
        if (!isSwitch) {
          onClick();
        }
      }}
    >
      <Flex justify='center' alignItems='center'>
        <Icon as={selectIcon()} fontSize='1.4rem' mr='3' />
        <Text userSelect='none'>{text}</Text>
      </Flex>
      {isSwitch === true ? (
        <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
      ) : null}
    </HStack>
  );
};
