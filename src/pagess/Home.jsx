import { Link } from 'react-router-dom';
import { Layout } from '../layouts/Layout';

export const Home = () => {
  return (
    <Layout>
      <div className="container px-4 mx-auto">
        <Link to="/contacts">Contact</Link>
      </div>
    </Layout>
  );
};
