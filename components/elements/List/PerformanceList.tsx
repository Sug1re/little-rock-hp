import { Box } from "@mui/material";
import { getPerformanceList } from "@/libs/microcms/performance";
import { Performance } from "@/libs/microcms/types";
import { PerformanceCard } from "@/components/elements/Card/PerformanceCard";

export async function PerformanceList() {
  const data = await getPerformanceList();

  return (
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
  );
}
