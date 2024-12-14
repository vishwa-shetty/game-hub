import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import gameStore from "../../store";

const SortSelector = () => {
  const sortOrder = gameStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = gameStore((s) => s.setSortOrder);

  const sortValues = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const selectedSort = sortValues.find((s) => sortOrder === s.value);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Sort By: ${sortOrder ? selectedSort?.label : "Relevence"} `}
      </MenuButton>
      <MenuList>
        {sortValues.map((sort) => (
          <MenuItem key={sort.value} onClick={() => setSortOrder(sort?.value)}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
