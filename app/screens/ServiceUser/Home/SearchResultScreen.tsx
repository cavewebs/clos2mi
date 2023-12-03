import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle, StyleSheet } from "react-native"
import { AppStackScreenProps,  } from "app/navigators"
import { BookingCard, OtherHeader, Screen, Search, SectionHeader } from "app/components"
// import { screenContentContainer } from "app/styles/mainStyles"
import { bookingSearchResultData } from "app/components/serviceUser/DummyData/HomeScreenData"
import { spacing } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface SearchResultScreenProps extends AppStackScreenProps<"SearchResult"> {}

export const SearchResultScreen: FC<SearchResultScreenProps> = observer(
  function SearchResultScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen style={$root} preset="scroll">
        <OtherHeader pageTitle="Search Results" />
        <Search />
        <View>
          <SectionHeader leftText="1000+ results" />
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
              />
            ))}
          </View>
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  paddingVertical: spacing.xl,
  paddingHorizontal: spacing.lg,
  flex: 1,
}

const styles = StyleSheet.create({
  container:{
    marginBottom: 40
  }
})