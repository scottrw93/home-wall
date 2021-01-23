import React, { useContext } from 'react';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { READ, CREATE, DELETE, DELETE_OWN } from '../../auth/Scopes';
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
        //TODO: Server
        const profile = response.getBasicProfile();
        onLoginChange({
          signedIn: true,
          name: profile.getName(),
          email: profile.getEmail(),
          image: profile.getImageUrl(),
          scopes:
            profile.getName() === 'Scott Williams'
              ? [READ, CREATE, DELETE, DELETE_OWN]
              : [READ, CREATE, DELETE_OWN],
        });
      }}
      onFailure={() => null}
      isSignedIn={true}
    />
  );
};

export default Login;
