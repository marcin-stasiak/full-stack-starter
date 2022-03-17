import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import client from "../../utilities/client";
import GET_CATEGORIES from "../../utilities/graphql/get-categories.gql";
import GET_CATEGORY from "../../utilities/graphql/get-category.gql";

const Category: NextPage = ({ category }) => {
  return (
    <>
      <h1>{category.title}</h1>
    </>
  )
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({ query: GET_CATEGORIES });

  const paths = data.getCategories.map((category) => ({ params: {slug: category.slug}}));

  return { paths: paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const { data } = await client.query({ query: GET_CATEGORY, variables: { slug: params?.slug } });

  return {
    props : {
      category: data.getCategory
    }
  }
}

export default Category;