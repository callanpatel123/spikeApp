// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View} from 'react-native';
// import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

// export default class App extends React.Component {
//   render() {
//     return (
//       <Container style={styles.container}>
//         <Form>
//           <Item floatingLabel>
//             <Label>Email</Label>
//             <Input
//               autoCorrect={false}
//               autoCapitalize="none"
//             />
//           </Item>
//           <Item floatingLabel>
//             <Label>Password</Label>
//             <Input
//               secureTextEntry={true}
//               autoCorrect={false}
//               autoCapitalize="none"
//             />
//           </Item>
//           <Button style={{ marginTop: 10}}
//             full
//             rounded
//             success
//           >
//             <Text>Login</Text>
//           </Button>
//         </Form>
//       </Container>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//     padding: 10
//   },
// });
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/bucky.png")} />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <View style={{
        borderBottomColor: 'black',
        borderBottomWidth: 3,
        alignSelf:'stretch',
      }}
      />
    <TouchableOpacity>
        <Text style={styles.signup_button}>Sign Up</Text>
    </TouchableOpacity>
    <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
    </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(250, 0, 0, .5)",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  signup_button: {
    height: 30,
    marginBottom: 5,
    marginTop: 30
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    marginTop: 10
  },
  loginBtn: {
    width: "50%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#fff",
    marginBottom: 30
  },
});
