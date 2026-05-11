import { Box, Container, Typography } from "@mui/material";
import { Footer } from "@/components/layouts/Footer/Footer";
import { Header } from "@/components/layouts/Header/Header";
import { PerformanceList } from "@/components/elements/List/PerformanceList";

export default function Stage() {
  return (
    <>
      <Header />

      <Container maxWidth="lg">
        <Box
          sx={{
            mt: 18,
            minHeight: "50vh",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              display: "flex",
              justifyContent: "center",
            }}
          >
            公演一覧
          </Typography>

          <PerformanceList />
        </Box>
      </Container>

      <Footer />
    </>
  );
}
