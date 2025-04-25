import TextField from '../../../shared/components/Form/TextField';
import Button from '../../../shared/components/Form/Button';
import { useState } from 'react';

export type AuthFormProps = {
  onSubmit: (username: string, password: string) => void;
};

export default function AuthForm({ onSubmit }: AuthFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onSubmit(username, password);
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <TextField />
      <TextField />
      <Button />
    </form>
  );
}
