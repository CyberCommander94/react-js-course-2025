import type { FC } from 'react';
import { AppLayout } from './components/layouts/app';
import { HomePage } from './pages/home-page';

export const App: FC = () => {
  return (
    <AppLayout>
      <HomePage />
    </AppLayout>
  );
};
