import React from 'react';
import {
  Avatar,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuGroup,
  MenuDivider,
} from '@chakra-ui/react';
import { MeQuery, useLogoutMutation } from '../../generated/graphql';
import { FiLogOut, FiSettings } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { useApolloClient } from '@apollo/client';
import { UserDetailsMenuItem } from './UserDetailsMenuItem';
import { useRouter } from 'next/router';

type UserDetailsMenuProps = {
  userData?: MeQuery;
};

export const UserDetailsMenu: React.FC<UserDetailsMenuProps> = ({
  userData,
}) => {
  const [logout] = useLogoutMutation();
  const apolloClient = useApolloClient();
  const router = useRouter();
  return (
    <>
      <Menu>
        <MenuButton as={Avatar} src='"https://bit.ly/code-beast"' />
        <MenuList>
          <MenuGroup
            fontWeight='500'
            fontSize='xl'
            title={`Hi, ${userData?.me?.username}`}
          ></MenuGroup>
          <UserDetailsMenuItem
            text='Profile'
            isSwitch={false}
            icon={CgProfile}
            onClick={async () => {}}
          />
          <MenuDivider />
          <UserDetailsMenuItem
            text='Settings'
            isSwitch={false}
            icon={FiSettings}
            onClick={async () => {}}
          />
          <UserDetailsMenuItem
            text='Dark Theme'
            isSwitch={true}
            icon={FiLogOut}
            onClick={() => {}}
          />
          <MenuDivider />
          <UserDetailsMenuItem
            text='Logout'
            isSwitch={false}
            icon={FiLogOut}
            onClick={async () => {
              await logout();
              await apolloClient.clearStore();
              router.reload();
            }}
          />
        </MenuList>
      </Menu>
    </>
  );
};
