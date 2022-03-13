import { NextPage } from 'next';
import client from '../utilities/client';
import GET_ENTRIES from '../utilities/graphql/get-entries.gql';

const Home: NextPage = ({ entries }) => {
  return (
    <>
      <h1>Homepage</h1>
      <div className="bg-blue-100 rounded-lg py-5 px-6 mb-4 text-base text-blue-700 mb-3" role="alert">
        A simple primary alert - check it out!
      </div>
    </>
  );
};

export async function getStaticProps() {
  const { data } = await client.query(GET_ENTRIES);

  return {
    props : {
      entries: data.entries
    }
  }
}

export default Home;
