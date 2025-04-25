import { useQuery } from '@tanstack/react-query';
import { BOARD_QUERY_KEY } from './Board.key';

const posts = [
  {
    title: '게시글 제목',
    author: '작성자',
    date: '2024-01-01',
  },
];

export const useFreeBoardPostsQuery = () => {
  return useQuery<{ title: string; author: string; date: string }[]>({
    queryKey: BOARD_QUERY_KEY.item('freeBoard'),
    staleTime: 1000 * 10,
    queryFn: () =>
      new Promise((resolve) => {
        window.setTimeout(() => {
          resolve(posts);
        }, 2000);
      }),
  });
};
