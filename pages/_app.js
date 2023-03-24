import { UserProvider } from "@auth0/nextjs-auth0/client";
import React from "react";
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
      
  );
}
