import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px" padding={2}>
      <Typography
        variant="h2"
        color={colors.grey[00]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h4" color={colors.greenAccent[500]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;