import React, { FC, useState, useMemo } from "react"
import { observer } from "mobx-react-lite"
import { View, StyleSheet, Platform } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  Screen,
  Text,
  TextField,
  Icon,
  Button,
  Toggle,
  TextFieldAccessoryProps,
} from "app/components"
import FlagSelector from "app/components/Custom/FlagSelector"
import { screenContentContainer } from "app/styles/mainStyles"
import DatePicker from "react-native-datepicker"
// import DatePicker from "@react-native-community/datetimepicker"
import Checkbox from "expo-checkbox"
import { useStores } from "app/models"
import { colors } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface SignupScreenProps extends AppStackScreenProps<"Signup"> {}

export const SignupScreen: FC<SignupScreenProps> = observer(function SignupScreen() {
  const [isAuthPasswordHidden, setIsAuthPasswordHidden] = useState(true)
  const [firstName, setFirstName] = useState("")
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  const [password, setPassword] = useState("")
  const [accept, setAccept] = useState(false)

  // Pull in one of our MST stores
  const {
    authenticationStore: {
      authPhone,
      setAuthPhone,
      setAuthToken,
      validationError,
      userType,
      setUserType,
    },
  } = useStores()

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

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date
    setShowDatePicker(Platform.OS === "ios") // Close the picker on iOS
    setDate(currentDate)
  }

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen
      contentContainerStyle={screenContentContainer}
      safeAreaEdges={["bottom", "top"]}
      preset="scroll"
    >
      <View style={{ marginTop: 20, marginBottom: 32 }}>
        <Text
          preset="subheading"
          text="Sign Up"
          size="lg"
          style={{ color: colors.text, textAlign: "center" }}
        />
        <Text
          text="Let’s get started with your account"
          size="sm"
          style={{ color: "#667085", textAlign: "center" }}
        />
      </View>

      <View style={styles.inputGap}>
        <TextField
          value={firstName}
          onChangeText={(value) => setFirstName(value)}
          label="First Name"
        />
      </View>
      <View style={styles.inputGap}>
        <TextField value={surname} onChangeText={(value) => setSurname(value)} label="Surname" />
      </View>
      <View style={styles.inputGap}>
        <TextField
          value={email}
          onChangeText={(value) => setEmail(value)}
          label="Email Address"
          LabelTextProps={{ style: { color: colors.palette.primary600 } }}
        />
      </View>

      <View style={styles.inputGap}>
        {/* <Text size="xs" text="Date of Birth" style={styles.dob} />
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
        /> */}
        <DatePicker
          date={date}
          mode="date"
          format="YYYY-MM-DD"
          onDateChange={() => setDate(date)}
          style={styles.dateStyle}
        />
      </View>

      <View style={styles.inputGap}>
        <TextField
          value={authPhone}
          LeftAccessory={FlagSelector}
          onChangeText={setAuthPhone}
          label={"Phone number"}
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.inputGap}>
        <TextField
          value={password}
          onChangeText={(value) => setPassword(value)}
          autoCapitalize="none"
          autoComplete="password"
          autoCorrect={false}
          secureTextEntry={isAuthPasswordHidden}
          label="Password"
          RightAccessory={PasswordRightAccessory}
        />
      </View>

      <View style={styles.inputGap}>
        <TextField
          value={password}
          onChangeText={(value) => setPassword(value)}
          autoCapitalize="none"
          autoComplete="password"
          autoCorrect={false}
          secureTextEntry={isAuthPasswordHidden}
          label="Confirmed Password"
          RightAccessory={PasswordRightAccessory}
        />
      </View>

      <Button preset="primary" text="Proceed" style={styles.inputGap} />

      <View style={styles.checkboxContainer}>
        <Checkbox
          value={accept}
          onValueChange={setAccept}
          color={accept ? colors.palette.primary600 : undefined}
        />
        <Text
          size="xs"
          text="I accept the Close2mi terms and conditions"
          style={styles.checkboxText}
        />
      </View>

      <View style={styles.bottomTextContainer}>
        <Text size="xs" text="Already have an account?" style={{ textAlign: "center" }} />
        <Text
          size="xs"
          text="Sign In"
          style={{ fontWeight: "400", color: colors.palette.primary600, textAlign: "center" }}
        />
      </View>
    </Screen>
  )
})

const styles = StyleSheet.create({
  dob: {
    fontWeight: "500",
    color: "#344054",
  },

  checkboxText: {
    fontWeight: "500",
    color: "#344054",
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  signInText: {
    fontWeight: "400",
    color: "#667085",
  },

  bottomTextContainer: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
  },

  inputGap: {
    marginBottom: 20,
  },

  dateStyle: {
    width: 335,
    borderRadius: 16,
  },
})
