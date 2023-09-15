'use client';

import { Collapse, ListItem, ListItemButton, ListItemText } from '@mui/material';

import { ReactNode, useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { CategoryType } from './SidebarMenuList';
import { usePathname } from 'next/navigation';

export const SidebarSubMenuContainer = ({
  children,
  text,
  url,
}: {
  children: ReactNode;
  text: CategoryType;
  url: string;
}) => {
  const pathname = usePathname();

  const [open, setOpen] = useState(pathname.includes(url));

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <ListItem sx={{ padding: '0' }}>
        <ListItemButton
          sx={{
            paddingY: '8px',
            ':hover': {
              backgroundColor: 'primary.light',
              color: 'primary.main',
            },
            backgroundColor: 'white',
            color: 'black',
          }}
          onClick={toggleMenu}>
          <>
            <ListItemText
              sx={{
                '& .MuiTypography-root': { fontWeight: '500' },
              }}>
              {text}
            </ListItemText>
            {open ? <ExpandLess /> : <ExpandMore />}
          </>
        </ListItemButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </>
  );
};