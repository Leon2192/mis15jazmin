import { Box } from "@mui/material";
import { invitation } from "../config/invitation";

const Thanks = () => (
  <Box component="footer" sx={{ display: "flex", justifyContent: "center", width: "100%", m: 0, p: 0, backgroundColor: "#ECF6F5" }}>
    <Box
      component="img"
      src="/assets/galeria/gracias.jpeg"
      alt={"Gracias por acompañarme en este momento tan especial. " + invitation.name}
      width={1330}
      height={1182}
      loading="lazy"
      decoding="async"
      sx={{ display: "block", width: "100%", maxWidth: 960, height: "auto" }}
    />
  </Box>
);

export default Thanks;
