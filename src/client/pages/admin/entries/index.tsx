import { GetStaticProps, NextPage } from 'next';
import client from '../../../utilities/client';
import GET_ENTRIES from '../../../utilities/graphql/get-entries.gql';

const AdminEntries: NextPage = ({ entries }) => {
  return (
    <>
      <h1>Entries</h1>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({ query: GET_ENTRIES });

  return {
    props : {
      entries: data.getEntries
    }
  }
}

export default AdminEntries;
