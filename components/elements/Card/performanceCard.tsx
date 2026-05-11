"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActionArea,
} from "@mui/material";
import { Performance } from "@/libs/microcms/types";

type Props = {
  performance: Performance;
};

export const PerformanceCard = ({ performance }: Props) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "400px",
        height: "400px",
        borderRadius: 2,
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        border: "0.5px solid #e0e0e0",
        overflow: "hidden",
      }}
    >
      <CardActionArea
        component={Link}
        href={`/performance/${performance.id}`}
        disableRipple
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",

          "& .MuiCardActionArea-focusHighlight": {
            opacity: 0,
            backgroundColor: "transparent",
          },

          "&:hover .MuiCardActionArea-focusHighlight": {
            opacity: 0,
          },

          "&:hover": {
            backgroundColor: "transparent",
          },

          "&:hover .performance-image": {
            transform: "scale(1.05)",
          },
        }}
      >
        {/* 画像エリア */}
        <Box
          sx={{
            flex: 3,
            position: "relative",
            bgcolor: "#dddddd",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Image
            className="performance-image"
            src={performance.thumbnail.url}
            alt={performance.title}
            fill
            style={{
              objectFit: "contain",
              transition: "transform 0.4s ease",
            }}
          />
        </Box>

        {/* テキストエリア */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <CardContent
            sx={{
              backgroundColor: "#ffffff !important",
            }}
          >
            <Typography
              gutterBottom
              sx={{
                color: "text.secondary",
                fontSize: "1rem",
              }}
            >
              {new Date(performance.date)
                .toLocaleDateString("ja-JP")
                .replaceAll("/", ".")}
            </Typography>

            <Typography
              variant="h6"
              component="div"
              sx={{
                fontSize: "1.1rem",
                height: "3em",
              }}
            >
              {performance.title}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};
