import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaAndroid,
  FaApple,
  FaLinux,
  FaXbox,
  FaPlaystation,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import { Platform as PlatformType } from "../../models/games";
import { IconType } from "react-icons";

const Platform = ({ gamePlatforms }: { gamePlatforms: PlatformType[] }) => {
  const IconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: BsNintendoSwitch,
    web: BsGlobe,
    android: FaAndroid,
    mac: FaApple,
    ios: MdPhoneIphone,
    linux: FaLinux,
  };
  return (
    <HStack>
      {gamePlatforms.map((platforms) => (
        <Icon key={platforms.id} as={IconMap[platforms.slug]} />
      ))}
    </HStack>
  );
};

export default Platform;
