import React from "react";
import { Counter, CounterHandler } from "./blazor/Counter";

function App() {
  const counterRef = React.useRef<CounterHandler>(null);

  return (
    <div>
      <p>Hello World</p>
      <button
        onClick={() => {
          if (counterRef.current === null) {
            return;
          }
          counterRef.current.FooBar();
        }}
      >
        Invoke FooBar
      </button>
      <div>
        <Counter title="Reactからこんにちは" ref={counterRef} />
      </div>
    </div>
  );
}

export default App;
