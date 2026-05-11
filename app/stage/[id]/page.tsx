import { Box, Container, Typography } from "@mui/material";
import { Footer } from "@/components/layouts/Footer/Footer";
import { Header } from "@/components/layouts/Header/Header";
import { getStageDetail } from "@/libs/microcms/stage";

type Props = {
  params: {
    id: string;
  };
};

export default async function StageDetail({ params }: Props) {
  const { id } = await params;

  const data = await getStageDetail(id);

  console.log(data);
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

          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              mb: 4,
              textAlign: "center",
            }}
          >
            {data.title}
            {data.id}
            {data.date}
          </Typography>
        </Box>
      </Container>

      <Footer />
    </>
  );
}
