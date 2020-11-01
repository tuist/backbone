import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../network/client";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>Hello world</div>
    </ApolloProvider>
  );
};
export default App;
