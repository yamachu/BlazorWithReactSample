import { type DotnetReference } from "./dotnetReference";

declare global {
  interface Window {
    BlazorBridge: {
      ObjectMapper: Map<string, DotnetReference>;
      setDotnetReference: (key: string, reference: DotnetReference) => void;
      removeDotnetReference: (key: string) => void;
    };
  }
}
