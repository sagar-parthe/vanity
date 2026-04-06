// Example Factory pattern for generating mock data safely
// You could integrate @faker-js/faker or Fishery here

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export const createUserFactory = (overrides?: Partial<User>): User => {
  return {
    id: 'user_123',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'user',
    ...overrides,
  };
};
