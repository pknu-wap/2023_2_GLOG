'use client';

import { ModalType } from '@/types/common';
import { Menu, MenuItem, useTheme } from '@mui/material';
import React, { useState } from 'react';
import PageLink from '../PageLink/PageLink';
import FriendModal from '../Layout/HeaderFriendModal/FriendModal';
import { enqueueSnackbar } from 'notistack';
import useGetLoginStatus from '@/hooks/useGetLoginStatus';

function SettingMenu({ open, onClose, anchorEl }: ModalType & { anchorEl: null | HTMLElement }) {
  const [friendOpen, setFriendOpen] = useState<boolean>(false);
  const theme = useTheme();
  const { isLogin } = useGetLoginStatus();

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
      {isLogin && (
        <MenuItem>
          <PageLink
            href="/mypage"
            onClick={() => {
              onClose();
            }}>
            마이페이지
          </PageLink>
        </MenuItem>
      )}
      <MenuItem
        sx={{ color: theme.palette.oppositeColor.main }}
        onClick={() => setFriendOpen(true)}>
        친구
      </MenuItem>
      {/* <MenuItem>
        <PageLink
          href="/scrap"
          onClick={() => {
            onClose();
          }}>
          스크랩
        </PageLink>
      </MenuItem> */}
      {isLogin && (
        <PageLink
          href="/login"
          onClick={() => {
            enqueueSnackbar({
              message: '로그아웃이 성공적으로 완료되었습니다.',
              variant: 'success',
            });
            localStorage.setItem('token', '');
          }}>
          <MenuItem>Logout</MenuItem>
        </PageLink>
      )}
      {!isLogin && (
        <MenuItem>
          <PageLink
            href="/login"
            onClick={() => {
              onClose();
            }}>
            로그인
          </PageLink>
        </MenuItem>
      )}
      <FriendModal open={friendOpen} onClose={() => setFriendOpen(false)}></FriendModal>
    </Menu>
  );
}

export default SettingMenu;
