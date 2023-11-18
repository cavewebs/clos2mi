/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  NavigatorScreenParams, // @demo remove-current-line
} from "@react-navigation/native"
import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack"
import { observer } from "mobx-react-lite"
import React from "react"
import { useColorScheme } from "react-native"
import * as Screens from "app/screens"
import Config from "../config"
import { useStores } from "../models" // @demo remove-current-line
import { DemoTabParamList } from "./DemoNavigator" // @demo remove-current-line
import { navigationRef, useBackButtonHandler } from "./navigationUtilities"
import { colors } from "app/theme"
import { AuthenticationStoreModel } from "app/models/AuthenticationStore"
import { ServiceProviderNavigator, ServiceProviderTabParamList } from "./ServiceProviderNavigator"
import { ServiceUserNavigator, ServiceUserTabParamList } from "./ServiceUserNavigator"
import { WalkthroughStoreModel } from "app/models/WalkthroughStore"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 *   https://reactnavigation.org/docs/typescript/#organizing-types
 */
export type AppStackParamList = {
  Login: undefined // @demo remove-current-linea
  ServiceProvider: NavigatorScreenParams<ServiceProviderTabParamList> 
  ServiceUser: NavigatorScreenParams<ServiceUserTabParamList> 
  UserSelection: undefined
  // 🔥 Your screens go here
  SplashOne: undefined
  SplashTwo: undefined
  SplashThree: undefined
  LoginSignin: undefined
  SelectUserType: undefined
  Signup: undefined
  Otp: undefined
  Signin: undefined
  ResetPassword: undefined

  // ServiceUser Screens
  PrivacyPolicy: undefined
  ServiceUserBookings:undefined
  ServiceUserCart:undefined
  ServiceUserHome:undefined
  ServiceUserProfile:undefined
  AddAddress:undefined
  Notifications:undefined


  // ServiceProvider Screens
  ServiceProviderBookings:undefined
  ServiceProviderProfile:undefined
  ServiceProviderHome:undefined
  ServiceProviderServices:undefined

  // IGNITE_GENERATOR_ANCHOR_APP_STACK_PARAM_LIST
}

const authenticationStore = AuthenticationStoreModel.create({
  authToken: "", // Initial values
  authEmail: "",
  userType: "",
})
const walkthroughStore = WalkthroughStoreModel.create({ seenWalkthrough: undefined })

/**
 * This is a list of all the route names that will exit the app if the back button
 * is pressed while in that screen. Only affects Android.
 */
const exitRoutes = Config.exitRoutes

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<AppStackParamList>()

const AppStack = observer(function AppStack() {
  // @demo remove-block-start
  const {
    authenticationStore: { isAuthenticated, userType },
  } = useStores()
  const {
    walkthroughStore: { hasSeenWalkthrough },
  } = useStores()

  // @demo remove-block-end
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, navigationBarColor: colors.background }}
      initialRouteName={hasSeenWalkthrough ? "Welcome" : "SplashOne"} // @demo remove-current-line
    >
      {/* @demo remove-block-start */}
      {isAuthenticated ? (
        <>
          {userType === "sp" ? (
            <Stack.Screen name="ServiceProvider" component={ServiceProviderNavigator} />
          ) : (
            <Stack.Screen name="ServiceUser" component={ServiceUserNavigator} />
          )}
        </>
      ) : (
        <>
          {hasSeenWalkthrough ? (
            <>
              <Stack.Screen name="LoginSignin" component={Screens.LoginSigninScreen} />
              <Stack.Screen name="Signup" component={Screens.SignupScreen} />
              <Stack.Screen name="Otp" component={Screens.OtpScreen} />
              <Stack.Screen name="Signin" component={Screens.SigninScreen} />
              <Stack.Screen name="ResetPassword" component={Screens.ResetPasswordScreen} />
              <Stack.Screen name="Login" component={Screens.LoginScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="SplashOne" component={Screens.SplashOneScreen} />
              <Stack.Screen name="SplashTwo" component={Screens.SplashTwoScreen} />
              <Stack.Screen name="SplashThree" component={Screens.SplashThreeScreen} />
              <Stack.Screen name="SelectUserType" component={Screens.SelectUserTypeScreen} />
            </>
          )}
        </>
      )}
      {/* ServiceUser Screens  */}
      <Stack.Screen name="PrivacyPolicy" component={Screens.PrivacyPolicyScreen} />
      <Stack.Screen name="ServiceUserHome" component={Screens.ServiceUserHomeScreen} />
      <Stack.Screen name="ServiceUserBookings" component={Screens.ServiceUserBookingsScreen} />
      <Stack.Screen name="ServiceUserCart" component={Screens.ServiceUserCartScreen} />
      <Stack.Screen name="ServiceUserProfile" component={Screens.ServiceUserProfileScreen} />
      <Stack.Screen name="AddAddress" component={Screens.AddAddressScreen} />
      <Stack.Screen name="Notifications" component={Screens.NotificationsScreen} />
      <Stack.Screen name="ServiceUser" component={ServiceUserNavigator} />


      {/* Service Provider Screens */}
      <Stack.Screen name="ServiceProviderHome" component={Screens.ServiceProviderHomeScreen} />
      <Stack.Screen name="ServiceProviderBookings" component={Screens.ServiceProviderBookingsScreen} />
      <Stack.Screen name="ServiceProviderServices" component={Screens.ServiceProviderServicesScreen} />
      <Stack.Screen name="ServiceProviderProfile" component={Screens.ServiceProviderProfileScreen} />


			{/* IGNITE_GENERATOR_ANCHOR_APP_STACK_SCREENS */}
    </Stack.Navigator>
  )
})

export interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
  const colorScheme = useColorScheme()

  useBackButtonHandler((routeName) => exitRoutes.includes(routeName))

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
})
