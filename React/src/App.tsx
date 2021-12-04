import React from "react";
import { Counter } from "./blazor/Counter";

function App() {
  return (
    <div>
      <p>Hello World</p>
      <Counter title="Reactからこんにちは、Title" />
    </div>
  );
}

export default App;
