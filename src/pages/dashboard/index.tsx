import React, { useEffect } from 'react';
import { AppLayout } from '../../layout/AppLayout';
import { SEO } from '../../components/seo';
import { Dashboard } from '../../components/dashboard';
import { withApollo } from '../../utils/apollo/withApollo';

interface IDashboard {}

const DashboardPage: React.FC<IDashboard> = ({}) => {
  return (
    <AppLayout>
      <SEO
        title='Dashboard | Todofy'
        description='The coolest Todo App in the web'
      />
      <Dashboard />
    </AppLayout>
  );
};

export default withApollo({ ssr: true })(DashboardPage);
