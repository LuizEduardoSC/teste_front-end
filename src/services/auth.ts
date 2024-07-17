import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'https://<KEYCLOAK_URL>/auth',
    realm: '<REALM>',
    clientId: '<CLIENT_ID>',
});

export default keycloak;
