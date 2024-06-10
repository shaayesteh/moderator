export function createApiService({ baseUrl, role, adminSecret }) {
  return ({ query }) =>
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "x-hasura-role": role,
        "x-hasura-admin-secret": adminSecret,
      },
      body: JSON.stringify({
        query,
      }),
    }).then((response) => response.json());
}
