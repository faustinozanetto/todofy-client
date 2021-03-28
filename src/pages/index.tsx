import { Heading } from '@chakra-ui/react';
import React from 'react';
import { SEO } from '../components/seo';
import { useUsersQuery } from '../generated/graphql';
import { AppLayout } from '../layout';
import { __backendUri__, __isServer__ } from '../utils/constants';

const Home = () => {
  const { data } = useUsersQuery({ fetchPolicy: 'network-only' });
  return (
    <AppLayout>
      <SEO
        title='Home | Todofy'
        description='The coolest Todo App in the web'
      />
      {data &&
        data.users.users?.map((user) => {
          return <Heading key={user.id}>{user.username}</Heading>;
        })}
    </AppLayout>
  );
};

export default Home;
