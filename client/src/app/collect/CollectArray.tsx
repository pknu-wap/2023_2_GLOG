import React, { useEffect, useState } from 'react';
import IconButton from '@/components/Button/IconButton';

import { Stack } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { ICollectContent } from '@/types/dto';
import { useGetCollectDataQuery } from '@/api/collect-api';
import Toast from '@/components/Toast/Toast';
import CollectPost from './CollectPost';

function CollectArray({ kind }: { kind: 'likes' | 'views' | 'recent' }) {
  const [toastOpen, setToastOpen] = useState(false);

  const [page, setPage] = useState(0);
  const [backendSendPage, setBackendSendPage] = useState(1);

  const { data } = useGetCollectDataQuery({ kind, page: backendSendPage });
  const [kindArray, setKindArray] = useState<ICollectContent>(data);

  useEffect(() => {
    if (!kindArray) {
      setKindArray(data);
    }
  }, [data]);

  const newDataButtonClick = () => {
    if (page < kindArray.totalPages - 1) {
      setPage((prevPage) => prevPage + 1);
      setBackendSendPage((prevPage) => prevPage + 1);
    } else {
      setToastOpen(true);
    }
  };
  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <Toast
        open={toastOpen}
        onClose={() => setToastOpen(false)}
        toastMessage="게시글이 존재하지 않습니다."
      />
      <IconButton
        onClick={() => {
          page > 0 ? setPage((prevPage) => prevPage - 1) : setToastOpen(true);
        }}>
        <KeyboardArrowLeft />
      </IconButton>
      {kindArray?.postPreviewDtos?.slice(page * 4, page * 4 + 4).map((like) => {
        return <CollectPost like={like} key={like.postId} />;
      })}
      <IconButton onClick={newDataButtonClick}>
        <KeyboardArrowRight />
      </IconButton>
    </Stack>
  );
}

export default CollectArray;
