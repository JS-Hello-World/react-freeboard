type FreeBoardPost = {
  title: string;
  author: string;
  date: string;
};

export type FreeBoardProps = {
  posts: FreeBoardPost[];
};

export default function FreeBoard({ posts }: FreeBoardProps) {
  return (
    <table style={{ width: '400px' }}>
      <thead>
        <tr>
          <th>게시글 제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, key) => (
          <tr key={key}>
            <td>{post.title}</td>
            <td>{post.author}</td>
            <td>{post.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
