import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <h1>Homepage</h1>
      <div className="bg-blue-100 rounded-lg py-5 px-6 mb-4 text-base text-blue-700 mb-3" role="alert">
        A simple primary alert - check it out!
      </div>
    </>
  );
};

export default Home;
