import { Box, Container, Typography } from "@mui/material";
import { Footer } from "@/components/layouts/Footer/Footer";
import { Header } from "@/components/layouts/Header/Header";
import { StageList } from "@/components/elements/List/StageList";

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
              py: 4,
            }}
          >
            公演一覧
          </Typography>

          <StageList />
        </Box>
      </Container>

      <Footer />
    </>
  );
}
