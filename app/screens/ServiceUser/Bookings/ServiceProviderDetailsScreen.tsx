import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet, Image } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import {
  HeaderWithBackButton,
  HorizontalTabs,
  Icon,
  OtherHeader,
  PopularSearches,
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
import { colors } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

const image = require("../../../../assets/images/theNext.png")
interface ServiceProviderDetailsScreenProps extends AppStackScreenProps<"ServiceProviderDetails"> { }

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
        contentContainerStyle={screenContentContainer}
        safeAreaEdges={["bottom"]}
      >
        <HeaderWithBackButton title="Provider Details" />
        <ServiceProviderCard
          image={image}
          location="25 Montgomery Road, Yaba"
          views="5123"
          rating="4.5"
          name="The Next Barbing Salon"
        />
        <View style={styles.headContainer}>
          <Text text="The Next Barbing Salon" size="lg" weight="semiBold" />
          <View style={{ width: 40, height: 40, backgroundColor: colors.palette.neutral200, borderRadius: 100, alignContent: "center", justifyContent: "center", alignItems: "center" }}>
            <Icon icon="callPhone" size={20} style={{ alignContent: "center", justifyContent: "center", alignItems: "center" }} />
          </View>
        </View>
        <Text text="The best saloon to get a professional haircut with the best prices and facilities in Camden" style={styles.providerDescription} />
        <HorizontalTabs tabs={inspiredTabs} />
        <View>
          <SectionHeader leftText="Services Offered" leftTextStyle={{ fontSize: 20 }} rightText="See All" />
          <View style={styles.serviceContainer}>
            {services.map((service) => (
              <Services key={service.text} icon={service.icon} text={service.text} />
            ))}
          </View>
        </View>
        <View>
          <SectionHeader leftText="Offers Services For" />
          <View style={styles.popularSearchContainer}>
                <PopularSearches text={"Male"} key={"male"} textFontWeight="semiBold" textStyle={styles.servicesLabelText} />
                <PopularSearches text={"Female"} textFontWeight="semiBold" key={"female"}  textStyle={styles.servicesLabelText} />
          </View>
        </View>
        <View>
          <SectionHeader leftText="Service Location" />
          <View style={styles.popularSearchContainer}>
          <PopularSearches text={"Salon"} key={"Salon"} textFontWeight="semiBold" textStyle={styles.servicesLabelText} />
                <PopularSearches text={"Home service"} textFontWeight="semiBold" key={"HomeService"}  textStyle={styles.servicesLabelText} />
          </View>
        </View>
        <View>
          <SectionHeader leftText="Previous Work" rightText="See All" />
          <View style={styles.popularSearchContainer}>
            {works.map((work, index) => (
              <Image key={index} source={work} style={{width: 100, height: 100, marginHorizontal: 5}} />
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
  headContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30
  },
  servicesLabelText: {  color: "#2895FE", fontSize: 16},
  popularSearchContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10
  },
  providerDescription: {
    marginVertical: 10
  },
  serviceContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
})
