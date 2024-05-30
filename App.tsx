import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

const HomePage = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <StatusBar style="auto" />
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
    </View>
  );
};

const LoginPage = () => {
  const [text, onChangeText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.loginFormControl}>
        <Text>User name</Text>
        <TextInput
          value={text}
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Your name"
        />
      </View>
      <View style={styles.loginFormControl}>
        <Text>Password</Text>
        <TextInput
          value={text}
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="************"
        />
      </View>
      <Button title="Login" />
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage}></Stack.Screen>
        <Stack.Screen name="Login" component={LoginPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: 10,
    padding: 10,
    fontSize: 30,
  },
  loginForm: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginFormControl: {
    height: 60,
    marginBottom: 20,
  },
  input: {
    width: 320,
    height: 40,
    marginTop: 8,
    padding: 14,
    borderWidth: 1,
    borderRadius: 20,
  },
});

export default App;
