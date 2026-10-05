import { Box, Typography, Fade, Divider, Button } from "@mui/material";
import { useInView } from "react-intersection-observer";

const QrButton = ({
  label,
  href,
  onClick,
  newTab = false,
  sx,
  bounce = true,
}) => {
  const baseSx = {
    borderRadius: 999,
    px: 4,
    backgroundColor: "#24777D",
    fontFamily: "'Catchy'",
    color: "#ffffff",
    boxShadow: "none",
    transition: "all 0.3s ease",
    ...(bounce && { animation: "bounceBtn 2s infinite" }),
    "@keyframes bounceBtn": {
      "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
      "40%": { transform: "translateY(-6px)" },
      "60%": { transform: "translateY(-3px)" },
    },
    "&:hover": {
      backgroundColor: "#fff",
      color: "#24777D",
      transform: "scale(1.05)",
    },
  };

  return (
    <Button
      {...(href
        ? {
            component: "a",
            href,
            target: newTab ? "_blank" : undefined,
            rel: newTab ? "noopener noreferrer" : undefined,
            style: { textDecoration: "none" },
          }
        : {})}
      onClick={onClick}
      variant="contained"
      sx={[baseSx, sx]}
    >
      {label}
    </Button>
  );
};

const Qr = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "30vh",
        py: 8,
        px: 2,
        backgroundColor: "#ECF6F5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Fade in={inView} timeout={800}>
        <Box
          sx={{
            transform: inView ? "scale(1)" : "scale(0.95)",
            transition: "transform 0.6s ease-out",
          }}
        >
          {/* Imagen centrada */}
          <Box display="flex" justifyContent="center" mb={2}>
            <Box
              component="img"
              src="/assets/qr.gif"
              alt="Código QR"
              sx={{ width: 200, height: 200, objectFit: "contain" }}
            />
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Italian'",
              fontSize: { xs: "4.2rem", md: "3.5rem" },
              color: "#24777D",
              mb: 3,
            }}
          >
            Escanea este QR
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Catchy'",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              color: "#24777D",
              mb: 2,
            }}
          >
            ¡Compartí las fotos que saques en mi cumpleaños conmigo!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Catchy'",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              color: "#24777D",
              mb: 1,
            }}
          >
            O podés presionar aquí
          </Typography>

          <Box mt={2}>
            <QrButton
              label="Ir Al Album"
              href="https://photos.app.goo.gl/M99i1uuiEYm7yyF79"
              newTab
            />
          </Box>
        </Box>
      </Fade>
    </Box>
  );
};

export default Qr;
