import { type DotnetReference } from "../../types/dotnetReference";

const initialized = false;

export const init = () => {
  if (initialized) {
    return;
  }
  window.BlazorBridge = window.BlazorBridge || {};
  window.BlazorBridge.ObjectMapper =
    window.BlazorBridge.ObjectMapper || new Map<string, DotnetReference>();

  window.BlazorBridge.setDotnetReference = (key: string, reference: DotnetReference) => {
    window.BlazorBridge.ObjectMapper.set(key, reference);
    window.dispatchEvent(
      new CustomEvent("setDotnetReference", { detail: { key, reference } })
    );
  };

  window.BlazorBridge.removeDotnetReference = (key: string) => {
    window.BlazorBridge.ObjectMapper.delete(key);
    window.dispatchEvent(
      new CustomEvent("removeDotnetReference", { detail: { key } })
    );
  };
};
