import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import client from '../utilities/client';
import GET_ENTRIES from '../utilities/graphql/get-entries.gql';

const Home: NextPage = ({ entries }) => {
  return (
    <>
      {entries.map(({title}) => (
        <div>
          <h2>{title}</h2>
        </div>
      ))}
      <h1>Homepage</h1>
      <div className="bg-blue-100 rounded-lg py-5 px-6 mb-4 text-base text-blue-700 mb-3" role="alert">
        A simple primary alert - check it out!
      </div>
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

export default Home;
