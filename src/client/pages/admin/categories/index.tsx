import { GetStaticProps, NextPage } from 'next';
import client from '../../../utilities/client';
import GET_CATEGORIES from '../../../utilities/graphql/get-categories.gql';

const AdminCategories: NextPage = ({ categories }) => {
  return (
    <>
      <h1>Categories</h1>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({ query: GET_CATEGORIES });

  return {
    props : {
      categories: data.getCategories
    }
  }
}

export default AdminCategories;
