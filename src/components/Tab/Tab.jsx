import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const StyledBox = styled(Box)({
  boxShadow: `
    0px 4px 12px 4px #E9E9E980, 
  `,
  borderRadius: "4px",
  maxWidth: "90%",
});

const CustomTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    padding: "0px",
    minWidth: "auto",
  })
);

const TabLabel = styled("span")(({ theme }) => ({
  fontSize: 14,
  fontWeight: 600,
  lineHeight: "16.8px",
  fontFamily: "Lato,sans-serif",
  padding: "12px 16px 12px 16px",
  display: "inline-block",
  height: "42px",
  whiteSpace: "nowrap",
  width: "208px", // Set width to auto to fit content
  "&.Mui-selected": {
    backgroundColor: "#42794A",
    color: "white",
    borderRadius: "4px",
  },
  "&:not(.Mui-selected)": {
    backgroundColor: "white",
    color: "#42794A",
  },
}));

const TabPanel = ({ value, index, children }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

export default function ScrollableTabsButtonVisible({ tabs = [], title }) {
  const [value, setValue] = useState(0);
  const showScrollButtons = tabs.length > 3; // Adjust the number as needed

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "0px 0px 0px 16px",
          position: "relative",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="h3"
          component="h3"
          sx={{ fontWeight: 700, width: "auto", fontSize: "28px !important" }}
        >
          {title}
        </Typography>

        <StyledBox
          sx={{
            bgcolor: (theme) => theme.palette.BudgieThemeColor.BaseWhite,
            marginLeft: 2,
            maxWidth: showScrollButtons ? "100%" : "calc(100% - 40px)", // Add space if scroll buttons are not visible
            overflow: "hidden", // Prevent overflow
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{ sx: { transition: "none" } }}
            variant="scrollable"
            scrollButtons={showScrollButtons ? "auto" : false}
            aria-label="visible arrows tabs example"
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                display: showScrollButtons ? "flex" : "none",
                "&.Mui-disabled": { opacity: 0.3 },
              },
              "& .MuiTabs-indicator": {
                display: "none",
              },
              width: "100%",
              overflowX: "auto", // Add horizontal scrolling if needed
              display: "flex",
              justifyContent: "flex-start", // Align tabs to start
              flexWrap: "nowrap", // Prevent wrapping
            }}
          >
            {tabs.map((tab, index) => (
              <CustomTab
                key={index}
                {...tab.props}
                label={
                  <TabLabel className={value === index ? "Mui-selected" : ""}>
                    {tab.label}
                  </TabLabel>
                }
              />
            ))}
          </Tabs>
        </StyledBox>
      </Box>
      {tabs.map((tab, index) => (
        <TabPanel value={value} index={index} key={index}>
          {tab.component}
        </TabPanel>
      ))}
    </>
  );
}
