import EntityFreeBoard from '@/entities/Board/components/FreeBoard';
import { Fragment } from 'react/jsx-runtime';
import { useFreeBoardPostsQuery } from '@/entities/Board/queries/useFreeBoardPostsQuery';

export default function FreeBoard() {
  const freeBoardQuery = useFreeBoardPostsQuery();
  return (
    <Fragment>
      {freeBoardQuery.isLoading ? <div>Loading...</div> : <EntityFreeBoard posts={freeBoardQuery.data ?? []} />}
    </Fragment>
  );
}
