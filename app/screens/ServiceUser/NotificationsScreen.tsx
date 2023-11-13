import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { Image, StyleSheet, View } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Button, Icon, Modals, Screen, Text } from "app/components"
import { useNavigation } from "@react-navigation/native"
import { AddAddressScreen } from "./AddAddressScreen"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

const NotificationImage = require("../../../assets/images/notification-bro.png")

interface NotificationsScreenProps extends AppStackScreenProps<"Notifications"> {}

export const NotificationsScreen: FC<NotificationsScreenProps> = observer(
  function NotificationsScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    const [showModal, setShowModal] = React.useState(false)

    // Pull in navigation via hook
    const navigation = useNavigation()
    return (
      <Screen preset="fixed">
        <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Icon icon="x" style={styles.icon} />
        </View>
        <View style={styles.imageContainer}>
          <Image source={NotificationImage} style={styles.image} />
        </View>
        <View>
        <Text style={styles.title}>Enable Notifications</Text>
        <Text style={styles.notificationBodyText}>
          Close2mi would like to send you Notifications to keep you up to date on your bookings
        </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={() => setShowModal(true)}>
            <Text style={styles.buttonText}>Turn on Notifications</Text>
          </Button>
        </View>
        <Modals
          showModal={showModal}
          setShowModal={setShowModal}
          modalTitle={"Notifications"}
          modalBody={
            "Close2mi would like to send you notifications to keep you up to date on your bookings"
          }
          navigate={() => navigation.navigate("AddAddress")}
          modalCancelButtonText={"Don't Allow"}
          modalAcceptButtonText={"Allow"}
        />
        </View>
        
      </Screen>
    )
  },
)

const styles = StyleSheet.create({
  iconContainer: {
    alignSelf: "flex-end",
    marginBottom: 8,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  icon: {
    // Adjust icon styles
  },
  image: {
    margin: 10,
  },
  notificationBodyText: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  container: {
    display: "flex",
    paddingHorizontal: 16,
    paddingTop: 16,
    height: "100%",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 24,
    lineHeight: 38,
    marginBottom: 8,
    color: "#1F2937",
    fontWeight: "900",
    textAlign: "center",
  },

  button: {
    borderRadius: 27.2,
    backgroundColor: "#2895FE",
    width: "95%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderColor: "#2895FE",
    marginBottom: 10
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#F5F5FF",
    textAlign: "center",
  },
});


