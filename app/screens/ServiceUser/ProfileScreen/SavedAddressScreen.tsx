/* eslint-disable react-native/no-color-literals */
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { StyleSheet, View, ViewStyle, TouchableOpacity } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Icon, OtherHeader, Screen, Search, Text } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { colors } from "app/theme"
import Checkbox from "expo-checkbox"
import { address } from "app/components/serviceUser/DummyData/ProfileScreensData"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface SavedAddressScreenProps extends AppStackScreenProps<"SavedAddress"> {}

export const SavedAddressScreen: FC<SavedAddressScreenProps> = observer(
  function SavedAddressScreen() {
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
        <OtherHeader pageTitle="Saved Addresses" />
        <Search />
        {address.map((data, index) => (
          <View style={styles.container} key={index}>
            <View style={styles.addressContainer}>
              <View style={styles.leftContainer}>
                <Icon icon="location" size={16} />
                <Text text={data.address} size="sm" weight="light" />
              </View>
              <View style={styles.textContainer}>
                <Text text={data.Tag} style={styles.rightText} size="sm" weight="light" />
              </View>
            </View>
            <View style={styles.leftContainer}>
              <Text text="Mark as default address" size="lg" weight="light" />
              <Checkbox />
            </View>
          </View>
        ))}

        <TouchableOpacity style={styles.leftContainer}>
          <Text text="Add New Address" size="lg" weight="light" style={styles.rightText} />
          <Icon icon="add" size={24} />
        </TouchableOpacity>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const styles = StyleSheet.create({
  addressContainer: {
    alignItems: "center",
    borderColor: "#D1D5DB",
    borderRadius: 16,
    borderWidth: 0.5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 25,
  },
  container: {
    marginBottom: 15,
  },
  leftContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },
  rightText: {
    color: colors.palette.primary600,
  },
  textContainer: {
    backgroundColor: colors.palette.neutral200,
    borderRadius: 16,
    padding: 2,
    paddingHorizontal: 8,
  },
})
