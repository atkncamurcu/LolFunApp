import { Provider } from "react-redux";
import { Navigation } from "react-native-navigation";

import RegisterScreens from "./src/screens";
import { store } from "./src/store";


const StartApp = () => {
  RegisterScreens(store,Provider);
  
  Navigation.startSingleScreenApp({
    screen:{
      screen: 'App.LoginScreen'
    },
    appStyle:{
      navBarHidden:true
    }
  });
}

export default StartApp;