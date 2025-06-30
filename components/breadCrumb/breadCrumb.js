import Link from 'next/link';

const Breadcrumb = () => {
  return (
    <div style={breadcrumbStyle}>
      <Link href="/dashboard" style={linkStyle}>
        Home
      </Link>{' '}
      &gt;{' '}
      <span style={activeStyle}>
        Office Statistics
      </span>
    </div>
  );
};

const breadcrumbStyle = {
  padding: '10px 20px',
  fontSize: '14px',
  backgroundColor: '#f1f1f1',
  borderBottom: '1px solid #ddd',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#6c757d',
};

const activeStyle = {
  color: '#007bff'
,
};

export default Breadcrumb;
