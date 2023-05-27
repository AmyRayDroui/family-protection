import { GraphQLClient } from 'graphql-request'

export function request({ query, variables, preview }: any) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer 546bb8c9414c59169eba9b07872863`,
    },
  })

  return client.request(query, variables)
}
