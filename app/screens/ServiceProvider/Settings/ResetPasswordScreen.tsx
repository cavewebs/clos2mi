import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ResetPasswordScreenProps extends AppStackScreenProps<"ResetPassword"> {}

export const ResetPasswordScreen: FC<ResetPasswordScreenProps> = observer(function ResetPasswordScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll" contentContainerStyle={screenContentContainer} safeAreaEdges={["top", "bottom"]} >
      <Text preset="heading" text="resetPassword" />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
