import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  appearance: {
    colorsLight: {
      primary: '#2f2f2c',
      background: '#f7f6f3',
    },
    colorsDark: {
      primary: '#ece9e4',
      background: '#1f1f1d',
    },
    fonts: {
      header: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, "Noto Sans KR", sans-serif',
      ui: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, "Noto Sans KR", sans-serif',
    },
  },
}
