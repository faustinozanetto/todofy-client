import React from 'react'
import { Box, Button, Container, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { useUserTodosQuery } from '../../generated/graphql'
import { TodosTable } from '.'

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = ({}) => {
  const { data, error, loading, fetchMore, variables } = useUserTodosQuery({
    variables: { limit: 10, cursor: null },
    notifyOnNetworkStatusChange: true,
  });
  const router = useRouter();

  return (
    <>
      {!loading && error ? (
        <Container maxWidth='lg'>
          <Box
            display='flex'
            alignContent='center'
            borderRadius='md'
            backgroundColor={useColorModeValue('#F7FAFC', '#1A202C')}
            maxWidth='100vh'
            p={4}
          >
            <Stack direction='column' mx='auto'>
              <Heading textAlign='center'>An error occurred!</Heading>
              <Text fontSize='lg' textAlign='center'>
                {error.message}
              </Text>
              <Button
                variant='outline'
                width='50%'
                alignSelf='center'
                colorScheme='facebook'
                margin={6}
                onClick={() => router.push('/')}
              >
                Go Back
              </Button>
            </Stack>
          </Box>
        </Container>
      ) : (
        <>
          {!data?.userTodos && loading ? (
            <Container maxWidth='lg'>
              <Box
                display='flex'
                alignContent='center'
                borderRadius='md'
                backgroundColor={useColorModeValue('#F7FAFC', '#1A202C')}
                maxWidth='100vh'
                p={4}
              >
                <Stack direction='column' mx='auto'>
                  <Heading textAlign='center'>Loading content...</Heading>
                  <Text fontSize='lg' textAlign='center'>
                    Please wait :)
                  </Text>
                </Stack>
              </Box>
            </Container>
          ) : (
            <Container maxWidth='5xl'>
              <Box
                backgroundColor={useColorModeValue('#F7FAFC', '#1A202C')}
                borderRadius='lg'
                alignContent='center'
                justifyContent='center'
                boxShadow='lg'
              >
                <Flex flexDirection='column'>
                  <>
                    <Box p={4} width='100%' mx='auto'>
                      <Heading textAlign='center'>Dashboard</Heading>
                    </Box>

                    <Box p={4} width='100%' mx='auto'>
                      <TodosTable todos={data} />
                    </Box>
                  </>

                  {data && data.userTodos.hasMore ? (
                    <Box display='flex' p={4} width='100%' mx='auto'>
                      <Button
                        onClick={() => {
                          fetchMore({
                            variables: {
                              limit: variables?.limit,
                              cursor:
                                data.userTodos.todos[
                                  data.userTodos.todos.length - 1
                                ].createdAt,
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
          )}
        </>
      )}
    </>
  );
};
