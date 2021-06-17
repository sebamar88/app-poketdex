import React from "react";
import { Stack, Text, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavButtons = ({ functionOnClick }) => {
  const navButtonsArray = [
    {
      name: "Pokedex",
      bgColor: "grass",
      route: "/pokedex",
    },
    {
      name: "Buscar ataques",
      bgColor: "fire",
      route: "/moves",
    },
    {
      name: "Buscar Pokemon",
      bgColor: "water",
      route: "/search",
    },
    {
      name: "Quién es este Pokemon?",
      bgColor: "ground",
      route: "/quiz",
    },
    {
      name: "Combinación de tipos",
      bgColor: "poison",
      route: "/combination",
    },
  ];
  return (
    <>
      {navButtonsArray.map((navButton) => (
        <Stack
          align="center"
          as={Link}
          bg={navButton.bgColor}
          borderRadius={20}
          boxShadow="0px 5px  3px #ccc"
          height={16}
          isInline
          justifyContent="space-between"
          key={navButton.name}
          overflow="hidden"
          padding={3}
          _hover={{ opacity: 0.8 }}
          to={navButton.route}
          onClick={functionOnClick !== null ? functionOnClick : undefined}
        >
          <Text color="white">{navButton.name}</Text>
          <Image
            alt="pokeball"
            marginRight={-7}
            opacity="0.2"
            src="../assets/ui/pokeball.svg"
            width={20}
          />
        </Stack>
      ))}

      <Stack
        align="center"
        bg="fighting"
        borderRadius={20}
        boxShadow="0px 5px  3px #ccc"
        height={16}
        overflow="hidden"
        isInline
        justifyContent="space-between"
        padding={3}
        _hover={{ opacity: 0.8 }}
        cursor="pointer"
        onClick={() =>
          window.open("https://sebamar.site/", "_blank")
        }
      >
        <Text color="white">Acerca de mi</Text>
        <Image
          alt="pokeball"
          marginRight={-7}
          opacity={0.2}
          src="../assets/ui/pokeball.svg"
          width={20}
        />
      </Stack>
    </>
  );
};

export default NavButtons;
