import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, StyleSheet } from "react-native"
import { AppStackScreenProps } from "app/navigators"
import { Icon, OtherHeader, Screen, ServicesCard, Text } from "app/components"
import { screenContentContainer } from "app/styles/mainStyles"
import { colors, typography } from "app/theme"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "app/models"

interface ServicesScreenProps extends AppStackScreenProps<"Services"> {}

export const ServicesScreen: FC<ServicesScreenProps> = observer(function ServicesScreen() {
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
      <OtherHeader pageTitle="Services" />
      <View style={styles.serviceStyle}>
        <Text style={styles.textStyle} text={"Hair"} size="lg" weight="semiBold" />
        <Icon icon={"hair"} size={56} />
      </View>
      <View>
        <ServicesCard />
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}

const styles = StyleSheet.create({
  serviceStyle: {
    alignItems: "center",
    backgroundColor: colors.palette.primary600,
    borderRadius: 14,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    height: 80,
    justifyContent: "space-between",
    marginBottom: 15,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  textStyle: {
    color: colors.palette.primary50,
    fontFamily: typography.primary.normal,
  },
})
