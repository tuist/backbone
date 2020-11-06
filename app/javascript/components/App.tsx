import React from "react";
import client from "../network/client";
import { ApolloProvider } from "@apollo/client";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>Hello world</div>
    </ApolloProvider>
  );
};
export default App;
