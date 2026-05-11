"use client";

import { Box, Button, InputBase } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, my: 4 }}>
        <Box
          sx={{
            width: "100%",
            maxWidth: "500px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            borderRadius: "9999px",
            backgroundColor: "#f5f5f5",
            border: "1px solid #ddd",
            transition: "all 0.2s ease",

            "&:focus-within": {
              backgroundColor: "#f5f5f5",
            },
          }}
        >
          <Box
            sx={{
              width: "48px",
              color: "#7d7d7d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1,
            }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Box>

          <InputBase
            placeholder="キーワードを検索"
            fullWidth
            sx={{
              fontSize: "14px",
            }}
          />
        </Box>

        <Button
          variant="outlined"
          disableRipple
          sx={{
            borderRadius: "18px",
            border: "1px solid #ddd",
            fontWeight: "bold",
            color: "#000000",
            backgroundColor: "#f5f5f5",
          }}
        >
          検索
        </Button>
      </Box>
    </>
  );
};
