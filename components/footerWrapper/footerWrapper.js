'use client';
import Footer from '../footer/Footer';
import ReduxProvider from '../reduxProvider/reduxProvider';

import { usePathname } from 'next/navigation';
export default function FooterWrapper() {
  const pathname = usePathname();

  // Check if the current route starts with "/dashboard"
  const hideFooter = pathname.startsWith('/dashboard');
  return (
    <>
      {!hideFooter && (
        <ReduxProvider>
          <Footer></Footer>
        </ReduxProvider>
      )}
    </>
  );
}
