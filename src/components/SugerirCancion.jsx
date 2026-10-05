import { Box, Typography, Button, Fade } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { useInView } from "react-intersection-observer";

const SuggestSong = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "40vh",
        py: 8,
        px: 2,
        backgroundColor: "#D8ECEB", 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Fade in={inView} timeout={1000}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Icono con animación tipo "latido" */}
          <Box
  component="img"
  src="/assets/sugerencia.gif"
  alt=""
  sx={{
    width: 125,       // equivalente a fontSize: 100
    height: 125,
    mb: 1
  }}
/>

          <Typography
            variant="h4"
            sx={{
            
                fontFamily: "'Catchy'",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                color: "#24777D",
                mb: 1,
            }}
          >
            ¿Que canciones no pueden faltar?
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Catchy'",
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                color: "#24777D",
                mb: 4
            }}
          >
            ¡Ayudame sugiriendo las canciones que pensás que no pueden faltar en la fiesta!
          </Typography>

         <Button
  component="a"
  href="https://docs.google.com/forms/d/e/1FAIpQLSf5DeFbqRMFtkzF-fy4rM6seEyDVme6bzIfeOsOPMlVds2Z9w/viewform"
  target="_blank"
  rel="noopener noreferrer"
  variant="contained"
  sx={{
    borderRadius: 999,
    px: 4,
    backgroundColor: "#24777D",
    fontFamily: "'Catchy'",
    color: "#ffffff",
    boxShadow: "none",
    animation: "bounceBtn 2s infinite", 
    transition: "all 0.3s ease", 
    "@keyframes bounceBtn": {
      "0%, 20%, 50%, 80%, 100%": {
        transform: "translateY(0)",
      },
      "40%": {
        transform: "translateY(-6px)",
      },
      "60%": {
        transform: "translateY(-3px)",
      },
    },
    "&:hover": {
      backgroundColor: "#fff",
      color: "#24777D",
      transform: "scale(1.05)", // efecto de agrandar en hover
    },
  }}
>
  Sugerir canción
</Button>

        </Box>
      </Fade>
    </Box>
  );
};

export default SuggestSong;
