import React, { useContext } from 'react';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { READ, CREATE, DELETE } from '../../auth/Scopes';
import { UserContext } from '../../context/UserContext';

const CLIENT_ID =
  '990779024896-jr76oa2j7pj1116qhaa1qnu9offtp4ao.apps.googleusercontent.com';

const Login = ({ onLoginChange }) => {
  const user = useContext(UserContext);

  if (user.signedIn) {
    return (
      <GoogleLogout
        clientId={CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={() =>
          onLoginChange({
            signedIn: false,
            scopes: [READ],
          })
        }
      ></GoogleLogout>
    );
  }

  return (
    <GoogleLogin
      clientId={CLIENT_ID}
      buttonText="Login"
      onSuccess={(response) => {
        //TODO: Server side
        const profile = response.getBasicProfile();
        onLoginChange({
          signedIn: true,
          name: profile.getName(),
          email: profile.getEmail(),
          image: profile.getImageUrl(),
          scopes: [READ, CREATE, DELETE],
        });
      }}
      onFailure={() => null}
      isSignedIn={true}
    />
  );
};

export default Login;
