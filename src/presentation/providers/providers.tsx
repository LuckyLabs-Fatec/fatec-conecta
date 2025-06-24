'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/presentation/store';
import { ToastContainer } from 'react-toastify';

export function Providers({ children }: { children: React.ReactNode }) {
  const hydrate = useAuthStore((state) => state.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}
