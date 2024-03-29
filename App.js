import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator
        
        >
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
          

        </Stack.Navigator>
      </NavigationContainer>
        );
}
