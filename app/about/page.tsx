import { Box } from "@mui/material";
import { Footer } from "@/components/layouts/Footer/Footer";
import { Header } from "@/components/layouts/Header/Header";

export default function About() {
  return (
    <>
      <Header />

      <Box sx={{ height: "200vh" }}>
        <h1>Little Rockとは</h1>
      </Box>

      <Footer />
    </>
  );
}
