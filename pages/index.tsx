import { NextPage } from 'next';

const Home: NextPage<{ name: string }> = ({ name }) => (
  <h1>Homepage {name}</h1>
);

Home.getInitialProps = async ({ }) => {
  return { name:'dsc' };
};

export default Home;
