import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList50485Navigator from '../features/ArticleList50485/navigator';
import ArticleList50484Navigator from '../features/ArticleList50484/navigator';
import ArticleList50483Navigator from '../features/ArticleList50483/navigator';
import Settings49265Navigator from '../features/Settings49265/navigator';
import Settings49257Navigator from '../features/Settings49257/navigator';
import ArticleList49235Navigator from '../features/ArticleList49235/navigator';
import ArticleList49234Navigator from '../features/ArticleList49234/navigator';
import ArticleList49233Navigator from '../features/ArticleList49233/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
ArticleList50485: { screen: ArticleList50485Navigator },
ArticleList50484: { screen: ArticleList50484Navigator },
ArticleList50483: { screen: ArticleList50483Navigator },
Settings49265: { screen: Settings49265Navigator },
Settings49257: { screen: Settings49257Navigator },
ArticleList49235: { screen: ArticleList49235Navigator },
ArticleList49234: { screen: ArticleList49234Navigator },
ArticleList49233: { screen: ArticleList49233Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
