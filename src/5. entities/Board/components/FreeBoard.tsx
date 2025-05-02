import { useNavigate } from 'react-router-dom';
import { FreeBoardPost } from '@/5. entities/Board/queries/useFreeBoardPostListQuery';
import styles from './FreeBoard.module.css';

export type FreeBoardProps = {
  posts: FreeBoardPost[];
};

export default function FreeBoard({ posts }: FreeBoardProps) {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/post/${id}`);
  };

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>게시글 제목</th>
            <th className={styles.th}>작성자</th>
            <th className={styles.th}>작성일</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, key) => (
            <tr key={key} onClick={() => handleClick(post.id)} className={styles.tr}>
              <td className={styles.td}>{post.title}</td>
              <td className={styles.td}>{post.author}</td>
              <td className={styles.td}>{post.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
