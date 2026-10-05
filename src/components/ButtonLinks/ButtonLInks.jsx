import Button from "@mui/material/Button";

export default function ButtonLinks({
  label,
  href,
  onClick,
  newTab = false,
  sx,
  bounce = true,
}) {
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
}
