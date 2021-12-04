export type DotnetReference = {
  invokeMethodAsync(managedMethodName: string, ...args: any[]): Promise<any>;
};
