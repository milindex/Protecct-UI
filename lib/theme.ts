"use client";
import { Container, createTheme, MantineColorsTuple, rem } from "@mantine/core";

const tomato: MantineColorsTuple = [
  "#ffebea",
  "#fcd5d2",
  "#f7a8a3",
  "#f37870",
  "#f05044",
  "#ee3729",
  "#ee2a1b",
  "#d41d10",
  "#bd160c",
  "#a50907"
];

const CONTAINER_SIZES: Record<string, string> = {
  max: rem(1140),
};

const theme = createTheme({
  primaryColor: 'tomato',
  colors: {
    tomato,
  },
  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          '--container-size': fluid
            ? '100%'
            : size !== undefined && size in CONTAINER_SIZES
              ? CONTAINER_SIZES[size]
              : rem(size),
        },
      }),
    }),
  },
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
});

export default theme;