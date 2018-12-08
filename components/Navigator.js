import { createStackNativator } from "react-navigation";
import MainLayout from "./MainLayout";
import About from "./About";

const Screens = createStackNativator({
  Home: { screen: MainLayout },
  About: { screen: About }
});

export default Screens;
