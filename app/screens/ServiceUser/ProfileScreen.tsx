import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Header, Icon, MainHeader, ProfileContent, Screen, SectionHeader, Text } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "app/models"

interface ProfileScreenProps extends AppStackScreenProps<"ServiceUserProfile"> { }

export const ServiceUserProfileScreen: FC<ProfileScreenProps> = observer(function ProfileScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  const { onboardingStore: { setHasCompletedOnboarding }, } = useStores()

  const {
    authenticationStore: { logout },
  } = useStores()
  const doLogout = () => {
    //TODO: uncomment this if you want to test onboarding screens
    // setHasCompletedOnboarding(false) 
    logout()
  }
  return (
    <Screen style={$root} preset="scroll" contentContainerStyle={screenContentContainer}>
      <Header leftIcon="notification" title="Profile" rightIcon="editPencil" />

      <View style={styles.topContainer}>
        <Icon icon="userImage" size={48} />
        <View>
          <Text text="Clean Kutz" weight="semiBold" size="lg" />
          <Text text="anitajoseph@gmail.com" weight="light" size="sm" />
        </View>
      </View>
      <View style={styles.topContainer}>
        <Icon icon="location" size={16} />
        <Text text="24 Montgomery Road, New Yotk" />
      </View>
      <View>
        <SectionHeader leftText="Personal Details" />
        <ProfileContent leftText="Mobile Number" rightText="09096631152" />
        <ProfileContent leftText="Gender" rightText="Female" />
        <ProfileContent leftText="Addresses" rightIcon="chevronRight" />
      </View>
      <View>
        <SectionHeader leftText="Payment" />
        <ProfileContent leftText="Saved Cards" rightIcon="chevronRight" />
      </View>
      <View>
        <SectionHeader leftText="Support" />
        <ProfileContent leftText="Close2mi Support" rightIcon="chevronRight" />
        <ProfileContent leftText="Enable Notifications" />
      </View>
      <View>
        <SectionHeader leftText="Policy" />
        <ProfileContent leftText="Terms and Conditions" rightIcon="chevronRight" />
        <ProfileContent leftText="Privacy Policy" rightIcon="chevronRight" />
      </View>
      <View>
        <SectionHeader leftText="Security" />
        <ProfileContent leftText="Change Password" rightIcon="chevronRight" />
        <ProfileContent leftText="Sign Out" rightIcon="chevronRight" onPress={() => { doLogout() }} />
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const styles = StyleSheet.create({
  topContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 10,
  },
})
