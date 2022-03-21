import { GetStaticProps, NextPage } from 'next';
import client from '../../../utilities/client';
import GET_USERS from '../../../utilities/graphql/get-users.gql';

const AdminUsers: NextPage = ({ users }) => {
  return (
    <>
      <h1>Users</h1>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({ query: GET_USERS });

  return {
    props : {
      users: data.getUsers
    }
  }
}

export default AdminUsers;