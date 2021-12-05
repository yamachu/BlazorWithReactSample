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

    React.useEffect(() => {
      if (componentKey === undefined) {
        return;
      }
      // @ts-ignore
      const addFuncCb: EventListener = ({ detail }: CustomEvent) => {
        setDotnetRef(detail.reference);
      };
      // @ts-ignore
      const removeFuncCb: EventListener = ({}: CustomEvent) => {
        setDotnetRef(null);
      };
      window.addEventListener("setDotnetReference", addFuncCb);
      window.addEventListener("removeDotnetReference", removeFuncCb);
      return () => {
        window.removeEventListener("setDotnetReference", addFuncCb);
        window.removeEventListener("removeDotnetReference", removeFuncCb);
      };
    }, [componentKey]);

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
      myEventCallback
    });

    return fragment;
  }
);
