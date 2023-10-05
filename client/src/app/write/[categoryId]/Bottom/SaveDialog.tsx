import { Dialog } from '@/components/Dialog/Dialog';
import { ModalType } from '@/types/common';
import React from 'react';

function SaveDialog({ open, onClose, saveType }: ModalType & { saveType: '임시' | '템플릿' }) {
  const typeToAction = {
    임시: () => console.log('임시'),
    템플릿: () => console.log('템플릿'),
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      message={`${saveType} 저장 하시겠습니까?`}
      action={{
        content: '확인',
        action: typeToAction[saveType],
      }}
    />
  );
}

export default SaveDialog;
