import Keycloak, { KeycloakConfig, KeycloakInstance } from "keycloak-js";

// Keycloak configuration
const keycloakConfig: KeycloakConfig = {
  url: process.env.REACT_APP_KEYCLOAK_URL || "https://your-keycloak-server/auth",
  realm: process.env.REACT_APP_KEYCLOAK_REALM || "your-realm",
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID || "your-client-id",
};

// Initialize Keycloak instance
const keycloak: KeycloakInstance = new Keycloak(keycloakConfig);

// Initialize Keycloak on app start
export const initKeycloak = async (): Promise<void> => {
  try {
    await keycloak.init({
      onLoad: "check-sso", // Check SSO instead of forcing login
      checkLoginIframe: false,
      pkceMethod: "S256",
      redirectUri: window.location.origin,
    });
    console.log("✅ Keycloak initialized");
  } catch (error) {
    console.error("❌ Keycloak initialization failed:", error);
    throw error;
  }
};

export default keycloak;