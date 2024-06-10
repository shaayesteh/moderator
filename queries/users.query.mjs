export const USERS_LIST = `
query getUsersList {
    users {
      email
      first_name
      id
      created_at
      is_active
      last_name
      mobile
      organization {
        name
      }
    }
  }
`;
