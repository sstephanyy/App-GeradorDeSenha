import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from './pages/home'
import { Passwords } from "./pages/passwords";
import { Ionicons } from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused, size, color}) => {
                        if(focused){ //focused means if a particular tab is currently active or selected.
                            return <Ionicons size={size} color={"#392de9"} name="home"/>
                        }
                        return <Ionicons size={size} color={"#392de9"} name="home-outline"/>
                    }
                }}
            />

            <Tab.Screen
                name="Senhas"
                component={Passwords}
                options={{
                    headerShown: false,
                    tabBarIcon: ({focused, size, color}) => {
                        if(focused){ 
                            return <Ionicons size={size} color={"#392de9"} name="lock-closed"/>
                        }
                        return <Ionicons size={size} color={"#392de9"} name="lock-open"/>
                    }
                }}
            />

        </Tab.Navigator>
    )
}