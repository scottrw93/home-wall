import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { READ, CREATE, DELETE, DELETE_OWN } from '../../auth/Scopes';
import { UserContext } from '../../context/UserContext';

import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

const CLIENT_ID =
  '990779024896-jr76oa2j7pj1116qhaa1qnu9offtp4ao.apps.googleusercontent.com';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    width: '100%',
    maxWidth: '600px',
    paddingLeft: 10,
    paddingRight: 10,
    left: '50%',
    transform: 'translate(-50%, 0%)',
  },
}));

const FailedLoginAlerts = ({ open, close }) => {
  const classes = useStyles();

  return (
    <Collapse className={classes.root} in={open}>
      <Alert
        severity="error"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={close}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        Failed to login
      </Alert>
    </Collapse>
  );
};

const Login = ({ onLoginChange }) => {
  const user = useContext(UserContext);
  const [failedLoginAlert, showFailedLoginAlert] = React.useState(false);

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
    <React.Fragment>
      <FailedLoginAlerts
        open={failedLoginAlert}
        close={() => showFailedLoginAlert(false)}
      />
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
        onFailure={() => showFailedLoginAlert(true)}
        isSignedIn={true}
      />
    </React.Fragment>
  );
};

export default Login;
