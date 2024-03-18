import { ILayout } from "@/_shared/types";
import {
  SafeAreaProvider as ReactNativeSafeAreaProvider,
  SafeAreaView,
} from "react-native-safe-area-context";

export const SafeAreaProvider = ({ children }: ILayout) => {
  return (
    <ReactNativeSafeAreaProvider>
      <SafeAreaView>{children}</SafeAreaView>
    </ReactNativeSafeAreaProvider>
  );
};
