import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/system";
import { LineDivider } from "..";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "white",
    color: "black",
    borderRadius: "12px",
    width: "30px",
    height: "22px",
    padding: theme.spacing(1, 2),
    border: "1px solid #E4E7EC",
  },
}));

// StyledTabs to remove the default indicator
const StyledTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    display: "none", // Hide the default indicator
  },
});

// StyledTab to apply background color for the active tab
const StyledTab = styled(Tab)(({ theme, active }) => ({
  backgroundColor: active
    ? theme.palette.BudgieThemeColor.Primary[100]
    : "transparent",
  color: active
    ? theme.palette.primary.contrastText
    : theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(0, 0), // Adjust padding as needed
  textTransform: "none", // Prevent uppercase transformation
  transition: "background-color 0.1s",
}));

const TabbedNavigationWithBadges = ({
  tabs,
  value,
  renderContent,
  onChange,
}) => {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <StyledTabs
        value={value}
        onChange={onChange}
        variant="fullWidth"
        scrollButtons={false}
        aria-label="custom tabs example"
      >
        {tabs.map((tab, index) => (
          <StyledTab
            key={index}
            label={
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Box
                  sx={{
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                >
                  {tab.name}
                </Box>
                <StyledBadge badgeContent={tab.count} color="primary" />
              </Box>
            }
            value={index}
            active={value === index} // Pass active state to StyledTab
          />
        ))}
      </StyledTabs>
      {renderContent}
    </Box>
  );
};

export default TabbedNavigationWithBadges;
