import { useBlazor } from "./blazor-react";

export function Counter({ title }) {
  const fragment = useBlazor("counter", {
    title,
  });

  return fragment;
}
