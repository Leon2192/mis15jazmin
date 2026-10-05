import { Box, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { invitation } from "../../config/invitation";

const Hero = () => {
  return (
    <Box component="header" sx={{ position: "relative", display: "flex", justifyContent: "center", width: "100%", m: 0, p: 0, background: "linear-gradient(90deg, #D8ECEB, #fff 35%, #fff 65%, #D8ECEB)", overflow: "hidden" }}>
      <Box component="h1" sx={{ position: "absolute", width: "1px", height: "1px", p: 0, m: -1, overflow: "hidden", clipPath: "inset(50%)", whiteSpace: "nowrap" }}>
        Mis 15 {invitation.name}
      </Box>
      <Box component="img" src={invitation.cover} alt={"Invitación a Mis 15 de " + invitation.name} width={899} height={1599} fetchPriority="high" sx={{ width: "100%", maxWidth: "calc(100svh * 899 / 1599)", height: "auto", display: "block" }} />
      <IconButton component="a" href="#info" aria-label="Ver la invitación" sx={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", color: "#24777D", backgroundColor: "rgba(255,255,255,0.8)", "&:hover": { backgroundColor: "#fff" } }}>
        <KeyboardArrowDownIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default Hero;
