import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, Image, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { OtherHeader, Screen, SectionHeader,  } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { works } from "app/components/serviceUser/DummyData/BookingScreenData"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface PreviousWorkScreenProps extends AppStackScreenProps<"PreviousWork"> {}

export const PreviousWorkScreen: FC<PreviousWorkScreenProps> = observer(
  function PreviousWorkScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen
        style={$root}
        preset="scroll"
        contentContainerStyle={screenContentContainer}
        safeAreaEdges={["top", "bottom"]}
      >
        <OtherHeader pageTitle="Previous Work" />
        <View>
          <SectionHeader leftText="Beards" rightText="See All" />
          <View style={styles.worksContainer}>
            {works.map((work, index) => (
              <Image key={index} source={work} />
            ))}
          </View>
        </View>
        <View>
          <SectionHeader leftText="Haircut" rightText="See All" />
          <View style={styles.worksContainer}>
            {works.map((work, index) => (
              <Image key={index} source={work} />
            ))}
          </View>
        </View>
        <View>
          <SectionHeader leftText="Makeup" rightText="See All" />
          <View style={styles.worksContainer}>
            {works.map((work, index) => (
              <Image key={index} source={work} />
            ))}
          </View>
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}

const styles = StyleSheet.create({
  worksContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
})
