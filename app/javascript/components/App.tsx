import React from "react";
import client from "../network/client";
import { ApolloProvider } from "@apollo/client";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <HomePage />
    </ApolloProvider>
  );
};
export default App;
