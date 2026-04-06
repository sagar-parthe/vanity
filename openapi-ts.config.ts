import { createClient } from '@hey-api/openapi-ts';

createClient({
  client: '@hey-api/client-fetch',
  input: 'http://localhost:8000/openapi.json', // Point this to your backend's OpenAPI URL
  output: {
    format: 'prettier',
    lint: 'eslint',
    path: './src/client',
  },
});
