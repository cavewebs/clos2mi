import * as React from "react"
import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { colors } from "app/theme"
import { Text } from "app/components/Text"

export interface SectionHeaderProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  leftText?: string
  rightText?: string
  navigate?: () => void;
}

/**
 * Describe your component here
 */
export const SectionHeader = observer(function SectionHeader(props: SectionHeaderProps) {
  const { style, leftText, rightText, navigate } = props
  const $styles = [$container, style]

  return (
    <View style={$styles}>
      <View style={styles.TextHeading}>
        <Text text={leftText} weight="semiBold" size="sm" />
        <TouchableOpacity>
          <Text text={rightText} weight="semiBold" size="sm" style={styles.rightText} onPress={() => {
                navigate && navigate();
              }}/>
        </TouchableOpacity>
      </View>
    </View>
  )
})

const $container: ViewStyle = {
  justifyContent: "center",
}

const styles = StyleSheet.create({
  TextHeading: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginTop: 10,
  },
  rightText: {
    color: colors.palette.primary600,
  },
})
