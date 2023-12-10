import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { BookingCard, HeaderWithBackButton, HorizontalTabs, OtherHeader, Screen, Search, SectionHeader, Services } from "app/components"
// import { screenContentContainer } from "app/styles/mainStyles"
import { spacing } from "app/theme"
import {
  bookingSearchResultData,
  inspiredTabs,
  services,
} from "app/components/serviceUser/DummyData/HomeScreenData"
import { screenContentContainer } from "app/styles/mainStyles"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface InspiredByClose2MiScreenProps extends AppStackScreenProps<"InspiredByClose2Mi"> {}

export const InspiredByClose2MiScreen: FC<InspiredByClose2MiScreenProps> = observer(
  function InspiredByClose2MiScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    const navigation = useNavigation()
    return (
      <Screen preset="scroll" safeAreaEdges={["bottom"]} contentContainerStyle={screenContentContainer}>
        <HeaderWithBackButton title="Inspired by Close2mi" />
        <Search />
        <HorizontalTabs tabs={inspiredTabs} />
        <View style={styles.serviceContainer}>
          {services.map((service) => (
            <Services key={service.serviceName} icon={service.icon} text={service.serviceName} onPress={() => { navigation.navigate("Services", { params: service }) }} />
          ))}
        </View>

        <View>
          <SectionHeader leftText="Near You" />
          <View style={styles.container}>
            {bookingSearchResultData.map((results, index) => (
              <BookingCard
                image={results.image}
                key={index}
                textTopLeft={results.textTopLeft}
                midIconLeft={results.midLeftIcon}
                midTextLeft={results.midTextLeft}
                midTextRight={results.midTextRight}
                rating={results.rating}
                bottomIconLeft={results.bottomIconLeft}
                bottomTextLeft={results.bottomTextLeft}
                bottomIconRight={results.bottomIconRight}
                bottomTextRight={results.bottomTextRight}
                navigate={()=>navigation.navigate()}
              />
            ))}
          </View>
        </View>
      </Screen>
    )
  },
)


const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
  },
  serviceContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
})
