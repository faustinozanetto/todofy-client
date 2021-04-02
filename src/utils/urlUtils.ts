import { useRouter } from 'next/router'

import { useTodoQuery } from '../generated/graphql'

export const useGetIntID = () => {
  const router = useRouter();
  const intID =
    typeof router.query.id === 'string' ? parseInt(router.query.id) : -1;

  return intID;
};

export const useGetPostFromUrl = () => {
  const intID = useGetIntID();
  return useTodoQuery({
    skip: intID == -1,
    variables: {
      id: intID,
    },
  });
};
