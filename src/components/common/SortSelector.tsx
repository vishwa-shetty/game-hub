import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  selectedSort: string | null;
  onSelectedSort: (value: string) => void;
}

const SortSelector = ({ selectedSort, onSelectedSort }: Props) => {
  const sortValues = [
    "Name",
    "Released",
    "Added",
    "Created",
    "Updated",
    "Rating",
    "Metacritic",
  ];
  const camelCaseSort =
    selectedSort &&
    selectedSort.slice(0, 1).toUpperCase() + selectedSort.slice(1);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Sort By: ${selectedSort ? camelCaseSort : "Relevence"} `}
      </MenuButton>
      <MenuList>
        {sortValues.map((value) => (
          <MenuItem
            key={value}
            onClick={() => onSelectedSort(value.toLowerCase())}
          >
            {value}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
