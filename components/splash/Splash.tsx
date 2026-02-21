// app/page.tsx
import dynamic from 'next/dynamic';

const Logo = dynamic(() => import('../../app/maisonbleuiris/page'), {
  loading: () => <div>Loading Logo...</div>,
});

export default function HomePage() {
  return (
    <>
      <Logo />
    </> 
  );
}
