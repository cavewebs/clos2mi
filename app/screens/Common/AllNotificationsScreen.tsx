import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { HeaderWithBackButton, Icon, Screen, Text } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { colors } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface AllNotificationsScreenProps extends AppStackScreenProps<"AllNotifications"> { }

export const AllNotificationsScreen: FC<AllNotificationsScreenProps> = observer(function AllNotificationsScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen preset="scroll" contentContainerStyle={screenContentContainer} safeAreaEdges={["bottom"]} >
      <HeaderWithBackButton title="Notifications" />
      <View style={styles.notificationsWrapper}>
        <Icon icon="bell" color={colors.tint} style={styles.img} />
        <View style={styles.notificationInfo}>
          <View style={styles.notificationRow}>
            <Text text="Anita Joseph" style={styles.notificationName} />
            <Text text="Cancelled your" style={styles.notificationText} />
            <Text text="Appointment" style={styles.notificationService} />
          </View>
        </View>
        <View style={styles.timeline}>
          <Text text="Yesterday, 6:25PM" />
        </View>
      </View>

    </Screen>
  )
})
const styles = StyleSheet.create({
  img: { marginRight: 16, flexDirection: "row" },
  notificationsWrapper: {
    margin: 10,
    flexDirection: "row"

  },
  notificationRow: {
    // flexDirection: "row",
    // flexWrap: "wrap"
  },
  notificationInfo: {
    marginRight: 16,
    width: "100%"
  },
  timeline: {
    flexDirection: "column",
  },
  notificationText: {
    flexDirection: "row",
  },
  notificationName: {
    flexDirection: "row",
  },
  notificationService: {
    flexDirection: "row",
  }
});
