import AppProvider from './1. app/providers/AppProvider.tsx';
import AppRoutes from './1. app/routes/AppRoutes.tsx';

export default function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}
