import { ILayout } from "@/_shared/types";
import { SafeAreaProvider } from "./SafeAreaProvider";

export const Providers = ({ children }: ILayout) => {
  return <SafeAreaProvider>{children}</SafeAreaProvider>;
};
