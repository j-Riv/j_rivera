declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      GMAIL: string;
      GMAIL_APP_PASSWORD: string;
      BASE_URL: string;
      COCKPIT_URL: string;
      COCKPIT_POSTS_URL: string;
      COCKPIT_GET_POSTS_API_KEY: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
