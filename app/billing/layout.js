import SideBar from '@/components/billing/sidebar/sidebar';

export default function RootLayout({ children }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', overflow: 'hidden' }}>
      <SideBar />
      <main
        className="p-2"
        style={{ width: 'fit-content', overflowX: 'auto', justifyContent: 'center', alignItems: 'center' }}
      >
        {children}
      </main>
    </div>
  );
}
