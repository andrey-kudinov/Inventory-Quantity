import { createAdminApiClient } from '@shopify/admin-api-client';

const client = createAdminApiClient({
  storeDomain: process.env.STORE_DOMAIN,
  apiVersion: '2023-10',
  accessToken: process.env.ACCESS_TOKEN
});

export const handleOperation = async ({ operation, variables = {} }) => {
  if (!client) {
    console.error('Client not initialized');
    return;
  }

  const { data, errors } = await client.request(operation, { variables });

  if (errors) {
    console.error(errors);
    return;
  }

  return data;
};
