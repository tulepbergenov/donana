import { StatusBar } from "expo-status-bar";
import { Providers } from "./_app/providers";
import { HomeScreen } from "./_screens";

export const Donana = () => {
  return (
    <Providers>
      <HomeScreen />
      <StatusBar style="auto" />
    </Providers>
  );
};
