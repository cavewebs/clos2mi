import * as React from "react"
import { ComponentType } from "react"
import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native"

export type IconTypes = keyof typeof iconRegistry

interface IconProps extends TouchableOpacityProps {
  /**
   * The name of the icon
   */
  icon: IconTypes

  /**
   * An optional tint color for the icon
   */
  color?: string

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps["onPress"]
}

/**
 * A component to render a registered icon.
 * It is wrapped in a <TouchableOpacity /> if `onPress` is provided, otherwise a <View />.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Icon.md)
 */
export function Icon(props: IconProps) {
  const {
    icon,
    color,
    size,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    ...WrapperProps
  } = props

  const isPressable = !!WrapperProps.onPress
  const Wrapper: ComponentType<TouchableOpacityProps> = WrapperProps?.onPress
    ? TouchableOpacity
    : View

  return (
    <Wrapper
      accessibilityRole={isPressable ? "imagebutton" : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}
    >
      <Image
        style={[
          $imageStyle,
          color && { tintColor: color },
          size && { width: size, height: size },
          $imageStyleOverride,
        ]}
        source={iconRegistry[icon]}
      />
    </Wrapper>
  )
}

export const iconRegistry = {
  back: require("../../assets/icons/back.png"),
  bell: require("../../assets/icons/bell.png"),
  caretLeft: require("../../assets/icons/caretLeft.png"),
  caretRight: require("../../assets/icons/caretRight.png"),
  caretDown: require("../../assets/icons/caretDown.png"),
  check: require("../../assets/icons/check.png"),
  clap: require("../../assets/icons/clap.png"),
  community: require("../../assets/icons/community.png"),
  components: require("../../assets/icons/components.png"),
  debug: require("../../assets/icons/debug.png"),
  github: require("../../assets/icons/github.png"),
  heart: require("../../assets/icons/heart.png"),
  hidden: require("../../assets/icons/hidden.png"),
  ladybug: require("../../assets/icons/ladybug.png"),
  lock: require("../../assets/icons/lock.png"),
  menu: require("../../assets/icons/menu.png"),
  more: require("../../assets/icons/more.png"),
  pin: require("../../assets/icons/pin.png"),
  podcast: require("../../assets/icons/podcast.png"),
  settings: require("../../assets/icons/settings.png"),
  slack: require("../../assets/icons/slack.png"),
  view: require("../../assets/icons/view.png"),
  x: require("../../assets/icons/x.png"),
  briefcase: require("../../assets/icons/Briefcase.png"),
  userAdd: require("../../assets/icons/userAdd.png"),
  serviceProvider: require("../../assets/icons/serviceProvider.png"),
  userImage: require("../../assets/icons/userImage.png"),
  Home: require("../../assets/icons/Home.png"),
  market: require("../../assets/icons/market.png"),
  Calendar: require("../../assets/icons/Calendar.png"),
  Scissors: require("../../assets/icons/Scissors.png"),
  arrowDown : require("../../assets/icons/arrow-drop-down.png"),
  beard : require("../../assets/icons/beard.png"),
  clock : require("../../assets/icons/clock.png"),
  eyelashes : require("../../assets/icons/eyelashes.png"),
  makeup : require("../../assets/icons/foundation-makeup.png"),
  highFive : require("../../assets/icons/highFive.png"),
  hourglass : require("../../assets/icons/hourglass.png"),
  location : require("../../assets/icons/location.png"),
  hair : require("../../assets/icons/mingcute_hair.png"),
  notification : require("../../assets/icons/notification-bell.png"),
  search : require("../../assets/icons/search.png"),
  solarMap : require("../../assets/icons/solar_map-linear.png"),
  starFill : require("../../assets/icons/star-fill.png"),
  locationAlt : require("../../assets/icons/locationWhite.png"),
  arrowBack: require("../../assets/icons/ArrowLeft.png"),
  editPencil: require("../../assets/icons/editPencil.png"),
  close: require("../../assets/icons/close.png"),
  calendarBlue: require("../../assets/icons/CalendarBlue.png"),
  hourglassAlt: require("../../assets/icons/hourglassAlt.png"),
  chevronRight: require("../../assets/icons/chevronRight.png"),
  add: require("../../assets/icons/add.png"),
  menuDots: require("../../assets/icons/menuDots.png"),
  pound: require("../../assets/icons/pound.png"),
  callPhone: require("../../assets/icons/callPhone.png"),
  remove: require("../../assets/icons/remove.png"),
}

const $imageStyle: ImageStyle = {
  resizeMode: "contain",
}
