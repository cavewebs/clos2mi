import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface BookingsScreenProps extends AppStackScreenProps<"ServiceUserBookings"> {}

export const ServiceUserBookingsScreen: FC<BookingsScreenProps> = observer(function BookingsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll" contentContainerStyle={screenContentContainer} >
      <Text text="bookings" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
