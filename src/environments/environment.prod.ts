export const environment = {
  production: true,
  auth: {
    clientId: 'YOUR_PRODUCTION_CLIENT_ID',
    issuer: 'https://YOUR_PRODUCTION_DOMAIN.auth0.com',
    redirectUri: 'https://your-production-domain.com/callback',
    scope: 'openid profile email',
  },
};
