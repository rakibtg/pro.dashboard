import colors from "../utils/colors.util";
import { Typography, TypographyProps } from "@mui/material";

interface TextProps extends TypographyProps {}

export default function Text({ children, ...props }: TextProps) {
  return (
    <Typography color={colors.defaultText} fontSize={14} {...props}>
      {children}
    </Typography>
  );
}
