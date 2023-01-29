import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Register from '../screens/Register';
import Otp from '../screens/Otp'
import School from '../screens/School'
import Apptour from '../screens/Apptour';
// import Home from '../screens/Home';
import Student from '../screens/Student';
import ExamCorner from '../components/exscreens/ExamCorner';
import Subscriptions from '../components/exscreens/Subscriptions';
import Analytics from '../components/exscreens/Analytics';
import CustomDrawer from '../components/CustomDrawer';
import TabNavigator from './TabNavigator';
import Biology from '../screens/Biology';
import Physics from '../screens/Physics';
import Chemistry from '../screens/Chemistry';
import Maths from '../screens/Maths';
import English from '../screens/English';
import InBiology from '../screens/InBiology';
import TopTabNavigator from './TopTabNavigator';
import InChap from '../screens/InChap';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


function DrawerRoutes() {
    return (
      <Drawer.Navigator drawerContent= {props => <CustomDrawer {...props}/>} screenOptions = {{headerShown : false,}} >
        
        <Drawer.Screen 
        name="Home" 
        component={TabNavigator} 
        />
        <Drawer.Screen name="Exam Corner" component={ExamCorner}  />
        <Drawer.Screen name="Subscriptions" component = {Subscriptions} />
        <Drawer.Screen name="Analytics" component = {Analytics}  />
        
      </Drawer.Navigator>
    );
  }



const Navigation = () => {
    return(
        <NavigationContainer >
            <Stack.Navigator screenOptions={{headerShown : false}}>
                <Stack.Screen
                name="Register"
                component = {Register}
                />
                <Stack.Screen
                name="Otp"
                component = {Otp}
                />
                <Stack.Screen
                name="Student"
                component = {Student}
                />
                <Stack.Screen
                name="School"
                component = {School}
                />
               
                <Stack.Screen
                name="Apptour"
                component = {Apptour}
                /> 
                <Stack.Screen
                name="Home"
                component = {DrawerRoutes}
                />
                <Stack.Screen
                name="Biology"
                component = {Biology}
                />
                <Stack.Screen
                name="Physics"
                component = {Physics}
                />
                <Stack.Screen
                name="Chemistry"
                component = {Chemistry}
                />
                <Stack.Screen
                name="Maths"
                component = {Maths}
                />
                <Stack.Screen
                name="English"
                component = {English}
                />
                <Stack.Screen
                name="TopTabNavigator"
                component = {TopTabNavigator}
                />
                <Stack.Screen
                name="InChap"
                component = {InChap}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation