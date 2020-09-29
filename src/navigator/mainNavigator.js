import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile116734Navigator from '../features/UserProfile116734/navigator';
import Tutorial116733Navigator from '../features/Tutorial116733/navigator';
import NotificationList116695Navigator from '../features/NotificationList116695/navigator';
import Settings116694Navigator from '../features/Settings116694/navigator';
import Settings116684Navigator from '../features/Settings116684/navigator';
import UserProfile116681Navigator from '../features/UserProfile116681/navigator';
import UserProfile116641Navigator from '../features/UserProfile116641/navigator';
import Tutorial116640Navigator from '../features/Tutorial116640/navigator';
import NotificationList116612Navigator from '../features/NotificationList116612/navigator';
import Settings116611Navigator from '../features/Settings116611/navigator';
import Settings116603Navigator from '../features/Settings116603/navigator';
import UserProfile116601Navigator from '../features/UserProfile116601/navigator';
import BlankScreen1116579Navigator from '../features/BlankScreen1116579/navigator';
import BlankScreen0116578Navigator from '../features/BlankScreen0116578/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile116734: { screen: UserProfile116734Navigator },
Tutorial116733: { screen: Tutorial116733Navigator },
NotificationList116695: { screen: NotificationList116695Navigator },
Settings116694: { screen: Settings116694Navigator },
Settings116684: { screen: Settings116684Navigator },
UserProfile116681: { screen: UserProfile116681Navigator },
UserProfile116641: { screen: UserProfile116641Navigator },
Tutorial116640: { screen: Tutorial116640Navigator },
NotificationList116612: { screen: NotificationList116612Navigator },
Settings116611: { screen: Settings116611Navigator },
Settings116603: { screen: Settings116603Navigator },
UserProfile116601: { screen: UserProfile116601Navigator },
BlankScreen1116579: { screen: BlankScreen1116579Navigator },
BlankScreen0116578: { screen: BlankScreen0116578Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
