/* eslint-disable react-native/no-color-literals */
/* eslint-disable react-native/sort-styles */
import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import {
  ViewStyle,
  StyleSheet,
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Header, Screen, Text, TextField } from "app/components"
import Checkbox from "expo-checkbox"
import {
  TextFieldData,
  addressType,
} from "app/components/serviceUser/DummyData/AddAddressConstants"
import { useNavigation } from "@react-navigation/native"
import { colors } from "app/theme"

const dummyMap = require("../../../assets/images/dummyMap.png")

interface AddAddressScreenProps extends AppStackScreenProps<"AddAddress"> {}

export const AddAddressScreen: FC<AddAddressScreenProps> = observer(function AddAddressScreen() {
  const [selectType, setSelectType] = useState(null)
  const navigation = useNavigation()

  return (
    <Screen style={$root} preset="scroll">
      <Header title="Add Address" titleStyle={styles.headerTitle} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
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
          <Text
            text="Address Type"
            preset="label"
            weight="normal"
            size="md"
            style={styles.textStyle}
          />
          <View style={styles.selectWrapper}>
            {addressType.map((type) => (
              <View key={type.id} style={styles.selectWrapper}>
              <Text text={type.type} />
              <Checkbox
                value={selectType === type.type}
                onValueChange={() => {
                  setSelectType(type.type);
                }}
                color={selectType === type.type ? colors.tint : undefined}
              />
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
              keyboardType={data.type}
            />
          ))}
          <Button
            text="Confirm"
            style={styles.button}
            textStyle={styles.buttonText}
            pressedStyle={styles.pressedButton}
            pressedTextStyle={styles.pressedButtonText}
            onPress={() => {
              navigation.navigate("ServiceUser")
            }}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: 16,
}

const styles = StyleSheet.create({
  headerTitle: {
    lineHeight: 32,
    fontSize: 20,
    color: "#101828",
    fontWeight: "900",
    marginBottom: 8,
  },
  mapTextStyle: {
    color: colors.palette.primary600,
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
    backgroundColor: colors.palette.neutral100,
  },
  containerStyle: {
    marginBottom: 10,
  },

  button: {
    borderRadius: 27.2,
    backgroundColor: colors.palette.primary600,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderColor: colors.palette.primary600,
    marginBottom: 20,
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
    color: colors.palette.primary600,
  },
})
