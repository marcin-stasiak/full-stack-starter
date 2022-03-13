import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import client from "../../utilities/client";
import GET_TAGS from "../../utilities/graphql/get-tags.gql";
import GET_TAG from "../../utilities/graphql/get-tag.gql";

const Tag: NextPage = () => {
  return (
    <>
      <h1>Tag</h1>
    </>
  )
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: GET_TAGS });
  return {paths: data.tags.map(({slug}) => slug ), fallback: false}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { data } = await client.query({ query: GET_TAG, variables: { slug: params?.slug } });

  return {
    props : {
      entry: data.tag
    }
  }
}

export default Tag;