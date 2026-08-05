import { Box, Typography } from "@mui/material";
import { getStageDetail } from "@/libs/microcms/api/stage";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export default async function Flyer({ params }: Props) {
  const { id } = await params;

  const data = await getStageDetail(id);

  console.log(data);
  return (
    <>
      <Box
        sx={{
          py: 17,
          bgcolor: "grey.900",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "1.6rem",
            fontWeight: "bold",
            textAlign: "center",
            py: 3,
          }}
        >
          {data.title}
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "50vh",
            overflow: "hidden",
            bgcolor: "grey.900",
            pb: 4,
          }}
        >
          <Image
            src={data.thumbnail.url}
            alt={data.title}
            fill
            style={{
              objectFit: "contain",
              transition: "transform 0.4s ease",
            }}
          />
        </Box>
      </Box>
    </>
  );
}
