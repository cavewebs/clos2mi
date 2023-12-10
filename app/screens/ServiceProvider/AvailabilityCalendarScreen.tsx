import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text, BackArrowHeader, Calendars, HeaderWithBackButton } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface AvailabilityCalendarScreenProps extends AppStackScreenProps<"AvailabilityCalendar"> { }

export const AvailabilityCalendarScreen: FC<AvailabilityCalendarScreenProps> = observer(
  function AvailabilityCalendarScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen
        style={$root}
        preset="scroll"
        contentContainerStyle={screenContentContainer}
        safeAreaEdges={["bottom"]}
      >
        <View>
          <HeaderWithBackButton title="Availability" />
          <Text text="Specify opening time on specific days" />
          <Calendars />
        </View>
      </Screen >
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
