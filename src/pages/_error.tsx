import { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

import ErrorComponent from '@/components/atoms/error';
import Layout from '@/components/templates/layout';

export interface ErrorPageProps {
  statusCode?: number;
}

const ErrorPage: NextPage<ErrorPageProps> = ({ statusCode }: ErrorPageProps): JSX.Element => {
  return (
    <div className="navbartoblue">
      <Layout>
        <Head>
          <title>Kids Xmas - You have encountered an error</title>
        </Head>
        <main>
          <ErrorComponent statusCode={statusCode} />
        </main>
      </Layout>
    </div>
  );
};

ErrorPage.getInitialProps = async ({ res, err }: NextPageContext): Promise<ErrorPageProps> => {
  const statusCode = res ? res.statusCode : err?.statusCode;
  return { statusCode };
};

export default ErrorPage;
