import type { Preview } from "@storybook/react";
import "../app/globals.css";
import { tokens } from "../design-system/tokens";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: tokens.colors.background,
        },
        {
          name: "dark",
          value: "#0F172A",
        },
      ],
    },
  },
};

export default preview;