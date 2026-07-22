import { Box, Container, Typography } from "@mui/material";
import { Footer } from "@/components/layouts/Footer/Footer";
import { Header } from "@/components/layouts/Header/Header";

export default function About() {
  return (
    <>
      <Header />

      <Box
        sx={{
          mt: 18,
          mb: 8,
        }}
      >
        <Container maxWidth="md">
          <Typography
            sx={{
              fontSize: "1.5rem",
              display: "flex-start",
              justifyContent: "center",
              bgcolor: "#000000",
              color: "#ffffff",
              py: 2,
              px: 4,
            }}
          >
            Little Rockとは
          </Typography>
          <Typography
            sx={{
              py: 4,
              fontSize: "1.2rem",
            }}
          >
            Little Rockには「小さな石ころ」という意味があります。
            まだまだ小さい私たちですが、
            定期公演やイベントなどの作品を作っていく中で
            お互いに切磋琢磨し合って。 傷ついて。磨かれて。 いずれは、
            輝くダイヤモンドのような人になれたらなと思い、
            このような名前を付けました。
          </Typography>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
