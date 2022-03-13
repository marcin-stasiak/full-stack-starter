import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import client from "../utilities/client";
import GET_ENTRY from "../utilities/graphql/get-entry.gql";

const Entry: NextPage = () => {
  return (
    <>
      <h1>Entry</h1>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {paths: [], fallback: false}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { data } = await client.query({ query: GET_ENTRY, variables: { slug: params?.slug } });
  console.log(params)
  console.log(data)

  return {
    props : {
      entry: data.entry
    }
  }
}

export default Entry;
