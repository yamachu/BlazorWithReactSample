import React from "react";
import { v4 } from "uuid";
import { useBlazor } from "./blazor-react";

export function Counter({ title }: { title: string }) {
  const componentKey = React.useMemo(() => v4(), []);

  React.useEffect(() => {
    if (componentKey === undefined) {
      return;
    }
    // @ts-ignore
    const addFuncCb: EventListener = ({ detail }: CustomEvent) => {
      console.debug("setDotnetReference");
      console.dir(detail);
    };
    // @ts-ignore
    const removeFuncCb: EventListener = ({}: CustomEvent) => {
      console.debug("removeDotnetReference");
    };
    window.addEventListener("setDotnetReference", addFuncCb);
    window.addEventListener("removeDotnetReference", removeFuncCb);
    return () => {
      window.removeEventListener("setDotnetReference", addFuncCb);
      window.removeEventListener("removeDotnetReference", removeFuncCb);
    };
  }, [componentKey]);

  const fragment = useBlazor("counter", {
    title,
    objectIdentifier: componentKey,
  });

  return fragment;
}
