import { Navigation } from 'react-native-navigation';

import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { LeagueListScreen } from './LeagueListScreen';
import { MatchListScreen } from './MatchListScreen';
import { MatchScreen } from './MatchScreen';
import { TopTierScreen } from './TopTierScreen';

const RegisterScreens = (store, provider) => {
    Navigation.registerComponent('App.LoginScreen', () => LoginScreen, store, provider);
    Navigation.registerComponent('App.HomeScreen', () => HomeScreen, store, provider);
    Navigation.registerComponent('App.LeagueListScreen', () => LeagueListScreen, store, provider);
    Navigation.registerComponent('App.MatchListScreen', () => MatchListScreen, store, provider);
    Navigation.registerComponent('App.MatchScreen', () => MatchScreen, store, provider);
    Navigation.registerComponent('App.TopTierScreen', () => TopTierScreen, store, provider);
}

export default RegisterScreens;