import React from "react";
import { Badge } from "@chakra-ui/react";

function Hastag({ tag }) {
  return (
    <Badge
      variant="subtle"
      colorScheme="blue"
      color="text.400"
      size="sm"
      cursor="pointer"
    >
      #{tag}
    </Badge>
  );
}

export default Hastag;
