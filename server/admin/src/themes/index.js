import colors from "./colors";
import fontWeights from "./fontWeights";
import sizes from "./sizes";
import table from "./table";

const theme = {
  main: {
    colors,
    fontWeights,
    sizes,
  },
  table: {
    ...table,
  },
};

export default theme;
