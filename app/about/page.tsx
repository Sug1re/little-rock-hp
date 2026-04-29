import { Box, Typography } from "@mui/material";
import { Footer } from "@/components/layouts/Footer/Footer";
import { Header } from "@/components/layouts/Header/Header";

export default function About() {
  return (
    <>
      <Header />

      <Box
        sx={{
          mt: 18,
          height: "100vh",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Little Rockとは
        </Typography>
      </Box>

      <Footer />
    </>
  );
}
