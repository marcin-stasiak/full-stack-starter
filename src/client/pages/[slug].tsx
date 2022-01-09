import client from '../utilities/client';
import { gql } from '@apollo/client';
import { GetServerSideProps, NextApiRequest, NextPage } from 'next';

const Entry: NextPage = () => {
  return (
    <>
      <h1>Entry</h1>
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query {
        entries {
          id
          slug
        }
      }
    `,
  });

  console.log(params);
  console.log(data);

  return {
    props: {
      entries: data.entries,
    },
  };
}

export default Entry;
