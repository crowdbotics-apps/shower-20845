import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings116603Navigator from '../features/Settings116603/navigator';
import UserProfile116601Navigator from '../features/UserProfile116601/navigator';
import BlankScreen1116579Navigator from '../features/BlankScreen1116579/navigator';
import BlankScreen0116578Navigator from '../features/BlankScreen0116578/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
