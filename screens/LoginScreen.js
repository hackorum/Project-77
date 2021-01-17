import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as firebase from "firebase";
import db from "../config";

export default class LoginScreen extends Component {
  state = {
    email: "",
    password: "",
  };
  userSignup = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => Alert.alert("User Has Been Created"))
      .catch(function (error) {
        console.log(error);
      });
  };
  userLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => Alert.alert("User Has Been Logged In"))
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <Text style={styles.title}>BARTER</Text>
          <TextInput
            style={styles.form}
            placeholder="Enter your email-id here"
            keyboardType="email-address"
            onChangeText={(text) => this.setState({ email: text })}
            value={this.state.email}
          />
          <TextInput
            style={styles.form}
            placeholder="Enter your password here"
            secureTextEntry
            onChangeText={(text) => this.setState({ password: text })}
            value={this.state.password}
          />
          <TouchableOpacity style={styles.button} onPress={this.userLogin}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.userSignup}>
            <Text style={styles.text}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#81A1C1",
  },
  title: {
    fontSize: 45,
    color: "#5E81AC",
    position: "absolute",
    top: "10%",
    fontFamily: "sans-serif",
  },
  mainContainer: {
    backgroundColor: "#88C0D0",
    width: "80%",
    height: "60%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    borderWidth: 0.7,
    borderRadius: 10,
    width: "75%",
    marginBottom: 20,
    height: "13%",
    paddingLeft: 7,
    top: "10%",
  },
  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 15,
    width: "70%",
    backgroundColor: "#5E81AC",
    marginTop: 20,
    top: "10%",
  },
  text: {
    fontSize: 15,
    color: "#eee",
  },
});
