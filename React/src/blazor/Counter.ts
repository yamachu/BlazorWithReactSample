import React from "react";
import { v4 } from "uuid";
import { type DotnetReference } from "../../types/dotnetReference";
import { useBlazor } from "./blazor-react";

export interface CounterHandler {
  FooBar: () => void;
}

export const Counter = React.forwardRef<CounterHandler, { title: string }>(
  ({ title }, ref) => {
    const componentKey = React.useMemo(() => v4(), []);
    const [dotnetRef, setDotnetRef] = React.useState<DotnetReference | null>(null);

    const onComponentInitializedCb = React.useCallback((dRef) => 
      setDotnetRef(dRef)
    , []);
    const onComponentDestroyedCb = React.useCallback(() => setDotnetRef(null), []);

    React.useImperativeHandle(
      ref,
      () => {
        return {
          FooBar: async () => {
            if (dotnetRef === null) {
              return
            }
            console.debug('FooBar: From React')
            const fooBarResult = await dotnetRef.invokeMethodAsync("FooBarManaged");
            console.debug(`FooBar: From React, result: ${fooBarResult}`);
          },
        };
      },
      [dotnetRef]
    );

    const myEventCallback = React.useCallback((v: number) => {
      console.log(`myEventCallback: ${v}`);
    }, [])

    const fragment = useBlazor("counter", {
      title,
      objectIdentifier: componentKey,
      myEventCallback,
      onComponentInitializedCb,
      onComponentDestroyedCb
    });

    return fragment;
  }
);
