import { Box, Container, Typography } from "@mui/material";
import { Footer } from "@/components/layouts/Footer/Footer";
import { Header } from "@/components/layouts/Header/Header";

export default function Cast() {
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
              display: "flex-start",
              justifyContent: "center",
              bgcolor: "grey.900",
              color: "#ffffff",
              py: 2,
              px: 4,
              my: 4,
            }}
          >
            キャスト一覧
          </Typography>
        </Box>
      </Container>

      <Footer />
    </>
  );
}
