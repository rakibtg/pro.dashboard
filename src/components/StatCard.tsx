import colors from "@/utils/colors.util";
import { Box } from "@mui/material";
import Text from "./Text";

export default function StatCard({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <Box
      border={1}
      borderRadius={1}
      borderColor={colors.border}
      padding={2}
      textAlign="center"
      flexGrow={1}
      flexBasis={0}
    >
      <Text
        display="block"
        fontSize={16}
        fontWeight="bold"
        color={colors.label}
      >
        {value.toLocaleString()}
      </Text>
      <Text paddingTop={0.5} display="block" fontSize={15}>
        {label}
      </Text>
    </Box>
  );
}
