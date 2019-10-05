import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import getNavigationOptions from './options';
import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/details';


const AppNavigator = createStackNavigator({
    Home:  {
        screen: HomeScreen,
        navigationOptions: getNavigationOptions('Home'),
    },
    Details: {
        screen:DetailsScreen,
        navigationOptions: getNavigationOptions('Details'),
    },
}, {
    initialRouteName: 'Home',
});


export default createAppContainer(AppNavigator);