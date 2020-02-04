export const environment = {
  production: true,
  apiUrl: 'https://gestaocliente-api.herokuapp.com',

  tokenWhitelistedDomains: [new RegExp('gestaocliente-api.herokuapp.com')],
  tokenBlacklistedRoutes: [new RegExp('\/oauth\/token')],

  apiKeyMaps: 'YOUR_KEY'
};
