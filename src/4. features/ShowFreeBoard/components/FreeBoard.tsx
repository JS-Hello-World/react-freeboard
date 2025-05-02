import EntityFreeBoard from '@/5. entities/Board/components/FreeBoard';
import { Fragment } from 'react/jsx-runtime';
import { useFreeBoardPostListQuery } from '@/5. entities/Board/queries/useFreeBoardPostListQuery';
import { FreeBoardPost } from '@/5. entities/Board/queries/useFreeBoardPostListQuery';

export default function FreeBoard() {
  const freeBoardQuery = useFreeBoardPostListQuery();

  const posts = (freeBoardQuery.data ?? []) as FreeBoardPost[];

  return (
    <Fragment>
      {freeBoardQuery.isLoading ? (
        <div>Loading...</div>
      ) : freeBoardQuery.isError ? (
        <div>Error...</div>
      ) : (
        <EntityFreeBoard posts={posts} />
      )}
    </Fragment>
  );
}
