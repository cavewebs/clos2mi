import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface CartScreenProps extends AppStackScreenProps<"ServiceUserCart"> {}

export const ServiceUserCartScreen: FC<CartScreenProps> = observer(function CartScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll" contentContainerStyle={screenContentContainer} >
      <Text text="cart" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
