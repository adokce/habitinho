import { Slot } from "expo-router";
import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";

export default function Root() {
  console.log("Root");

  return (
    <TamaguiProvider config={config}>
      <Slot />
    </TamaguiProvider>
  );
}
