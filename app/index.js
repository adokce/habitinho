import { Text as TextRN } from "react-native";
import { Stack, Text } from "tamagui"; // or '@tamagui/core'

export default function Index() {
  console.log("Index render 1");

  return (
    <Stack backgroundColor="red" borderRadius={10}>
      <Text color="white">Hello Index</Text>
    </Stack>
  );

  // return <TextRN>Index page</TextRN>;
}
