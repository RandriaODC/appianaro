import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AccueilScreen from './screens/AccueilScreen';
import ContentScreen from './screens/ContentScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import SettingScreen from './screens/SettingScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Accueil'>
        <Tab.Screen 
          name="Accueil" 
          component={AccueilScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <Ionicons size={size} name="home-outline" color={color} />
            ),
          }}
        />

        <Tab.Screen 
          name="Contenus" 
          component={ContentScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <Ionicons size={size} name="book-outline" color={color} />
            ),
          }}
        />

        <Tab.Screen 
          name="A propos" 
          component={AboutScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <Ionicons size={size} name="information-circle-outline" color={color} />
            ),
          }}
        />

        <Tab.Screen 
          name="Contact" 
          component={ContactScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <Ionicons size={size} name="mail-outline" color={color} />
            ),
          }}
        />

        <Tab.Screen 
          name="Parametres" 
          component={SettingScreen}
          options={{
            drawerIcon: ({color, size}) => (
              <Ionicons size={size} name="settings-outline" color={color} />
            ),
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
