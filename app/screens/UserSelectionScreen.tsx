import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "app/components";
import { AuthenticationStore } from "app/models/AuthenticationStore"; 

interface UserSelectionScreenProps {
  navigation: any; 
  authenticationStore: AuthenticationStore;
}

const UserSelectionScreen: React.FC<UserSelectionScreenProps> = ({
  navigation,
  authenticationStore,
}) => {
  const handleUserSelection = (userType: "su"|"sp") => {
    authenticationStore.setUserType(userType);
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your User Profile</Text>
      <Button style={styles.button} onPress={() => handleUserSelection("su")}>
        <Text>Service User</Text>
      </Button>
      <Button style={styles.button} onPress={() => handleUserSelection("sp")}>
        <Text>Service Provider</Text>
      </Button>
    </View>
    
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
  },

  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default UserSelectionScreen;
