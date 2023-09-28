import { Slot } from "expo-router";
import { TamaguiProvider } from "tamagui";
import config from "../tamagui.config";
// import "@tamagui/core/reset.css"; // This shit isn't working

export default function Layout() {
  console.log("Layout test");

  return (
    <TamaguiProvider config={config}>
      <Slot />
    </TamaguiProvider>
  );
}
