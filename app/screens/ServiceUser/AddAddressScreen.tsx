/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/sort-styles */
import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import {
  ViewStyle,
  StyleSheet,
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { AppStackScreenProps } from "app/navigators";
import { Button, Header, Screen, Text, TextField } from "app/components";
import Checkbox from "expo-checkbox";
import { TextFieldData, addressType } from "app/DummyData/AddAddressConstants";
import { useNavigation } from "@react-navigation/native";

const dummyMap = require("../../../assets/images/dummyMap.png");

interface AddAddressScreenProps extends AppStackScreenProps<"AddAddress"> {}

export const AddAddressScreen: FC<AddAddressScreenProps> = observer(function AddAddressScreen() {

  const navigation = useNavigation()

  return (
    <Screen style={$root} preset="scroll">
      <Header title="Add Address" titleStyle={styles.headerTitle} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ flex: 1 }}
      >
        <ScrollView>
          <Text
            text="Use My Current Address"
            preset="subheading"
            weight="semiBold"
            size="md"
            style={styles.mapTextStyle}
          />
          <Image source={dummyMap} style={styles.image} />
          <Text text="Address Type" preset="label" weight="normal" size="md" style={styles.textStyle} />
          <View style={styles.selectWrapper}>
            {addressType.map((type) => (
              <View key={type.id} style={styles.selectWrapper}>
                <Text text={type.type} />
                <Checkbox />
              </View>
            ))}
          </View>
          {TextFieldData.map((data) => (
            <TextField
              key={data.id}
              placeholder={data.placeholder}
              style={styles.textField}
              inputWrapperStyle={styles.textField}
              containerStyle={styles.containerStyle}
            />
          ))}
          <Button
            text="Confirm"
            style={styles.button}
            textStyle={styles.buttonText}
            pressedStyle={styles.pressedButton}
            pressedTextStyle={styles.pressedButtonText}
            onPress={()=>{
              navigation.navigate("ServiceUser");
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  );
});

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: 16,
};

const styles = StyleSheet.create({
  headerTitle: {
    lineHeight: 32,
    fontSize: 20,
    color: "#101828",
    fontWeight: "900",
    marginBottom: 8,
  },
  mapTextStyle: {
    color: "#2895FE",
    marginBottom: 16,
  },
  image: {
    marginBottom: 16,
  },
  textStyle: {
    color: "#344054",
    marginBottom: 8,
  },
  selectWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    marginBottom: 5,
  },
  textField: {
    backgroundColor: "#fff",
  },
  containerStyle: {
    marginBottom: 10,
  },

  button: {
    borderRadius: 27.2,
    backgroundColor: "#2895FE",
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderColor: "#2895FE",
    marginBottom: 20
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#F5F5FF",
    textAlign: "center",
  },
  pressedButton: {
    backgroundColor: "#F5F5FF",
  },
  pressedButtonText: {
    color: "#2895FE",
  },
});
