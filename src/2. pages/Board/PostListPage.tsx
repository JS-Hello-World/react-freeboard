import FreeBoard from '@/4. features/ShowFreeBoard/components/FreeBoard';

export default function PostListPage() {
  return (
    <div style={style.container}>
      <h1>게시판</h1>
      <FreeBoard />
    </div>
  );
}

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    paddingTop: '20px',
  },
};
