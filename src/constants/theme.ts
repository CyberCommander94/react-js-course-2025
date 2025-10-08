export const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    transparent: "transparent",

    warmBeigeLightest: "#F2E0D2",
    warmBeigeLight: "#E2B383",
    warmBeigeMedium: "#B48E68",
    warmBeigeDark: "#896B4D",
    warmBeigeDarker: "#5F4A34",
    warmBeigeDeep: "#392B1D",
    warmBeigeDarkest: "#171008",

    roseBrownLightest: "#F2E3DC",
    roseBrownLight: "#E1B59D",
    roseBrownMedium: "#BE8D6E",
    roseBrownDark: "#916B53",
    roseBrownDarker: "#664A39",
    roseBrownDeep: "#3E2C20",
    roseBrownDarkest: "#1A100A",

    neutralTaupeLightest: "#F3F0EF",
    neutralTaupeLight: "#DAD1CE",
    neutralTaupeMedium: "#BCA7A0",
    neutralTaupeDark: "#94827B",
    neutralTaupeDarker: "#6D5F5A",
    neutralTaupeDeep: "#483E3B",
    neutralTaupeDarkest: "#26201E",

    goldenBrownLightest: "#EDD8C2",
    goldenBrownLight: "#D0AE84",
    goldenBrownMedium: "#A58967",
    goldenBrownDark: "#7B664C",
    goldenBrownDarker: "#544532",
    goldenBrownDeep: "#30261B",
    goldenBrownDarkest: "#151009",

    coolGrayLightest: "#E5E3E1",
    coolGrayLight: "#BFB8B6",
    coolGrayMedium: "#989591",
    coolGrayDark: "#73706D",
    coolGrayDarker: "#504E4C",
    coolGrayDeep: "#2F2E2C",
    coolGrayDarkest: "#111110",
  },
  spacing: (factor: number) => `${factor * 4}px`,
};

export type ThemeType = typeof theme;
