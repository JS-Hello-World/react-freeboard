import { useParams } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import { useFreeBoardPostDetailQuery } from '@/5. entities/Board/queries/useFreeBoardPostDetailQuery';
import EntityPostDetail from '@/5. entities/Board/components/PostDetail';
import { PostDetailContent } from '@/5. entities/Board/queries/useFreeBoardPostDetailQuery';

export default function PostDetail() {
  const { id } = useParams();
  const postQuery = useFreeBoardPostDetailQuery(id ?? '');

  return (
    <Fragment>
      {postQuery.isLoading ? (
        <div>Loading...</div>
      ) : postQuery.isError ? (
        <div>Error...</div>
      ) : (
        <EntityPostDetail post={postQuery.data as PostDetailContent} />
      )}
    </Fragment>
  );
}
