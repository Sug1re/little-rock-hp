import { Box, Container, Typography } from "@mui/material";
import { getStageDetail } from "@/libs/microcms/api/stage";

type Props = {
  params: {
    id: string;
  };
};

export default async function Detail({ params }: Props) {
  const { id } = await params;

  const data = await getStageDetail(id);

  console.log(data);
  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ py: 8 }}>
          <Box sx={{ display: "flex", bgcolor: "#000000" }}>
            <Typography
              sx={{
                display: "flex",
                color: "#fff",
                justifyContent: "flex-start",
                fontSize: "1rem",
                textAlign: "center",
                p: 2,
              }}
            >
              会場/日程
            </Typography>
          </Box>
          <Box sx={{ display: "flex", bgcolor: "#ecebeb" }}>
            <Typography
              sx={{
                display: "flex",
                color: "#000000",
                justifyContent: "flex-start",
                fontSize: "0.9rem",
                p: 2,
              }}
            >
              {data.venue}　
              {new Date(data.date).toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", bgcolor: "#000000" }}>
            <Typography
              sx={{
                display: "flex",
                color: "#fff",
                justifyContent: "flex-start",
                fontSize: "1rem",
                textAlign: "center",
                p: 2,
              }}
            >
              作
            </Typography>
          </Box>
          <Box sx={{ display: "flex", bgcolor: "#ecebeb" }}>
            <Typography
              sx={{
                display: "flex",
                color: "#000000",
                justifyContent: "flex-start",
                fontSize: "0.9rem",
                p: 2,
              }}
            >
              {data.playwright}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", bgcolor: "#000000" }}>
            <Typography
              sx={{
                display: "flex",
                color: "#fff",
                justifyContent: "flex-start",
                fontSize: "1rem",
                textAlign: "center",
                p: 2,
              }}
            >
              演出
            </Typography>
          </Box>
          <Box sx={{ display: "flex", bgcolor: "#ecebeb" }}>
            <Typography
              sx={{
                display: "flex",
                color: "#000000",
                justifyContent: "flex-start",
                fontSize: "0.9rem",
                p: 2,
              }}
            >
              {data.director}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", bgcolor: "#000000" }}>
            <Typography
              sx={{
                display: "flex",
                color: "#fff",
                justifyContent: "flex-start",
                fontSize: "1rem",
                textAlign: "center",
                p: 2,
              }}
            >
              あらすじ
            </Typography>
          </Box>
          <Box sx={{ display: "flex", bgcolor: "#ecebeb" }}>
            <Typography
              sx={{
                display: "flex",
                color: "#000000",
                justifyContent: "flex-start",
                fontSize: "0.9rem",
                p: 2,
              }}
            >
              {data.story}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", bgcolor: "#000000" }}>
            <Typography
              sx={{
                display: "flex",
                color: "#fff",
                justifyContent: "flex-start",
                fontSize: "1rem",
                textAlign: "center",
                p: 2,
              }}
            >
              キャスト
            </Typography>
          </Box>
          <Box sx={{ display: "flex", bgcolor: "#ecebeb" }}>
            <Typography
              sx={{
                display: "flex",
                color: "#000000",
                justifyContent: "flex-start",
                fontSize: "0.9rem",
                p: 2,
              }}
            >
              {data.cast}
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}
