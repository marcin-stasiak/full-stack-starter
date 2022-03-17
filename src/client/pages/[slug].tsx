import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import client from "../utilities/client";
import GET_ENTRIES from "../utilities/graphql/get-entries.gql";
import GET_ENTRY from "../utilities/graphql/get-entry.gql";

const Entry: NextPage = ({ entry }) => {
  return (
    <>
      <h1>{entry.title}</h1>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: GET_ENTRIES });

  const paths = data.getEntries.map((entry) => ({ params: {slug: entry.slug}}));

  return { paths: paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { data } = await client.query({ query: GET_ENTRY, variables: { slug: params?.slug } });

  return {
    props : {
      entry: data.getEntry
    }
  }
}

export default Entry;
