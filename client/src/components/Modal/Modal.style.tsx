import { Dialog as MuiDialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ModalTitle = styled(DialogTitle)(({ theme }) => ({
  '&&.MuiDialogTitle-root': { backgroundColor: theme.palette.themeColor.main, padding: '16px 8px' },
}));

export const ModalContent = styled(DialogContent)(({ theme }) => ({
  '&&.MuiDialogContent-root': {
    backgroundColor: theme.palette.themeColor.main,
    padding: '20px 8px',
  },
}));

export const ModalActions = styled(DialogActions)(({ theme }) => ({
  '&&.MuiDialogActions-root': { width: '100%', backgroundColor: theme.palette.themeColor.main },
}));

export const DialogStyle = styled(MuiDialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    padding: '2px 20px 2px 20px',
    backgroundImage: 'none',
    backgroundColor: theme.palette.themeColor.main,
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));
