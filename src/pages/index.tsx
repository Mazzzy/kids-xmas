import { NextPage } from 'next';
import Layout from '@/components/templates/layout';

const IndexPage: NextPage = (): JSX.Element => {
  return (
    <Layout title="Home">
      <main>
        <h1>Welcome to Home page</h1>
        <p>Here we have xmas gifts</p>
      </main>
    </Layout>
  );
};
export default IndexPage;
