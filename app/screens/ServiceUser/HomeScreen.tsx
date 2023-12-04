import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, StyleSheet, ScrollView } from "react-native"
import { View, ViewStyle, StyleSheet, ScrollView } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  BookingCard,
  MainHeader,
  RecentSearchCard,
  Screen,
  Search,
  SectionHeader,
  ServiceProviderCard,
  Services,
} from "app/components"
// import { screenContentContainer } from "app/styles/mainStyles"
import { colors, spacing } from "app/theme"
import { bookingData, recentSearch, serviceProvider, services } from "app/components/serviceUser/DummyData/HomeScreenData"
import { useNavigation } from "@react-navigation/native"
import {
  BookingCard,
  MainHeader,
  RecentSearchCard,
  Screen,
  Search,
  SectionHeader,
  ServiceProviderCard,
  Services,
} from "app/components"
// import { screenContentContainer } from "app/styles/mainStyles"
import { colors, spacing } from "app/theme"
import { bookingData, recentSearch, serviceProvider, services } from "app/components/serviceUser/DummyData/HomeScreenData"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface HomeScreenProps extends AppStackScreenProps<"ServiceUserHome"> { }

export const ServiceUserHomeScreen: FC<HomeScreenProps> = observer(function HomeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const changeAddress = () => {
    navigation.navigate("SavedAddress")
  }
  const showMap = () => {
    navigation.navigate("AddNewAddress")
  }
  const showNotifications = () => {
    navigation.navigate("AllNotifications")
  }
  return (
    <Screen style={$root} preset="scroll" safeAreaEdges={["top"]} >
      <MainHeader
        pageTitle="7 Montegomery road, UK"
        icon1="arrowDown"
        icon2="solarMap"
        icon3="notification"
        onNamePress={changeAddress}
        onNotificationPress={showNotifications}
        onMapPress={showMap}
      />
      <Search />
      <View>
        <SectionHeader leftText="Based on your recent search" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.serviceContainer}>
            {recentSearch.map((recentSearch, index) => (
              <RecentSearchCard
                key={index}
                rating={recentSearch.rating}
                name={recentSearch.name}
                views={recentSearch.views}
                image={recentSearch.image}
                id={recentSearch.id}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <View>
        <SectionHeader leftText="Upcoming Booking" />
        {bookingData.map((booking, index) => (
          <BookingCard
            key={index}
            image={booking.image}
            textTopLeft={booking.textTopLeft}
            midTextLeft={booking.midTextLeft}
            bottomIconLeft={booking.bottomIconLeft}
            bottomTextLeft={booking.bottomTextLeft}
            bottomIconRight={booking.bottomIconRight}
            bottomTextRight={booking.bottomTextRight}
            navigate={() => navigation.navigate("ViewBookings", booking)}
          />
        ))}
      </View>
      <View>
        <SectionHeader leftText="Inspired by Close2mi" rightText="See All" navigate={() => navigation.navigate("InspiredByClose2Mi")} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.serviceContainer}>
            {services.map((service) => (
              <Services key={service.text} icon={service.icon} text={service.text} navigate={() => navigation.navigate("Services")} />
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.serviceProvider}>
        <SectionHeader leftText="Popular in your Area" rightText="See All" navigate={() => navigation.navigate("PopularInYourArea")} />
        {serviceProvider.map((providers, index) => (
          <ServiceProviderCard
            key={index}
            image={providers.image}
            location={providers.location}
            views={providers.views}
            rating={providers.rating}
            name={providers.name}
            navigate={() => navigation.navigate("ServiceProviderDetails", providers)}
          />
        ))}
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  paddingHorizontal: spacing.lg,
  flex: 1,
  marginTop: 10
}

const styles = StyleSheet.create({
  TextArea: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    flexShrink: 1,
    gap: 2,
  },
  TextField: {
    alignItems: "center",
    backgroundColor: colors.palette.neutral100,
    borderColor: colors.border,
    borderRadius: 27.2,
    display: "flex",
    justifyContent: "space-between",
  },
  TextFieldContainer: {
    marginBottom: 3,
  },
  accessory: {
    marginRight: 20,
  },
  containerStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  iconContainer: {
    alignItems: "center",
    backgroundColor: colors.palette.primary50,
    borderRadius: 40,
    display: "flex",
    height: 40,
    justifyContent: "center",
    padding: 8,
    width: 40,
  },
  linkText: {
    color: colors.palette.primary600,
  },
  serviceContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    overflow: "scroll",
  },
  serviceProvider: {
    marginBottom: 40,
  },
})
