import { Box, Typography, Grid, Slide, Fade } from "@mui/material";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { invitation } from "../../config/invitation";

const targetDate = new Date(invitation.startsAt);


const getTimeLeft = () => {
  const now = new Date();
  const difference = targetDate - now;

  const totalSeconds = Math.max(0, Math.floor(difference / 1000));
  const dias = Math.floor(totalSeconds / (3600 * 24));
  const horas = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutos = Math.floor((totalSeconds % 3600) / 60);
  const segundos = totalSeconds % 60;

  return { dias, horas, minutos, segundos };
};


const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const unidades = Object.entries(timeLeft);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      id="info"
      sx={{
        minHeight: "30vh",
        py: 6,
        backgroundColor: "#D8ECEB",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
        <Box
  component="img"
  src="/assets/regresiva.gif"
  alt=""
  sx={{
    width: 125,       // equivalente a fontSize: 100
    height: 125,
 
  }}
/>

      <Slide in={inView} direction="up" timeout={800}>
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "5rem", md: "4rem" },
              fontFamily: "'Italian'",
              fontWeight: 500,
              mb: 1,
              color: "#24777D",
            }}
          >
            Faltan...
          </Typography>
        </Box>
      </Slide>

      <Fade in={inView} timeout={1200}>
        <Grid container spacing={4} justifyContent="center">
          {unidades.map(([unit, value]) => (
            <Grid key={unit}>
              <Box textAlign="center">
                <Typography
                  sx={{
                    fontSize: { xs: "2rem", md: "4rem" },
                    fontWeight: "bold",
                    color: "#24777D",
                    fontFamily: "'Catchy'",
                  }}
                >
                  {String(value).padStart(2, "0")}
                </Typography>
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    fontFamily: "'Catchy'",
                    color: "#555",
                  }}
                >
                  {unit}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Fade>
    </Box>
  );
};

export default Countdown;
