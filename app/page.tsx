import { Box } from "@mui/material";
import { Footer } from "@/components/layouts/Footer/Footer";
import { Header } from "@/components/layouts/Header/Header";

export default function Home() {
  return (
    <>
      <Header />

      <Box sx={{ height: "200vh" }}></Box>

      <Footer />
    </>
  );
}
