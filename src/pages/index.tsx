import { Box, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { SEO } from '../components/seo';
import { AppLayout } from '../layout';
import { setAccessToken } from '../utils/accessToken';
import { withApollo } from '../utils/apollo/withApollo';
import { __backendUri__ } from '../utils/constants';

const Home = () => {
  const [loading, setLoading] = useState(true);

  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  /*
  useEffect(() => {
    fetch(__backendUri__ + '/refresh_token', {
      method: 'POST',
      credentials: 'include',
      headers: headers,
      mode: 'cors',
    }).then(async (res) => {
      const { accessToken } = await res.json();
      setAccessToken(accessToken);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <Box>
        <Heading>Fetching data, please wait...</Heading>
      </Box>
    );
  }
  */
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
