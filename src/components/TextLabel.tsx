import colors from "../utils/colors.util";
import { Typography, TypographyProps } from "@mui/material";

interface TextProps extends TypographyProps {}

export default function TextLabel({ children, ...props }: TextProps) {
  return (
    <Typography
      fontWeight="bold"
      textTransform="uppercase"
      letterSpacing={1}
      color={colors.defaultText}
      fontSize={16}
      {...props}
    >
      {children}
    </Typography>
  );
}
