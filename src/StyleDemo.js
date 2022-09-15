import React from "react";
import { useTheme } from "./lib/components/Styles";
import Box from "./lib/components/Box";

function StyleDemo() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        color: theme.palette.primary.dark,
      }}
    >
      Hello world
    </Box>
  );
}

export default StyleDemo;
