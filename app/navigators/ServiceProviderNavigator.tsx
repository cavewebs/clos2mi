import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
  WelcomeScreen
} from "app/screens"

export type ServiceProviderNavigatorParamList = {
  Demo: undefined
}

const Stack = createNativeStackNavigator<ServiceProviderNavigatorParamList>()
export const ServiceProviderNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ cardStyle: { backgroundColor: "transparent" }, headerShown: false, }}>
      <Stack.Screen name="Demo" component={WelcomeScreen} />
    </Stack.Navigator>
  )
}
