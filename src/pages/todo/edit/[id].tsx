import React from 'react'
import { useRouter } from 'next/router'

import { Dashboard, TodoEditModal } from '../../../components/dashboard'
import { SEO } from '../../../components/seo'
import { useTodoQuery } from '../../../generated/graphql'
import { AppLayout } from '../../../layout'
import { withApollo } from '../../../utils/apollo/withApollo'
import { useGetIntID } from '../../../utils/urlUtils'

interface ITodoEdit {}

const EditTodoPage: React.FC<ITodoEdit> = ({}) => {
  const intId = useGetIntID();
  const { data } = useTodoQuery({
    skip: intId === -1,
    variables: {
      id: intId,
    },
  });

  return (
    <AppLayout>
      <SEO
        title='Edit Todo | Todofy'
        description='The coolest Todo App in the web'
      />
      <TodoEditModal data={data?.todo.todo!} />
    </AppLayout>
  );
};

export default withApollo({ ssr: true })(EditTodoPage);
