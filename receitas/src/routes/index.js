import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../pages/home'
import { Favorites } from '../pages/favorites'

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveBackgroundColor: "#121212",

                tabBarStyle:{
                    backgroundColor:"#fff",
                    borderTopWidth:0
                }
            }}
        >
            


            <Tab.Screen 
                name="HomeTab" 
                component={Home} 
            />
            <Tab.Screen 
                name="Favorites" 
                component={Favorites} 
            />
        </Tab.Navigator>
    )
}