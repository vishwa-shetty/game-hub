import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../../models/games";
import { getPlatForm, usePlatform } from "../hooks/usePlatform";

interface Props {
  selectPlatformId?: number;
  onSelectPlatform: (platform: Platform | null) => void;
}

const PlatformSelector = ({ selectPlatformId, onSelectPlatform }: Props) => {
  const { data, error } = usePlatform();
  const platform = getPlatForm(selectPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Platform: ${platform ? platform?.name : "All"}`}
      </MenuButton>

      <MenuList>
        <MenuItem onClick={() => onSelectPlatform(null)}>All</MenuItem>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.name}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
