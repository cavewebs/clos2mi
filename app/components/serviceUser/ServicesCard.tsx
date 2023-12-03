/* eslint-disable react-native/no-color-literals */
import * as React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors } from "app/theme"
import { Text } from "app/components/Text"
import { Icon } from "../Icon"
import { Button } from "../Button"

export interface ServicesCardProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const ServicesCard = observer(function ServicesCard(props: ServicesCardProps) {
  const { style } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <View style={styles.containerStyle}>
        <Text text="Hair Cut" size="md" weight="light" />
        <View style={styles.container}>
          <Icon icon="hourglass" size={12} />
          <Text text="30 minutes" size="sm" weight="medium" style={styles.textColor} />
        </View>
      </View>
      <View style={styles.containerStyle}>
        <View style={styles.container}>
          <Icon icon="pound" size={14} />
          <Text text="500" size="lg" weight="light" />
        </View>
        <Button
          text="Book"
          style={styles.button}
          textStyle={styles.buttonText}
          pressedStyle={styles.pressedButton}
          pressedTextStyle={styles.pressedButtonText}
        />
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.palette.primary600,
    borderColor: colors.palette.primary600,
    borderRadius: 24,
    paddingVertical: 4,
    width: 93,
  },
  buttonText: {
    color: "#F5F5FF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  container: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  containerStyle: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  pressedButton: {
    backgroundColor: "#F5F5FF",
  },
  pressedButtonText: {
    color: colors.palette.primary600,
  },

  textColor: {
    color: colors.palette.primary600,
  },
})
