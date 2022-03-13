import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import client from "../../utilities/client";
import GET_CATEGORIES from "../../utilities/graphql/get-categories.gql";
import GET_CATEGORY from "../../utilities/graphql/get-category.gql";

const Category: NextPage = () => {
  return (
    <>
      <h1>Category</h1>
    </>
  )
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: GET_CATEGORIES });
  return {paths: data.entries.map(({slug}) => slug ), fallback: false}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { data } = await client.query({ query: GET_CATEGORY, variables: { slug: params?.slug } });

  return {
    props : {
      entry: data.entry
    }
  }
}

export default Category;