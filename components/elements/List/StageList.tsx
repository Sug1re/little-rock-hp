import { Box } from "@mui/material";
import { getStageList } from "@/libs/microcms/api/stage";
import { Stage } from "@/libs/microcms/types";
import { StageCard } from "@/components/elements/Card/StageCard";

export async function StageList() {
  const data = await getStageList();

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
      {data.contents.map((stage: Stage) => (
        <StageCard key={stage.id} stage={stage} />
      ))}
    </Box>
  );
}
