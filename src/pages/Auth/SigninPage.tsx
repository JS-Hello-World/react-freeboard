import SigninForm from '../../features/Signin/components/SigninForm';
import FreeBoard from '../../features/ShowFreeBoard/components/FreeBoard';

export default function SigninPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1>Sign In</h1>
      <SigninForm />
      <FreeBoard />
    </div>
  );
}
