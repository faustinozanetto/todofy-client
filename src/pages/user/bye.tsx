import React from 'react';
import { useIsAuthTestQuery } from '../../generated/graphql';
import { AppLayout } from '../../layout';

const ByePage: React.FC<{}> = ({}) => {
  const { data, loading, error } = useIsAuthTestQuery({
    fetchPolicy: 'network-only',
  });

  if (loading) {
    return (
      <AppLayout>
        <div>loading...</div>
      </AppLayout>
    );
  }

  if (error) {
    console.log(error);
    return (
      <AppLayout>
        <div>err</div>
      </AppLayout>
    );
  }

  if (!data) {
    return (
      <AppLayout>
        <div>no data</div>{' '}
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div>{data.isAuthTest}</div>
    </AppLayout>
  );
};

export default ByePage;
