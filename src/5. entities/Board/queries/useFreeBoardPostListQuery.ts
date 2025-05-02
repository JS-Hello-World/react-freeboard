import { useQuery } from '@tanstack/react-query';
import { BOARD_QUERY_KEY } from './Board.key';

export type FreeBoardPost = {
  id: string;
  title: string;
  author: string;
  date: string;
};

const posts: FreeBoardPost[] = [
  {
    id: '1',
    title: '첫 번째 게시글',
    author: '김철수',
    date: '2023-01-01',
  },
  {
    id: '2',
    title: '두 번째 게시글',
    author: '이영희',
    date: '2024-01-02',
  },
  {
    id: '3',
    title: '세 번째 게시글',
    author: '박영수',
    date: '2024-01-03',
  },
];

export const useFreeBoardPostListQuery = () => {
  return useQuery<FreeBoardPost[]>({
    queryKey: BOARD_QUERY_KEY.list,
    staleTime: 1000 * 10,
    queryFn: () =>
      new Promise((resolve) => {
        window.setTimeout(() => {
          resolve(posts);
        }, 2000);
      }),
  });
};
