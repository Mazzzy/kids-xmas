import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';

import { fetchCarts } from '@/lib/queries';
import queryClient from '@/lib/rquery-client';

import Layout from '@/components/templates/layout';
import Dashboard from '@/components/organisms/dashboard';
import HeadingText from '@/components/atoms/heading';

const IndexPage: InferGetServerSidePropsType<typeof getServerSideProps> = (): JSX.Element => {
  const { status, data, error } = useQuery('allCarts', fetchCarts);

  return (
    <Layout title="Home">
      <main>
        <HeadingText title="Your Kid's wishlists for Santa this Chirstmas!" />
        <Dashboard wishListData={data} queryStatus={status} errorData={error} />
      </main>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  await queryClient.prefetchQuery('allCarts', fetchCarts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default IndexPage;
