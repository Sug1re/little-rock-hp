import { Box, Typography } from "@mui/material";
import { Footer } from "@/components/layouts/Footer/Footer";
import { Header } from "@/components/layouts/Header/Header";
import { getPerformanceList } from "@/libs/microcms/performance";
import { Performance } from "@/libs/microcms/types";
import { PerformanceCard } from "@/components/elements/Card/performanceCard";

export default async function Stage() {
  const data = await getPerformanceList();

  return (
    <>
      <Header />

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

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "repeat(3, 1fr)",
            },
            justifyItems: "center",
            gap: 2,
            mb: 4,
          }}
        >
          {data.contents.map((performance: Performance) => (
            <PerformanceCard key={performance.id} performance={performance} />
          ))}
        </Box>
      </Box>

      <Footer />
    </>
  );
}
