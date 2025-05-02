import { useNavigate } from 'react-router-dom';
import { PostDetailContent } from '../queries/useFreeBoardPostDetailQuery';
import styles from './PostDetail.module.css';

export type PostDetailProps = {
  post: PostDetailContent;
};

export default function PostDetail({ post }: PostDetailProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span>작성자</span>
              <span>{post.author}</span>
            </div>
            <div className={styles.metaItem}>
              <span>작성일</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>

        <div className={styles.content}>{post.content}</div>

        <div className={styles.actions}>
          <button className={styles.buttonSecondary} onClick={handleBack}>
            목록으로
          </button>
        </div>
      </div>
    </div>
  );
}
