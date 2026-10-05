import { Box, Typography, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";
import ButtonLinks from "./ButtonLinks/ButtonLInks";
import { invitation } from "../config/invitation";

const InfoEvent = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const textSx = {
    fontFamily: "'Catchy', serif",
    fontSize: { xs: "1.1rem", md: "1.5rem" },
    color: "#24777D",
    lineHeight: 1.6,
  };

  return (
    <Box component="section" id="fiesta" ref={ref} sx={{ py: 8, px: 3, backgroundColor: "#fff", textAlign: "center" }}>
      <Fade in={inView} timeout={800}>
        <Box sx={{ maxWidth: 720, mx: "auto" }}>
          <Box component="img" src="/assets/fiesta.gif" alt="" sx={{ width: 180, height: 180, objectFit: "contain" }} />
          <Typography component="h2" sx={{ fontFamily: "'Italian'", fontSize: { xs: "5rem", md: "4.5rem" }, color: "#24777D", mb: 2 }}>
            Fiesta
          </Typography>
          <Typography component="p" sx={{ ...textSx, fontWeight: 700 }}>
            <time dateTime={invitation.startsAt}>{invitation.dateLabel}</time>
          </Typography>
          <Typography sx={{ ...textSx, mb: 3 }}>{invitation.timeLabel}</Typography>
          <Typography sx={{ ...textSx, fontWeight: 700 }}>{invitation.venue}</Typography>
          <Typography sx={{ ...textSx, mb: 4 }}>{invitation.address}</Typography>
          <ButtonLinks label="Cómo llegar" href={invitation.mapsUrl} newTab />
        </Box>
      </Fade>
    </Box>
  );
};

export default InfoEvent;
