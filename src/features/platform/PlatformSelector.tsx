import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import gameStore from "../../store";
import { getPlatForm, usePlatform } from "./usePlatform";

const PlatformSelector = () => {
  const { data, error } = usePlatform();

  const platformId = gameStore((s) => s.gameQuery.platformId);
  const onSelectPlatform = gameStore((s) => s.setPlatform);

  const platform = getPlatForm(platformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Platform: ${platformId ? platform?.name : "All"}`}
      </MenuButton>

      <MenuList>
        <MenuItem onClick={() => onSelectPlatform(-1)}>All</MenuItem>
        {data?.results.map((platform) => (
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
