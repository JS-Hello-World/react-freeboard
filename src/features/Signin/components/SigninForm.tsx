import axios from 'axios';
import AuthForm from '../../../entities/Auth/components/AuthForm';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function SigninForm() {
  const queryClient = useQueryClient();
  const singinMutation = useMutation({
    mutationFn: ({ username, password }: { username: string; password: string }) => {
      return axios.post('endpoint', {
        username,
        password,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['freeBoard'] });
    },
  });

  return <AuthForm onSubmit={(username, password) => singinMutation.mutate({ username, password })} />;
}
