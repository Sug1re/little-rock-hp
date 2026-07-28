import { Box, Container, Typography } from "@mui/material";
import { Footer } from "@/components/layouts/Footer/Footer";
import { Header } from "@/components/layouts/Header/Header";

export default function About() {
  return (
    <>
      <Header />

      <Box
        sx={{
          mt: 24,
        }}
      >
        <Container maxWidth="md">
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
            ご挨拶
          </Typography>
          <Typography
            sx={{
              py: 4,
              fontSize: "1.2rem",
            }}
          >
            私達は演劇を中心に！歌、ダンス、ミュージカルなどのエンターテインメント作品を皆様にお届けするため、国際映像メディア専門学校の生徒で作られた学生パフォーマンスグループです。​青春は密です！熱しやすく冷めやすい。今！この時にしか見れないものを見ていただければ良いなと！思っております！
          </Typography>
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
            Little Rockとは
          </Typography>
          <Typography
            sx={{
              py: 4,
              fontSize: "1.2rem",
            }}
          >
            Little
            Rockには「小さな石ころ」という意味があります。まだまだ小さい私たちですが、定期公演やイベントなどの作品を作っていく中でお互いに切磋琢磨し合って。傷ついて。磨かれて。いずれは、輝くダイヤモンドのような人になれたらなと思い、このような名前を付けました。
          </Typography>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
