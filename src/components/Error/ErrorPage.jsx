import React from "react";
import { Box, keyframes } from "@mui/system";
import { styled } from "@mui/material/styles";
import { SearchOutlinedIcon } from "@/icons";
import { Button, Card, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

// Keyframes for pulse animation
const pulse = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  10% {
    transform: scale(0.1);
    opacity: 1;
  }
  20% {
    transform: scale(0.2);
    opacity: 0.9;
  }
  30% {
    transform: scale(0.3);
    opacity: 0.8;
  }
  40% {
    transform: scale(0.4);
    opacity: 0.7;
  }
  50% {
    transform: scale(0.5);
    opacity: 0.6;
  }
  60% {
    transform: scale(0.6);
    opacity: 0.5;
  }
  70% {
    transform: scale(0.7);
    opacity: 0.4;
  }
  80% {
    transform: scale(0.8);
    opacity: 0.3;
  }
  90% {
    transform: scale(0.9);
    opacity: 0.2;
  }
  100% {
    transform: scale(1);
    opacity: 0.1;
  }
`;

// Styled components for pulse and dot
const Pulse = styled(Box)(({ theme }) => ({
  width: "250px",
  height: "250px",
  borderRadius: "100%",
  position: "absolute",
  zIndex: 10,
  animation: `${pulse} 2s ease-out infinite`,
}));

const Dot = styled(Box)(({ delay }) => ({
  width: "500px",
  height: "500px",
  borderRadius: "100%",
  border: "2px solid grey",
  backgroundColor: "transparent",
  position: "absolute",
  opacity: 0,
  animation: `${pulse} 2s ease-out infinite`,
  animationDelay: `${delay}s`,
}));

const ErrorPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleReload = () => {
    navigate(0);
  };

  return (
    <Box>
      <Card
        sx={{
          height: "100vh",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ position: "absolute", top: "50px", left: "50px" }}>
            <Box
              sx={{
                width: "200px",
                height: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px",
              }}
            >
              <Pulse />
              <Card sx={{ position: "relative", zIndex: 20, padding: "5px" }}>
                <SearchOutlinedIcon
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </Card>
              <Dot delay={0} />
              <Dot
                delay={0.5}
                sx={{ transform: "translate(-50%, -50%) rotate(120deg)" }}
              />
              <Dot
                delay={1}
                sx={{ transform: "translate(-50%, -50%) rotate(240deg)" }}
              />
              <Dot
                delay={1.5}
                sx={{ transform: "translate(-50%, -50%) rotate(240deg)" }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "180px",
              left: "210px",
            }}
          >
            <Typography variant="h3" fontSize={48}>
              404 error - page not found
            </Typography>
            <Typography
              variant="body2"
              fontSize={18}
              sx={{ fontWeight: "light" }}
            >
              Sorry, we searched high and low, but couldn't find what
            </Typography>
            <Typography
              variant="body2"
              fontSize={18}
              sx={{ fontWeight: "light" }}
            >
              you're looking for. Let's find a better place for you to go.
            </Typography>
            <Box
              sx={{
                marginTop: 4,
              }}
            >
              <Button variant="outlined" onClick={handleReload}>Try Again</Button>
              <Button
                sx={{
                  backgroundColor: theme.palette.primary.lighter,
                  color: theme.palette.primary.contrastText,
                  "&:hover": {
                    backgroundColor: theme.palette.primary.lighter,
                  },
                  marginLeft: 2,
                }}
                type="button"
                variant="contained"
                onClick={() => navigate("/")}
              >
                Go to Dashboard
              </Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default ErrorPage;
