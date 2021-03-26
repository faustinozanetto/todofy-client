import React, { useEffect, useState } from 'react';
import { SEO } from '../components/seo';
import { AppLayout } from '../layout';
import { setAccessToken } from '../utils/accessToken';
import { withApollo } from '../utils/apollo/withApollo';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:4000/refresh_token', {
      method: 'POST',
      credentials: 'include',
    }).then(async (res) => {
      const { accessToken } = await res.json();
      setAccessToken(accessToken);
      setLoading(false);
    });
  }, []);
  
  if (loading) {
    return <div>loading...</div>;
  }
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
