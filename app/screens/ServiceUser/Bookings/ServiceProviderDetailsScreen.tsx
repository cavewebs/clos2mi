import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet, Image } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  HorizontalTabs,
  Icon,
  OtherHeader,
  PopularSeraches,
  Reviews,
  Screen,
  SectionHeader,
  ServiceProviderCard,
  Services,
  Text,
} from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { inspiredTabs, popularSearch, services } from "app/components/serviceUser/DummyData/HomeScreenData"
import { works } from "app/components/serviceUser/DummyData/BookingScreenData"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

const image = require("../../../../assets/images/theNext.png")
interface ServiceProviderDetailsScreenProps extends AppStackScreenProps<"ServiceProviderDetails"> {}

export const ServiceProviderDetailsScreen: FC<ServiceProviderDetailsScreenProps> = observer(
  function ServiceProviderDetailsScreen() {
    // Pull in one of our MST stores
    // const { someStore, anotherStore } = useStores()

    // Pull in navigation via hook
    // const navigation = useNavigation()
    return (
      <Screen
        style={$root}
        preset="scroll"
        // contentContainerStyle={screenContentContainer}
        // safeAreaEdges={["top", "bottom"]}
      >
        <OtherHeader pageTitle="Provider Details" />
        <ServiceProviderCard
          image={image}
          location="25 Montgomery Road, Yaba"
          views="5123"
          rating="4.5"
          name="The Next Barbing Salon"
        />
        <View style={styles.headContainer}>
          <Text text="The Next Barbing Salon" size="lg" weight="semiBold" />
          <View>
            <Icon icon="callPhone" size={16} />
          </View>
        </View>
        <HorizontalTabs tabs={inspiredTabs} />
        <View>
          <SectionHeader leftText="Services Offered" rightText="See All" />
          <View style={styles.serviceContainer}>
            {services.map((service) => (
              <Services key={service.text} icon={service.icon} text={service.text} />
            ))}
          </View>
        </View>
        <View>
          <SectionHeader leftText="Offers Services" />
          <View style={styles.popularSearchContainer}>
        {
          popularSearch.map((popular, index)=>(
            <PopularSeraches text={popular.text} key={index}/>
          ))
        }
         </View>
        </View>
        <View>
          <SectionHeader leftText="Service Location" />
          <View style={styles.popularSearchContainer}>
        {
          popularSearch.map((popular, index)=>(
            <PopularSeraches text={popular.text} key={index}/>
          ))
        }
         </View>
        </View>
        <View>
          <SectionHeader leftText="Previous Work" rightText="See All" />
          <View style={styles.popularSearchContainer}>
           {works.map((work, index)=>(
            <Image key={index} source={work}/>
           ))}
           
          </View>
        </View>

        <View>
          <SectionHeader leftText="Ratings and Reviews" />

        </View>
        <View>
          <Reviews />
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
const styles = StyleSheet.create({
  headContainer:{
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  popularSearchContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },
  serviceContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
})
