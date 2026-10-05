import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { invitation } from "../config/invitation";

const Thanks = () => (
  <Box component="footer" sx={{ py: 10, px: 3, textAlign: "center", color: "#24777D", background: "linear-gradient(180deg, #fff, #D8ECEB)" }}>
    <Typography sx={{ maxWidth: 650, mx: "auto", fontFamily: "'Catchy'", fontSize: { xs: "1.4rem", md: "1.8rem" }, lineHeight: 1.7 }}>
      Gracias por acompañarme en este momento tan especial.
    </Typography>
    <FavoriteIcon sx={{ my: 3, fontSize: 24 }} />
    <Typography sx={{ fontFamily: "'Italian'", fontSize: { xs: "5rem", md: "6rem" }, lineHeight: 1.2 }}>
      {invitation.name}
    </Typography>
  </Box>
);

export default Thanks;
