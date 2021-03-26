import React from 'react';
import { Box, Tooltip, Link, useColorModeValue } from '@chakra-ui/react';

export interface INavbarLink {
  label: string;
  href: string;
  tooltip: string;
}

export const NavbarLink: React.FC<INavbarLink> = ({ label, href, tooltip }) => {
  return (
    <>
      <Box>
        <Tooltip label={tooltip} aria-label={tooltip}>
          <Link
            fontWeight={500}
            color={useColorModeValue('gray.600', 'gray.200')}
            href={href}
            _hover={{
              textDecoration: 'none',
              fontWeight: '600',
            }}
          >
            {label}
          </Link>
        </Tooltip>
      </Box>
    </>
  );
};
