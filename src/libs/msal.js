import { InteractionRequiredAuthError, PublicClientApplication } from '@azure/msal-browser';
import { config, scopes } from './msalConfiguration';

/**
 * MSAL instance
 */
export const msal = new PublicClientApplication(config);

/**
 * Auth service
 */
export const Auth = {
  /**
   * Initialize and return active account
   */
  async initialize(client) {
    // start msal
    await msal.handleRedirectPromise();

    // hook into application router
    if (client) {
      msal.setNavigationClient(client);
    }

    // grab and set account if in session
    const accounts = msal.getAllAccounts();
    if (accounts?.length) {
      this.setAccount(accounts[0]);
    }
    // return any active account
    return msal.getActiveAccount();
  },

  /**
   * Login
   */
  async login() {
    const request = {
      redirectUri: config.auth.redirectUri,
      scopes
      // loginHint: 'selemam@wtco.com.sa'
    };
    return msal
      .loginPopup(request)
      .then((result) => {
        // could do something with the AuthResult here if you need to
        console.log('Logged in with', result);
        const user = {
          name: result?.account?.name,
          email: result?.account?.username
        };
        localStorage.setItem('accessToken', result.accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('accessToken', result.idToken);

        // set active account
        return this.setAccount(result.account);
      })
      .catch((error) => {
        // if we get stuck, clear session and attempt to log in again
        if (error.errorCode === 'interaction_in_progress') {
          this.reset();
          localStorage.clear();
          return this.login();
        }
        throw new Error(error.errorMessage);
      });
  },

  async logout() {
    console.log(msal.getActiveAccount());
    const onLogout = msal.logoutPopup({
      // required to make the application return to the home page
      mainWindowRedirectUri: '/login',
      account: msal.getActiveAccount(),
      logoutHint: localStorage.getItem('accessToken')
    });
    localStorage.clear();
    return onLogout;
  },

  /**
   * Get token for api
   */
  async getToken() {
    const request = {
      scopes: ['https://analysis.windows.net/powerbi/api/.default'],
      extraScopesToConsent: scopes
    };
    return (
      msal
        // try getting the token silently
        .acquireTokenSilent(request)

        // attempt login popup if this fails
        .catch(async (error) => {
          if (error instanceof InteractionRequiredAuthError) {
            return msal.acquireTokenPopup(request);
          }
          throw error;
        })
        .then((result) => {
          localStorage.setItem('accessToken', result.accessToken);
          return result.accessToken;
        })
    );
  },

  setAccount(account) {
    msal.setActiveAccount(account);
    return account;
  },

  reset() {
    sessionStorage.clear();
  }
};
