let accessToken = '';

export const setAccessToken = (s: string) => {
  accessToken = s;
  console.log('Access token set to: ', accessToken);
};

export const getAccessToken = () => {
  console.log('Get access token: ', accessToken);
  return accessToken;
};
