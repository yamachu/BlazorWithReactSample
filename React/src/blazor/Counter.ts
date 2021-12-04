import { useBlazor } from "./blazor-react";

export function Counter({ title }: { title: string }) {
  const fragment = useBlazor("counter", {
    title,
  });

  return fragment;
}
