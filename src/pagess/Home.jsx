import { GoogleLogin } from '../components/auth';
import { Button } from '../components/ui';
import { Layout } from '../layouts/Layout';
import { useDispatch, useSelector } from 'react-redux';

export const Home = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(({ auth }) => {
    return auth.authenticated;
  });

  return (
    <Layout>
      <div className="container px-4 mx-auto text-center pt-40">
        {authenticated ? (
          <Button
            skin="danger"
            onClick={() => {
              dispatch({
                type: 'auth/unsetUser',
              });
            }}
          >
            Logout
          </Button>
        ) : (
          <div className="flex justify-center">
            <GoogleLogin></GoogleLogin>
          </div>
        )}
      </div>
    </Layout>
  );
};
