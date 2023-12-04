import * as React from "react"
import { StyleProp, TextStyle, View, ViewStyle, StyleSheet } from "react-native"
import { observer } from "mobx-react-lite"
import { colors, typography } from "app/theme"
import { Text, AutoImage, Icon, ProgressBar } from "app/components"
import Mosco from "assets/images/mosco.png"

interface Review {
  isReview?: boolean
}

export interface RatingsProps extends Review {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
}

/**
 * Describe your component here
 */
export const Ratings = observer(function Ratings(props: RatingsProps) {
  const { style } = props

  return (
    <View>
      {props.isReview && (
        <Text preset="bold" text="Ratings and Reviews" style={{ marginBottom: 16 }} />
      )}
      <View style={{ marginBottom: 35 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <View style={styles.spaceItems}>
            <View style={styles.bookingIconText}>
              <Icon icon="stars" />
              <Text preset="default" text={`${i + 1}`} />
            </View>
            {/* <View style={styles.progressBar}></View> */}
            <ProgressBar progress={0.3} />
            <Text preset="default" text="20%" />
          </View>
        ))}
      </View>

      <View>
        {Array.from({ length: 3 }).map((_, i) => (
          <View style={{ flexDirection: "column", marginBottom: 25 }}>
            <View style={styles.bookingIconText}>
              <Icon icon="stars" />
              <Text text="4.5" />
            </View>
            <Text text="Velios gave my father a haircut.He was thorough with his evaluation, kind and informative" />
            <View style={styles.bookingIconText}>
              <AutoImage source={Mosco} />
              <Text preset="bold" text="Moses Sauez" />
            </View>
          </View>
        ))}
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  spaceItems: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  progressBar: {
    width: 237,
    height: 8,
    backgroundColor: colors.tint,
  },

  bookingIconText: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
})
