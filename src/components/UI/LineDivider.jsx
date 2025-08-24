import React from "react";
import { Divider } from "@mui/material";
import { styled } from "@mui/system";

const StyledDividerComponent = styled(Divider)(
  ({ theme, thickness = 1, orientation }) => ({
    margin: theme.spacing(2, 0),
    backgroundColor: theme.palette.divider,
    ...(orientation === "vertical"
      ? { borderRightWidth: thickness }
      : { borderBottomWidth: thickness }),
  })
);

const LineDivider = ({ thickness, ...props }) => {
  return <StyledDividerComponent thickness={thickness} {...props} />;
};

export default LineDivider;
