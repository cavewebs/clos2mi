import React, { FC, useEffect, useMemo, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, StyleSheet, TextInput } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { AutoImage, Icon, Screen, Text, TextField, TextFieldAccessoryProps } from "app/components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"
import { screenContentContainer } from "app/styles/mainStyles"
import SplashImg1 from "assets/images/splash-1.png"
import { colors } from "app/theme"
import { useStores } from "app/models"
import { Checkbox } from "@gluestack-ui/themed"

interface SigninScreenProps extends AppStackScreenProps<"Signin"> {}

export const SigninScreen: FC<SigninScreenProps> = observer(function SigninScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const authPasswordInput = useRef<TextInput>()

  const [authPassword, setAuthPassword] = useState("")
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [attemptsCount, setAttemptsCount] = useState(0)
  const {
    authenticationStore: {
      authEmail,
      setAuthEmail,
      setAuthToken,
      validationError,
      userType,
      setUserType,
    },
  } = useStores()

  useEffect(() => {
    // Here is where you could fetch credentials from keychain or storage
    // and pre-fill the form fields.
    setAuthEmail("ignite@infinite.red")
    setAuthPassword("ign1teIsAwes0m3")
    console.log(userType)
    userType === "su" ? setUserType("su") : setUserType("sp")
    console.log(userType)

    // Return a "cleanup" function that React will run when the component unmounts
    return () => {
      setAuthPassword("")
      setAuthEmail("")
    }
  }, [])

  const error = isSubmitted ? validationError : ""

  function login() {
    setIsSubmitted(true)
    setAttemptsCount(attemptsCount + 1)
    console.log(userType)
    userType === "su" ? setUserType("su") : setUserType("sp")
    console.log(userType)

    if (validationError) return

    // Make a request to your server to get an authentication token.
    // If successful, reset the fields and set the token.
    setIsSubmitted(false)
    setAuthPassword("")
    setAuthEmail("")

    // We'll mock this with a fake token.
    setAuthToken(String(Date.now()))
  }

  const PasswordRightAccessory = useMemo(
    () =>
      function PasswordRightAccessory(props: TextFieldAccessoryProps) {
        return (
          <Icon
            icon={isAuthPasswordHidden ? "view" : "hidden"}
            color={colors.palette.neutral800}
            containerStyle={props.style}
            size={20}
            onPress={() => setIsAuthPasswordHidden(!isAuthPasswordHidden)}
          />
        )
      },
    [isAuthPasswordHidden],
  )

  return (
    <Screen preset="scroll" contentContainerStyle={screenContentContainer}>
      <View style={styles.container}>
        <View style={styles.topView}>
          <View>
            <AutoImage source={SplashImg1} style={styles.splashImg} />
          </View>
          <View>
            <Text preset="subheading" text="Sign In" />
            <Text text="Welcome Back" style={{ color: colors.palette.neutral600 }} />
            <Text style={styles.inactiveSlide} text="Customer" />
            <Text style={styles.activeSlide} text="Service Provider" />
          </View>
        </View>
        <View style={styles.bottomView}>
          <TextField label={"Phone number"} keyboardType="phone-pad" />
          <TextField
            ref={authPasswordInput}
            value={authPassword}
            onChangeText={setAuthPassword}
            // containerStyle={$textField}
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            secureTextEntry={isAuthPasswordHidden}
            label="Password"
            // onSubmitEditing={login}
            RightAccessory={PasswordRightAccessory}
          />
          <Checkbox value="retain" aria-label="Keep me signed in" />
          <View></View>
        </View>
      </View>
    </Screen>
  )
})

const styles = StyleSheet.create({
  bottomView: {
    marginBottom: 10,
  },
  button: {
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingTop: 45,
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  activeSlide: {
    backgroundColor: colors.palette.neutral300,
    borderRadius: 100,
    marginHorizontal: 3,
    height: 32,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    boxShadow: "0px 1px 2px 0px rgba(10, 44, 111, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)", 
  },
  inactiveSlide: {
    backgroundColor: colors.palette.neutral300,
    width: 120,
    height: 40,
    borderRadius: 100,
    marginHorizontal: 3,
  },

  splashImg: {
    backgroundColor: colors.background,
    borderColor: colors.palette.neutral400,
    borderRadius: 20,
    borderWidth: 1,
    height: 165,
    justifyContent: "center",
    width: 345,
    overflow: "hidden",
  },
  title: {
    fontSize: 20,
    marginBottom: 44,
    textAlign: "center",
  },
  topView: {
    flex: 1,
    alignItems: "center",
    margin: 20,
  },
})
