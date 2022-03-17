import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import client from "../../utilities/client";
import GET_TAGS from "../../utilities/graphql/get-tags.gql";
import GET_TAG from "../../utilities/graphql/get-tag.gql";

const Tag: NextPage = ({ tag }) => {
  return (
    <>
      <h1>{tag.title}</h1>
    </>
  )
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: GET_TAGS });

  const paths = data.getTags.map((tag) => ({ params: {slug: tag.slug}}));

  return { paths: paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { data } = await client.query({ query: GET_TAG, variables: { slug: params?.slug } });

  return {
    props : {
      tags: data.getTag
    }
  }
}

export default Tag;