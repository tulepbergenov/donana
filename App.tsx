import { Providers } from "@/_app/providers";
import { HomeScreen } from "@/_screens";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <Providers>
      <HomeScreen />
      <StatusBar style="auto" />
    </Providers>
  );
};

export default App;
