'use client';

import { usePathname } from 'next/navigation';
import NavbarContainer from '../layout/navbar/container/NavbarContainer';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const hideNavbarOn = ['/', '/register', '/verify', '/create-account'];
  const showNavbar = !hideNavbarOn.includes(pathname);

  return (
    <>
      {showNavbar && <NavbarContainer />}
      {children}
    </>
  );
}
