//theme
import { DefaultTheme } from "react-native-paper"
import { colors } from "../utils/color"

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.secondary,
    surface: colors.surface,
    error: colors.error,
    text: colors.textPrimary,
    disabled: colors.disabled,
    placeholder: colors.placeholder,
    backdrop: colors.divider,
    gradient: colors.gradient,
  },
};