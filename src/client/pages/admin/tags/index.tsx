import { GetStaticProps, NextPage } from 'next';
import client from '../../../utilities/client';
import GET_TAGS from '../../../utilities/graphql/get-tags.gql';

const AdminTags: NextPage = ({ tags }) => {
  return (
    <>
      <h1>Tags</h1>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({ query: GET_TAGS });

  return {
    props : {
      tags: data.getTags
    }
  }
}

export default AdminTags;