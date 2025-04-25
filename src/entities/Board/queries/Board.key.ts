import { createQueryKeys } from '@lukemorales/query-key-factory';

export const BOARD_QUERY_KEY = createQueryKeys('board', {
  all: null,
  item: (id: string) => [id],
});
