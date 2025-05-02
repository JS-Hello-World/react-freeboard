import { useQuery } from '@tanstack/react-query';
import { BOARD_QUERY_KEY } from './Board.key';

export type PostDetailContent = {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
};

export type FreeBoardPostDetail = Record<string, PostDetailContent>;

const detail: FreeBoardPostDetail = {
  '1': {
    id: '1',
    title: '첫 번째 게시글',
    author: '김철수',
    date: '2023-01-01',
    content: '첫 번째 게시글 내용',
  },
  '2': {
    id: '2',
    title: '두 번째 게시글',
    author: '이영희',
    date: '2024-01-02',
    content: '두 번째 게시글 내용',
  },
  '3': {
    id: '3',
    title: '세 번째 게시글',
    author: '박영수',
    date: '2024-01-03',
    content: '세 번째 게시글 내용',
  },
};

export const useFreeBoardPostDetailQuery = (id: string) => {
  return useQuery<PostDetailContent>({
    queryKey: BOARD_QUERY_KEY.post(id),
    queryFn: () => {
      return new Promise((resolve) => {
        window.setTimeout(() => {
          resolve(detail[id]);
        }, 1000);
      });
    },
  });
};
