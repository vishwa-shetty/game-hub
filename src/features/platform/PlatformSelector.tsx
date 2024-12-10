import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import gameStore from "../../store";
import { usePlatform } from "./usePlatform";

const PlatformSelector = () => {
  const { data, error } = usePlatform();

  const platformId = gameStore((s) => s.gameQuery.platformId);
  const onSelectPlatform = gameStore((s) => s.setPlatform);

  //pre computing data for avoiding excessive loop
  const platformData = data?.results || [];
  const selectedPlatform =
    platformId !== -1
      ? platformData?.find((p) => p.id === platformId)?.name
      : "All";

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Platform: ${selectedPlatform}`}
      </MenuButton>

      <MenuList>
        <MenuItem onClick={() => onSelectPlatform(-1)}>All</MenuItem>
        {platformData?.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.name}
            onClick={() => onSelectPlatform(platform?.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
