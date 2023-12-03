/* eslint-disable react-native/sort-styles */
/* eslint-disable react-native/no-color-literals */
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Image, StyleSheet, View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Icon, OtherHeader, Screen, SectionHeader, Text, TextField } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { works } from "app/components/serviceUser/DummyData/BookingScreenData"
import { colors } from "app/theme"
import Checkbox from "expo-checkbox"
import { addressType } from "app/components/serviceUser/DummyData/AddAddressConstants"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface BookServiceScreenProps extends AppStackScreenProps<"BookService"> {}

export const BookServiceScreen: FC<BookServiceScreenProps> = observer(function BookServiceScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen
      style={$root}
      preset="scroll"
      contentContainerStyle={screenContentContainer}
      safeAreaEdges={["top", "bottom"]}
    >
      <OtherHeader pageTitle="Book Service" />
      <SectionHeader leftText="Previous Work" rightText="View All" />
      <View style={styles.worksContainer}>
        {works.map((work, index) => (
          <Image key={index} source={work} />
        ))}
      </View>

      <View style={styles.containerStyle}>
        <Text text="Hair Cut" size="md" weight="light" />
        <View style={styles.container}>
          <Icon icon="hourglass" size={12} />
          <Text text="30 minutes" size="sm" weight="medium" style={styles.textColor} />
        </View>
      </View>

      <TextField
        label="Number of Persons"
        style={styles.textField}
        inputWrapperStyle={styles.textField}
        containerStyle={styles.textContainer}
        keyboardType="number-pad"
      />
      <TextField
        label="Select Appointment Date"
        style={styles.textField}
        inputWrapperStyle={styles.textField}
        containerStyle={styles.textContainer}
        keyboardType="numbers-and-punctuation"
      />

      <SectionHeader leftText="Available Slots" />

      <SectionHeader leftText="Service Location" />
      <View style={styles.selectWrapper}>
        {addressType.map((type) => (
          <View key={type.id} style={styles.selectWrapper}>
            <Text text={type.type} />
            <Checkbox />
          </View>
        ))}
      </View>

      <View style={styles.priceContainer}>
        <Text text="Total Price" />
        <Text text="£500" />
      </View>

      <View style={styles.buttonContainer}>
        <Button style={styles.cancelButton}>
          <Text style={styles.cancelButtonText} text="Add to Cart" />
        </Button>
        <Button
          text={"Button Appointment"}
          style={styles.acceptButton}
          textStyle={styles.buttonText}
          pressedStyle={styles.pressedButton}
          pressedTextStyle={styles.pressedButtonText}
        />
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
const styles = StyleSheet.create({
  acceptButton: {
    borderRadius: 24,
    backgroundColor: colors.palette.primary600,
    borderColor: colors.palette.primary600,
    width: "48%",
  },
  acceptButtonText: { fontSize: 14, fontWeight: "500", color: colors.palette.primary50 },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
  },
  pressedButton: {
    backgroundColor: "#F5F5FF",
  },
  pressedButtonText: {
    color: colors.palette.primary600,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#F5F5FF",
    textAlign: "center",
  },
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  containerStyle: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  priceContainer: {
    backgroundColor:"#F9F9F9",
    borderRadius:16,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    padding: 8,
  },
  selectWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    marginBottom: 5,
  },
  textColor: {
    color: colors.palette.primary600,
  },
  textContainer: {
    marginBottom: 10,
  },
  textField: {
    backgroundColor: colors.palette.neutral100,
  },
  worksContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  cancelButton: {
    backgroundColor: colors.palette.primary50,
    borderRadius: 24,
    borderColor: "#D0D5DD",
    width: "48%",
  },
  cancelButtonText: { fontSize: 14, fontWeight: "500", color: "#374151" },
})
