import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  WelcomeScreen
} from "app/screens"

export type ServiceUserNavigatorParamList = {
  Demo: undefined
}

const Stack = createNativeStackNavigator<ServiceUserNavigatorParamList>()
export const ServiceUserNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false, }}>
      <Stack.Screen name="Demo" component={WelcomeScreen} />
    </Stack.Navigator>
  )
}
