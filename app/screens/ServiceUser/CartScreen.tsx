/* eslint-disable react-native/no-color-literals */
import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, StyleSheet, View } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { CartCard, Icon, MainHeader, Screen, ServiceProviderCard, Text } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { colors } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

const image = require("../../../assets/images/theNext.png")

interface CartScreenProps extends AppStackScreenProps<"ServiceUserCart"> {}

export const ServiceUserCartScreen: FC<CartScreenProps> = observer(function CartScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll" contentContainerStyle={screenContentContainer} >
      <MainHeader pageTitle="Cart" icon3="notification" />
      <ServiceProviderCard
        views="5123"
        rating="4.5"
        name="The Next Barbing Salon"
        location="25 Montgomery Road, New York"
        image={image}
      />
      <View>
        <Text text="Home Service"/>
        <View style={styles.container}>
          <Icon icon="location" size={12} />
          <Text text="24 Montgomery Road, New York" size="sm" weight="medium" />
        </View>
      </View>
      <View style={styles.containerStyle}>
        <Text text="5 people" size="md" weight="light" />
        <View style={styles.container}>
          <Icon icon="hourglass" size={12} />
          <Text text="2 hours" size="sm" weight="medium" style={styles.textColor} />
        </View>
      </View>
      <CartCard />
      <View style={styles.priceContainer}>
        <Text text="Total Price" />
        <Text text="£500" />
      </View>

    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const styles = StyleSheet.create({
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
    backgroundColor: "#F9F9F9",
    borderRadius:16,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    padding: 8,
  },
  textColor: {
    color: colors.palette.primary600,
  },
})
