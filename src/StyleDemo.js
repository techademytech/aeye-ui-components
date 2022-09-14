import React from "react";
import Styles from "./lib/components/Styles";
import Box from "./lib/components/Box";

const { useTheme } = Styles(); /**return material styles object  */

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
