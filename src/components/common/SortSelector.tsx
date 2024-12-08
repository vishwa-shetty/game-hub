import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Sort } from "../../models/games";

interface Props {
  selectedSortValue?: string;
  onSelectedSort: (Sort: Sort) => void;
}

const SortSelector = ({ selectedSortValue, onSelectedSort }: Props) => {
  const sortValues = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const selectedSort = sortValues.find((s) => selectedSortValue === s.value);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {`Sort By: ${selectedSortValue ? selectedSort?.label : "Relevence"} `}
      </MenuButton>
      <MenuList>
        {sortValues.map((sort) => (
          <MenuItem key={sort.value} onClick={() => onSelectedSort(sort)}>
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
