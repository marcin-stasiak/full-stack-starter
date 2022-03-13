import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import client from "../../utilities/client";
import GET_USERS from "../../utilities/graphql/get-users.gql";
import GET_USER from "../../utilities/graphql/get-user.gql";

const User: NextPage = () => {
  return (
    <>
      <h1>User</h1>
    </>
  )
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: GET_USERS });
  return {paths: data.users.map(({slug}) => slug ), fallback: false}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { data } = await client.query({ query: GET_USER, variables: { slug: params?.slug } });

  return {
    props : {
      entry: data.user
    }
  }
}

export default User;