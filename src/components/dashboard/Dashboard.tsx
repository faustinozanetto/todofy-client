import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { useUserTodosQuery } from '../../generated/graphql';
import { TodosTable } from '.';

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = ({}) => {
  const { data, error, loading, fetchMore, variables } = useUserTodosQuery({
    variables: { limit: 10, cursor: null },
    notifyOnNetworkStatusChange: true,
  });

  if (!loading && !data) {
    return (
      <div>
        <div>you got query failed for some reason</div>
        <div>{error?.message}</div>
      </div>
    );
  }

  return (
    <Container maxWidth='5xl'>
      <Box
        backgroundColor={useColorModeValue('#F7FAFC', '#1A202C')}
        borderRadius='lg'
        alignContent='center'
        justifyContent='center'
        boxShadow='lg'
      >
        <Flex flexDirection='column'>
          {!data && loading ? (
            <div>loading...</div>
          ) : (
            <>
              <Box p={4} width='100%' mx='auto'>
                <Heading textAlign='center'>Dashboard</Heading>
              </Box>

              <Box p={4} width='100%' mx='auto'>
                <TodosTable todos={data} />
                {error ? error.message : null}
              </Box>
            </>
          )}
          {data && data.userTodos.hasMore ? (
            <Box display='flex' p={4} width='100%' mx='auto'>
              <Button
                onClick={() => {
                  fetchMore({
                    variables: {
                      limit: variables?.limit,
                      cursor:
                        data.userTodos.todos[data.userTodos.todos.length - 1]
                          .createdAt,
                    },
                  });
                }}
                m={2}
                mx='auto'
                colorScheme='facebook'
                isLoading={loading}
              >
                Load More
              </Button>
            </Box>
          ) : null}
        </Flex>
      </Box>
    </Container>
  );
};
