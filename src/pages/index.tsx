import { NextPage } from 'next';
import Layout from '@/components/templates/layout';
import Dashboard from '@/components/organisms/dashboard';

const IndexPage: NextPage = (): JSX.Element => {
  return (
    <Layout title="Home">
      <main>
        <h1>Welcome to Home page</h1>
        <Dashboard />
      </main>
    </Layout>
  );
};
export default IndexPage;
