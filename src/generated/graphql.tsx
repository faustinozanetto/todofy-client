import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  revokeRefreshTokenForUser: Scalars['Boolean'];
  createTodo: TodoResponse;
  deleteTodo: TodoDeleteResponse;
  updateTodo?: Maybe<TodoResponse>;
};


export type MutationRegisterArgs = {
  input: UserCredentialsInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRevokeRefreshTokenForUserArgs = {
  id: Scalars['Int'];
};


export type MutationCreateTodoArgs = {
  input: TodoCreateInput;
};


export type MutationDeleteTodoArgs = {
  input: TodoDeleteInput;
};


export type MutationUpdateTodoArgs = {
  completed: Scalars['Boolean'];
  description: Scalars['String'];
  title: Scalars['String'];
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  testString: Scalars['String'];
  users: UsersResponse;
  isAuthTest: Scalars['String'];
  me?: Maybe<User>;
  userTodos: TodosResponse;
  todo: TodoResponse;
  todos: TodosResponse;
};


export type QueryUserTodosArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};


export type QueryTodoArgs = {
  id: Scalars['Int'];
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['Int'];
  title: Scalars['String'];
  description: Scalars['String'];
  completed: Scalars['Boolean'];
  creatorId: Scalars['Int'];
  creator: User;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type TodoCreateInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  completed: Scalars['Boolean'];
};

export type TodoDeleteInput = {
  id: Scalars['Int'];
};

export type TodoDeleteResponse = {
  __typename?: 'TodoDeleteResponse';
  errors?: Maybe<Array<FieldError>>;
  deleted?: Maybe<Scalars['Boolean']>;
};

export type TodoResponse = {
  __typename?: 'TodoResponse';
  errors?: Maybe<Array<FieldError>>;
  todo?: Maybe<Todo>;
};

export type TodosResponse = {
  __typename?: 'TodosResponse';
  errors?: Maybe<Array<FieldError>>;
  todos: Array<Todo>;
  hasMore: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  email: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type UserCredentialsInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
  accessToken?: Maybe<Scalars['String']>;
};

export type UsersResponse = {
  __typename?: 'UsersResponse';
  errors?: Maybe<Array<FieldError>>;
  users?: Maybe<Array<User>>;
};

export type NormalErrorFragment = (
  { __typename?: 'FieldError' }
  & Pick<FieldError, 'field' | 'message'>
);

export type NormalTodoFragment = (
  { __typename?: 'Todo' }
  & Pick<Todo, 'id' | 'title' | 'description' | 'completed' | 'creatorId' | 'createdAt' | 'updatedAt'>
);

export type NormalTodoDeleteResponseFragment = (
  { __typename?: 'TodoDeleteResponse' }
  & Pick<TodoDeleteResponse, 'deleted'>
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & NormalErrorFragment
  )>> }
);

export type NormalTodoResponseFragment = (
  { __typename?: 'TodoResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & NormalErrorFragment
  )>>, todo?: Maybe<(
    { __typename?: 'Todo' }
    & NormalTodoFragment
  )> }
);

export type NormalTodosResponseFragment = (
  { __typename?: 'TodosResponse' }
  & Pick<TodosResponse, 'hasMore'>
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & NormalErrorFragment
  )>>, todos: Array<(
    { __typename?: 'Todo' }
    & NormalTodoFragment
  )> }
);

export type NormalUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'email'>
);

export type NormalUserResponseFragment = (
  { __typename?: 'UserResponse' }
  & Pick<UserResponse, 'accessToken'>
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & NormalErrorFragment
  )>>, user?: Maybe<(
    { __typename?: 'User' }
    & NormalUserFragment
  )> }
);

export type NormalUsersResponseFragment = (
  { __typename?: 'UsersResponse' }
  & { errors?: Maybe<Array<(
    { __typename?: 'FieldError' }
    & NormalErrorFragment
  )>>, users?: Maybe<Array<(
    { __typename?: 'User' }
    & NormalUserFragment
  )>> }
);

export type DeleteTodoMutationVariables = Exact<{
  input: TodoDeleteInput;
}>;


export type DeleteTodoMutation = (
  { __typename?: 'Mutation' }
  & { deleteTodo: (
    { __typename?: 'TodoDeleteResponse' }
    & NormalTodoDeleteResponseFragment
  ) }
);

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['Int'];
  title: Scalars['String'];
  description: Scalars['String'];
  completed: Scalars['Boolean'];
}>;


export type UpdateTodoMutation = (
  { __typename?: 'Mutation' }
  & { updateTodo?: Maybe<(
    { __typename?: 'TodoResponse' }
    & NormalTodoResponseFragment
  )> }
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & NormalUserResponseFragment
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  input: UserCredentialsInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & NormalUserResponseFragment
  ) }
);

export type TodoQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type TodoQuery = (
  { __typename?: 'Query' }
  & { todo: (
    { __typename?: 'TodoResponse' }
    & NormalTodoResponseFragment
  ) }
);

export type IsAuthTestQueryVariables = Exact<{ [key: string]: never; }>;


export type IsAuthTestQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'isAuthTest'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & NormalUserFragment
  )> }
);

export type UserTodosQueryVariables = Exact<{
  limit: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type UserTodosQuery = (
  { __typename?: 'Query' }
  & { userTodos: (
    { __typename?: 'TodosResponse' }
    & NormalTodosResponseFragment
  ) }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: (
    { __typename?: 'UsersResponse' }
    & NormalUsersResponseFragment
  ) }
);

export const NormalErrorFragmentDoc = gql`
    fragment NormalError on FieldError {
  field
  message
}
    `;
