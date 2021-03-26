import React from 'react';
import { SEO } from '../components/seo';
import { AppLayout } from '../layout';
import { withApollo } from '../utils/apollo/withApollo';

const Home = () => {
  return (
    <AppLayout>
      <SEO
        title='Home | Todofy'
        description='The coolest Todo App in the web'
      />
    </AppLayout>
  );
};


export default withApollo({ ssr: true })(Home);