import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import client from "../../utilities/client";
import GET_USERS from "../../utilities/graphql/get-users.gql";
import GET_USER from "../../utilities/graphql/get-user.gql";

const User: NextPage = ({ user }) => {
  return (
    <>
      <h1>{user.title}</h1>
    </>
  )
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: GET_USERS });

  const paths = data.getUsers.map((user) => ({ params: {slug: user.slug}}));

  return { paths: paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { data } = await client.query({ query: GET_USER, variables: { slug: params?.slug } });

  return {
    props : {
      user: data.getUser
    }
  }
}

export default User;