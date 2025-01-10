import { LogLevel } from '@azure/msal-browser';

export const scopes = ['email'];
// const redirectUri = `${location.origin}/login`;

export const config = {
  // required
  auth: {
    // must match info in dashboard
    clientId: import.meta.env.VITE_AUTH_CLIENT_ID,
    authority: import.meta.env.VITE_AUTH_AUTHORITY,
    knownAuthorities: [import.meta.env.VITE_AUTH_AUTHORITY],
    redirectUri: 'http://localhost:3000/'
  },

  // optional
  system: {
    loggerOptions: {
      logLevel: import.meta.env.VITE_ENV === 'development' ? LogLevel.Verbose : LogLevel.Error,
      loggerCallback
    }
  }
};

function loggerCallback(level, message, containsPii) {
  if (!containsPii) {
    const parts = message.split(' : ');
    const text = parts.pop();
    switch (level) {
      case LogLevel.Error:
        return console.error(text);

      case LogLevel.Warning:
        return console.warn(text);

      case LogLevel.Info:
        return console.info(text);

      case LogLevel.Verbose:
        return console.debug(text);
    }
  }
}
