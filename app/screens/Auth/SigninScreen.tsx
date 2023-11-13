import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Screen, Text } from "app/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"
import { screenContentContainer } from "app/styles/mainStyles"

interface SigninScreenProps extends AppStackScreenProps<"Signin"> {}

export const SigninScreen: FC<SigninScreenProps> = observer(function SigninScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll" contentContainerStyle={screenContentContainer}>
      <View>
        
      <Text preset="heading" text="sign in" />
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