export const NormalTodoDeleteResponseFragmentDoc = gql`
    fragment NormalTodoDeleteResponse on TodoDeleteResponse {
  errors {
    ...NormalError
  }
  deleted
}
    ${NormalErrorFragmentDoc}`;
export const NormalTodoFragmentDoc = gql`
    fragment NormalTodo on Todo {
  id
  title
  description
  completed
  creatorId
  createdAt
  updatedAt
}
    `;
export const NormalTodoResponseFragmentDoc = gql`
    fragment NormalTodoResponse on TodoResponse {
  errors {
    ...NormalError
  }
  todo {
    ...NormalTodo
  }
}
    ${NormalErrorFragmentDoc}
${NormalTodoFragmentDoc}`;
export const NormalTodosResponseFragmentDoc = gql`
    fragment NormalTodosResponse on TodosResponse {
  errors {
    ...NormalError
  }
  todos {
    ...NormalTodo
  }
  hasMore
}
    ${NormalErrorFragmentDoc}
${NormalTodoFragmentDoc}`;
export const NormalUserFragmentDoc = gql`
    fragment NormalUser on User {
  id
  username
  email
}
    `;
export const NormalUserResponseFragmentDoc = gql`
    fragment NormalUserResponse on UserResponse {
  errors {
    ...NormalError
  }
  user {
    ...NormalUser
  }
  accessToken
}
    ${NormalErrorFragmentDoc}
${NormalUserFragmentDoc}`;
export const NormalUsersResponseFragmentDoc = gql`
    fragment NormalUsersResponse on UsersResponse {
  errors {
    ...NormalError
  }
  users {
    ...NormalUser
  }
}
    ${NormalErrorFragmentDoc}
${NormalUserFragmentDoc}`;
export const DeleteTodoDocument = gql`
    mutation deleteTodo($input: TodoDeleteInput!) {
  deleteTodo(input: $input) {
    ...NormalTodoDeleteResponse
  }
}
    ${NormalTodoDeleteResponseFragmentDoc}`;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation updateTodo($id: Int!, $title: String!, $description: String!, $completed: Boolean!) {
  updateTodo(
    id: $id
    title: $title
    description: $description
    completed: $completed
  ) {
    ...NormalTodoResponse
  }
}
    ${NormalTodoResponseFragmentDoc}`;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      completed: // value for 'completed'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, options);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    ...NormalUserResponse
  }
}
    ${NormalUserResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation register($input: UserCredentialsInput!) {
  register(input: $input) {
    ...NormalUserResponse
  }
}
    ${NormalUserResponseFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const TodoDocument = gql`
    query todo($id: Int!) {
  todo(id: $id) {
    ...NormalTodoResponse
  }
}
    ${NormalTodoResponseFragmentDoc}`;

/**
 * __useTodoQuery__
 *
 * To run a query within a React component, call `useTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTodoQuery(baseOptions: Apollo.QueryHookOptions<TodoQuery, TodoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TodoQuery, TodoQueryVariables>(TodoDocument, options);
      }
export function useTodoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TodoQuery, TodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TodoQuery, TodoQueryVariables>(TodoDocument, options);
        }
export type TodoQueryHookResult = ReturnType<typeof useTodoQuery>;
export type TodoLazyQueryHookResult = ReturnType<typeof useTodoLazyQuery>;
export type TodoQueryResult = Apollo.QueryResult<TodoQuery, TodoQueryVariables>;
export const IsAuthTestDocument = gql`
    query isAuthTest {
  isAuthTest
}
    `;

/**
 * __useIsAuthTestQuery__
 *
 * To run a query within a React component, call `useIsAuthTestQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsAuthTestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsAuthTestQuery({
 *   variables: {
 *   },
 * });
 */
export function useIsAuthTestQuery(baseOptions?: Apollo.QueryHookOptions<IsAuthTestQuery, IsAuthTestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsAuthTestQuery, IsAuthTestQueryVariables>(IsAuthTestDocument, options);
      }
export function useIsAuthTestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsAuthTestQuery, IsAuthTestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsAuthTestQuery, IsAuthTestQueryVariables>(IsAuthTestDocument, options);
        }
export type IsAuthTestQueryHookResult = ReturnType<typeof useIsAuthTestQuery>;
export type IsAuthTestLazyQueryHookResult = ReturnType<typeof useIsAuthTestLazyQuery>;
export type IsAuthTestQueryResult = Apollo.QueryResult<IsAuthTestQuery, IsAuthTestQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...NormalUser
  }
}
    ${NormalUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const UserTodosDocument = gql`
    query userTodos($limit: Int!, $cursor: String) {
  userTodos(limit: $limit, cursor: $cursor) {
    ...NormalTodosResponse
  }
}
    ${NormalTodosResponseFragmentDoc}`;

/**
 * __useUserTodosQuery__
 *
 * To run a query within a React component, call `useUserTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserTodosQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useUserTodosQuery(baseOptions: Apollo.QueryHookOptions<UserTodosQuery, UserTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserTodosQuery, UserTodosQueryVariables>(UserTodosDocument, options);
      }
export function useUserTodosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserTodosQuery, UserTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserTodosQuery, UserTodosQueryVariables>(UserTodosDocument, options);
        }
export type UserTodosQueryHookResult = ReturnType<typeof useUserTodosQuery>;
export type UserTodosLazyQueryHookResult = ReturnType<typeof useUserTodosLazyQuery>;
export type UserTodosQueryResult = Apollo.QueryResult<UserTodosQuery, UserTodosQueryVariables>;
export const UsersDocument = gql`
    query users {
  users {
    ...NormalUsersResponse
  }
}
    ${NormalUsersResponseFragmentDoc}`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;