import React from "react";
import { Text } from "@chakra-ui/react";

const Copyright = ({ textcolor, position }) => {
  return (
    <Text
      cursor="pointer"
      onClick={() => window.open(`https://sebamar.site/`)}
      textAlign="center"
      textColor="white"
    >
      AppPoketdex Copyright © Sebamar Developer{" "}
      {new Date().getFullYear()}
      {"."}
    </Text>
  );
};

export default Copyright;
