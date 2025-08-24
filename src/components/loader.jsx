import React from "react";
import { keyframes } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Define the keyframes for the rotation animation
const rotate = keyframes`
  100% { transform: rotate(1turn); }
`;

// Create a styled component for the loader
const StyledLoader = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "50px",
  borderRadius: "50%", 
  aspectRatio: "1",
  display: "grid",
  WebkitMask: "conic-gradient(from 15deg,#0000,#000)",
  animation: `${rotate} 1s infinite steps(12)`,
  background: `
    radial-gradient(closest-side at 50% 12.5%, ${theme.palette.primary.main} 96%,#0000) 50% 0/20% 80% repeat-y,
    radial-gradient(closest-side at 12.5% 50%, ${theme.palette.primary.main} 96%,#0000) 0 50%/80% 20% repeat-x
  `,
  "&::before, &::after": {
    content: '""',
    gridArea: "1/1",
    background: `
      radial-gradient(closest-side at 50% 12.5%, ${theme.palette.primary.main} 96%,#0000) 50% 0/20% 80% repeat-y,
      radial-gradient(closest-side at 12.5% 50%, ${theme.palette.primary.main} 96%,#0000) 0 50%/80% 20% repeat-x
    `,
    transform: "rotate(30deg)",
  },
  "&::after": {
    transform: "rotate(60deg)",
  },
}));

const CenteredLoader = styled(Box)({
  display: "flex",
  flexDirection: 'column',
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "70vh",
});

const Loader = () => {
  return (
    <CenteredLoader>
      <StyledLoader />
      <Typography variant="body1" sx={{ mt: 2, fontWeight:500, fontSize:18 }}>
        Loading...
      </Typography>
    </CenteredLoader>
  );
};

export default Loader;
