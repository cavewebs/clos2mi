import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { BookingCard, HorizontalTabs, OtherHeader, PopularSeraches, Screen, Search, SectionHeader } from "app/components"
// import { screenContentContainer } from "app/styles/mainStyles"
import { bookingSearchResultData, inspiredTabs, popularSearch } from "app/components/serviceUser/DummyData/HomeScreenData"
import { spacing } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface PopularInYourAreaScreenProps extends AppStackScreenProps<"PopularInYourArea"> {}

export const PopularInYourAreaScreen: FC<PopularInYourAreaScreenProps> = observer(function PopularInYourAreaScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <Screen style={$root} preset="scroll" >
      <OtherHeader pageTitle="Popular in your area" />
      <Search />
      <HorizontalTabs tabs={inspiredTabs}/>

      <View style={styles.popularSearchContainer}>
        {
          popularSearch.map((popular, index)=>(
            <PopularSeraches text={popular.text} key={index}/>
          ))
        }
         </View>

      <View>
        <SectionHeader leftText="1000+ results"/>
        <View style={styles.bookingContainer}>
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
              />
            ))}
          </View>
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  paddingVertical: spacing.xl,
  paddingHorizontal: spacing.lg,
  flex: 1,
}

const styles = StyleSheet.create({
  bookingContainer:{
    marginBottom: 40
  },
  popularSearchContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
})
