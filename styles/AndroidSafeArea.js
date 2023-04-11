import { Platform, StatusBar } from "react-native";

const AndroidSafeArea = {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }

export default AndroidSafeArea