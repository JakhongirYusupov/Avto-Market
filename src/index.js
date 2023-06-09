import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/global.scss";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import createUploadLink from "apollo-upload-client/public/createUploadLink.js";
import { serverUrl } from "./utils/api";

const client = new ApolloClient({
  link: createUploadLink({ uri: serverUrl }),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  </BrowserRouter>
);
