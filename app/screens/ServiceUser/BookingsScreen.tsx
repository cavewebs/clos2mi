import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, TouchableOpacity } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  BookingCard,
  Header,
  HorizontalTabs,
  MainHeader,
  Screen,
  Search,
  SectionHeader,
} from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import {
  UpcomingBookingData,
  bookingTabs,
} from "app/components/serviceUser/DummyData/BookingScreenData"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface BookingsScreenProps extends AppStackScreenProps<"ServiceUserBookings"> {}

export const ServiceUserBookingsScreen: FC<BookingsScreenProps> = observer(
  function BookingsScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()
    return (
      <Screen style={$root} preset="scroll" contentContainerStyle={screenContentContainer}>
        <Header titleMode="flex" titleContainerStyle={{alignItems: "flex-start"}} title="Bookings" rightIcon="notification" />
        <Search />
        <HorizontalTabs tabs={bookingTabs} />
        <View>
          <SectionHeader leftText="Upcoming Bookings" />
        </View>
        {UpcomingBookingData.map((data, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate("ViewBookings", data)}
          >
            <BookingCard
              image={data.image}
              textTopLeft={data.textTopLeft}
              midTextLeft={data.midTextLeft}
              midIconRight={data.midIconRight}
              midTextRight={data.midTextRight}
              bottomIconLeft={data.bottomIconLeft}
              bottomTextLeft={data.bottomTextLeft}
              bottomIconRight={data.bottomIconRight}
              bottomTextRight={data.bottomTextRight}
            />
          </TouchableOpacity>
        ))}
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
