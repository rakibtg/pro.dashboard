import colors from "../utils/colors";
import { Typography, TypographyProps } from "@mui/material";

interface TextProps extends TypographyProps {}

export default function TextLabel({ children, ...props }: TextProps) {
  return (
    <Typography
      fontWeight="bold"
      textTransform="uppercase"
      letterSpacing={1}
      color={colors.label}
      fontSize={14}
      {...props}
    >
      {children}
    </Typography>
  );
}
