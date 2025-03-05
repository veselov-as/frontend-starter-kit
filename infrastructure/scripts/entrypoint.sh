#!/usr/bin/env sh

set -eu
echo '{
    "clientId": "$KEYCLOAK_CLIENT_ID",
    "code": "$KEYCLOAK_CODE",
    "realm": "$KEYCLOAK_REALM",
    "url": "$KEYCLOAK_URL"
}' | envsubst > /usr/share/nginx/html/keycloakConfig.json

echo '{
    "version": "$APP_VERSION"
}' | envsubst > /usr/share/nginx/html/appConfig.json

envsubst '\${API_HOST}\ \${KEYCLOAK_URL}\ \${HOST_PROTOCOL}\ ' < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.template.conf

exec "$@"