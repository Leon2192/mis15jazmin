import {
  Box,
  Typography,
  Button,
  Modal,
  Fade,
  Backdrop,
  Divider,
  IconButton,
} from "@mui/material";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import ButtonLinks from "./ButtonLinks/ButtonLInks";

const Gift = () => {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      ref={ref}
      sx={{
        py: 8,
        px: 2,
        backgroundColor: "#D8ECEB",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Fade in={inView} timeout={1000}>
        <Box
          sx={{
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "transform 0.8s ease",
          }}
        >
            <Box
  component="img"
  src="/assets/regalo.gif"
  alt=""
  sx={{
    width: 125,       // equivalente a fontSize: 100
    height: 125,
    mb: 1
  }}
/>

          <Typography
            variant="h6"
            sx={{
              fontFamily: "'Catchy'",
              fontSize: { xs: "1.2rem", md: "2rem" },
              color: "#24777D",
              fontWeight: "semibold",
              maxWidth: 600,
              mb: 4,
            }}
          >
            Tu presencia es mi mejor regalo.  <br />
            Pero si querés hacerme un obsequio...
          </Typography>

         
          <ButtonLinks
          onClick={handleOpen}
  label="Ver datos Bancarios"
  newTab
/>
        </Box>
      </Fade>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "#fdfaff", // más claro
              borderRadius: 3,
              boxShadow: 24,
              p: { xs: 3, md: 4 },
              maxWidth: 600,
              width: "calc(100% - 32px)",
              boxSizing: "border-box",
              textAlign: "center",
            }}
          >
            {/* Botón cerrar */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "#666",
                "&:hover": {
                  color: "#9a64ea",
                  backgroundColor: "transparent",
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Ícono arriba del modal */}
            <Box
  component="img"
  src="/assets/regalo.gif"
  alt=""
  sx={{
    width: 125,       // equivalente a fontSize: 100
    height: 125,
    mb: 1
  }}
/>

            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{
              fontFamily: "'Lejour'",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              color: "#24777D",
              mb: 1,
            }}>
              Datos Bancarios
            </Typography>

            <Typography variant="body1" gutterBottom sx={{
              fontFamily: "'Catchy'",
              fontSize: { xs: "1rem", md: "1.5rem" },
              color: "#24777D",
              mb: 1,
              fontWeight:700,
            }}>
              Nombre del titular: Jazmin Maria Aquino
              <br />
              Alias: jazminaquino.
        
            </Typography>

   
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Gift;
