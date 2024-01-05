import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { render } from "react-dom";

const App = () => {
    return (<p>Testing</p>)
};

render(
    <ChakraProvider>
  <App />
  </ChakraProvider>, document.querySelector('#root')
);