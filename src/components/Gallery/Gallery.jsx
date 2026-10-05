import { useEffect, useRef, useState } from "react";
import { Box, ButtonBase, Dialog, IconButton, Typography, useMediaQuery } from "@mui/material";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import { invitation } from "../../config/invitation";

const photoAssets = import.meta.glob(
  "/public/assets/galeria/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
  { eager: true, query: "?url", import: "default" },
);
const photos = Object.entries(photoAssets)
  .sort(([a], [b]) => a.localeCompare(b, "es", { numeric: true }))
  .map(([, src]) => src);

const hasMultiplePhotos = photos.length > 1;
const a11yOptions = {
  containerRoleDescriptionMessage: "Carrusel de fotos",
  itemRoleDescriptionMessage: "Foto",
  slideLabelMessage: "Foto {{index}} de {{slidesLength}}",
  scrollOnFocus: false,
};
const controlSx = {
  width: 44,
  height: 44,
  color: "#24777D",
  backgroundColor: "#fff",
  border: "1px solid #C5DEDA",
  "&:hover": { backgroundColor: "#D8ECEB" },
};

const Gallery = () => {
  const [mainSwiper, setMainSwiper] = useState(null);
  const viewerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [viewerIndex, setViewerIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isOpen = selectedIndex !== null;
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (!mainSwiper || mainSwiper.destroyed) return;
    if (isOpen) mainSwiper.keyboard.disable();
    else mainSwiper.keyboard.enable();
    if (!hasMultiplePhotos) return;
    if (inView && !isOpen && !isPaused && !reduceMotion) {
      mainSwiper.autoplay.start();
    } else {
      mainSwiper.autoplay.stop();
    }
  }, [mainSwiper, inView, isOpen, isPaused, reduceMotion]);

  const openViewer = (index) => {
    setViewerIndex(index);
    setSelectedIndex(index);
  };
  const closeViewer = () => {
    mainSwiper?.slideToLoop(viewerIndex, 0);
    setSelectedIndex(null);
  };

  return (
    <Box
      component="section"
      id="galeria"
      ref={ref}
      aria-labelledby="gallery-title"
      sx={{ py: { xs: 6, md: 9 }, px: { xs: 2, md: 4 }, background: "linear-gradient(180deg, #F5FAF9, #E4F1EF)" }}
    >
      <Box sx={{ maxWidth: 760, mx: "auto", minWidth: 0 }}>
        <Box sx={{ textAlign: "center", mb: 3, color: "#24777D" }}>
          <PhotoCameraOutlinedIcon sx={{ fontSize: 30, mb: 1 }} />
          <Typography component="h2" id="gallery-title" sx={{ fontFamily: "'Italian'", fontSize: { xs: "3.8rem", md: "5rem" }, lineHeight: 1.3 }}>
            Mis momentos
          </Typography>
          <Typography sx={{ fontFamily: "'Catchy'", fontSize: { xs: "1rem", md: "1.3rem" }, mt: 1, lineHeight: 1.6 }}>
            Un poquito de mí, antes de esta noche tan especial.
          </Typography>
        </Box>

        {photos.length > 0 ? (
          <Box sx={{ maxWidth: 480, width: "100%", mx: "auto", minWidth: 0 }}>
            <Box sx={{
              aspectRatio: "2 / 3",
              maxHeight: "min(68svh, 660px)",
              overflow: "hidden",
              borderRadius: { xs: "18px", md: "24px" },
              backgroundColor: "#E1EEEB",
              boxShadow: "0 12px 36px rgba(36,119,125,0.14)",
              "& .swiper": { width: "100%", height: "100%" },
              "& .swiper-slide": { height: "100%" },
            }}>
              <Swiper
                modules={[A11y, Autoplay, Keyboard]}
                slidesPerView={1}
                loop={hasMultiplePhotos}
                speed={reduceMotion ? 0 : 600}
                autoplay={hasMultiplePhotos ? { delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true } : false}
                keyboard={{ enabled: !isOpen, onlyInViewport: true }}
                a11y={a11yOptions}
                onSwiper={setMainSwiper}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              >
                {photos.map((src, index) => (
                  <SwiperSlide key={src}>
                    <ButtonBase
                      onClick={() => openViewer(index)}
                      aria-label={"Ampliar foto " + (index + 1) + " de " + invitation.name}
                      tabIndex={index === activeIndex ? 0 : -1}
                      sx={{ display: "block", width: "100%", height: "100%", "&.Mui-focusVisible": { outline: "3px solid #24777D", outlineOffset: -4 } }}
                    >
                      <Box
                        component="img"
                        src={src}
                        alt={invitation.name + ", momento " + (index + 1)}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        sx={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }}
                      />
                    </ButtonBase>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, mt: 2 }}>
              {hasMultiplePhotos && (
                <IconButton onClick={() => mainSwiper?.slidePrev()} aria-label="Foto anterior" sx={controlSx}>
                  <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>
              )}
              <Typography sx={{ fontFamily: "'Catchy'", color: "#24777D", minWidth: 48, textAlign: "center", fontSize: "1rem" }}>
                {activeIndex + 1} / {photos.length}
              </Typography>
              {hasMultiplePhotos && (
                <IconButton onClick={() => mainSwiper?.slideNext()} aria-label="Foto siguiente" sx={controlSx}>
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              )}
            </Box>

            {hasMultiplePhotos && (
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", mt: 1 }}>
                {photos.map((src, index) => (
                  <ButtonBase
                    key={src}
                    onClick={() => mainSwiper?.slideToLoop(index)}
                    aria-label={"Ir a la foto " + (index + 1)}
                    aria-current={activeIndex === index ? "true" : undefined}
                    sx={{ width: 32, height: 44, borderRadius: 2 }}
                  >
                    <Box sx={{ width: activeIndex === index ? 20 : 7, height: 7, borderRadius: 999, backgroundColor: activeIndex === index ? "#24777D" : "#AACCC7", transition: reduceMotion ? "none" : "width 0.3s ease" }} />
                  </ButtonBase>
                ))}
                {!reduceMotion && (
                  <IconButton onClick={() => setIsPaused((paused) => !paused)} aria-label={isPaused ? "Reanudar carrusel" : "Pausar carrusel"} sx={{ color: "#24777D", width: 44, height: 44, ml: 1 }}>
                    {isPaused ? <PlayArrowIcon fontSize="small" /> : <PauseIcon fontSize="small" />}
                  </IconButton>
                )}
              </Box>
            )}
            <Typography sx={{ mt: 1, textAlign: "center", fontFamily: "'Catchy'", color: "#24777D", fontSize: "0.9rem" }}>
              {hasMultiplePhotos ? "Deslizá para ver más · Tocá la foto para ampliarla" : "Tocá la foto para ampliarla"}
            </Typography>
          </Box>
        ) : (
          <Box sx={{ maxWidth: 620, mx: "auto", p: 4, borderRadius: "24px", border: "1px solid #CADFDC", textAlign: "center", backgroundColor: "#fff", color: "#24777D" }}>
            <Typography sx={{ fontFamily: "'Catchy'", fontSize: "1.2rem", lineHeight: 1.8 }}>
              Muy pronto voy a compartir mis fotos favoritas con vos.
            </Typography>
          </Box>
        )}
      </Box>

      <Dialog
        open={isOpen}
        onClose={closeViewer}
        fullScreen
        aria-labelledby="photo-viewer-title"
        slotProps={{ paper: { sx: { backgroundColor: "#081D1F", backgroundImage: "none", color: "#fff", overflow: "hidden" } } }}
      >
        <Box sx={{ height: "100%", minHeight: 0, display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", px: 2, pb: 1, pt: "max(12px, env(safe-area-inset-top))", gap: 2, flexShrink: 0 }}>
            <Typography id="photo-viewer-title" sx={{ fontFamily: "'Catchy'", fontSize: "1.1rem" }}>
              {invitation.name} · {viewerIndex + 1} / {photos.length}
            </Typography>
            <IconButton onClick={closeViewer} aria-label="Cerrar foto" sx={{ color: "#fff", backgroundColor: "rgba(255,255,255,0.1)", width: 44, height: 44 }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ flex: 1, minHeight: 0, width: "100%", "& .swiper": { width: "100%", height: "100%" }, "& .swiper-slide": { display: "flex", alignItems: "center", justifyContent: "center", height: "100%" } }}>
            {isOpen && (
              <Swiper
                modules={[A11y, Keyboard]}
                slidesPerView={1}
                initialSlide={selectedIndex}
                loop={hasMultiplePhotos}
                speed={reduceMotion ? 0 : 350}
                keyboard={{ enabled: true, onlyInViewport: true }}
                a11y={a11yOptions}
                onSwiper={(swiper) => { viewerRef.current = swiper; }}
                onSlideChange={(swiper) => setViewerIndex(swiper.realIndex)}
              >
                {photos.map((src, index) => (
                  <SwiperSlide key={src}>
                    <Box component="img" src={src} alt={"Foto " + (index + 1) + " de " + invitation.name} loading="lazy" draggable={false} sx={{ display: "block", width: "100%", height: "100%", objectFit: "contain" }} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </Box>

          <Box sx={{ flexShrink: 0, textAlign: "center", px: 2, pt: 1.5, pb: "max(16px, env(safe-area-inset-bottom))" }}>
            {hasMultiplePhotos && (
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 3, mb: 1 }}>
                <IconButton onClick={() => viewerRef.current?.slidePrev()} aria-label="Foto anterior" sx={{ color: "#fff", width: 44, height: 44, backgroundColor: "rgba(255,255,255,0.1)" }}>
                  <ArrowBackIosNewIcon fontSize="small" />
                </IconButton>
                <Typography aria-live="polite" sx={{ fontFamily: "'Catchy'", minWidth: 48 }}>
                  {viewerIndex + 1} / {photos.length}
                </Typography>
                <IconButton onClick={() => viewerRef.current?.slideNext()} aria-label="Foto siguiente" sx={{ color: "#fff", width: 44, height: 44, backgroundColor: "rgba(255,255,255,0.1)" }}>
                  <ArrowForwardIosIcon fontSize="small" />
                </IconButton>
              </Box>
            )}
            <Typography sx={{ fontFamily: "'Catchy'", fontSize: "0.9rem", color: "#C0D8D5" }}>
              {hasMultiplePhotos ? "Deslizá para recorrer mis momentos" : "Un momento especial"}
            </Typography>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Gallery;
