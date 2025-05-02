import { createQueryKeys } from '@lukemorales/query-key-factory';

export const BOARD_QUERY_KEY = createQueryKeys('board', {
  // 게시글 목록
  list: null,

  // 게시글 상세
  post: (id: string) => ['post', id],
});
