import { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import "./App.css";

import Hero from "./components/Hero/HeroPremium";
import Countdown from "./components/CountDown/CountDownPremium";
import InfoEvent from "./components/InfoEvent";
import Gallery from "./components/Gallery/Gallery";
import Gift from "./components/Gift";
import Confirm from "./components/Confirm";
import Dresscode from "./components/Dresscode";
import SuggestSong from "./components/SugerirCancion";
import Qr from "./components/QR";
import Thanks from "./components/Thanks";


function Loader() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 2,
        background: "#ffffff",
        color: "#fff",
      }}
    >
      <Box
        component="img"
        src="/images/logo2.jpeg"
        alt="Logo"
        sx={{
          width: 175,
          height: "auto",
          mb: 2,
        }}
      />

      <CircularProgress sx={{ color: "#24777D", }} />
      {/* Texto */}
      <Typography sx={{ fontFamily: "'Prata', serif", color: "#24777D", }}>Cargando…</Typography>
    </Box>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Hero />
      <Countdown />
      <InfoEvent />
      <Gallery />
      <Qr />
      <Gift />
      <Confirm />
      <Dresscode />
      <SuggestSong />
      <Thanks />
    </>
  );
}

export default App;
