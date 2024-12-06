import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Divider, Heading, HStack, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Divider margin="20px" />
      <HStack justifyContent="center" alignItems="center">
        <Heading fontSize="12px">
          Design and Developed by- Vishwa Shetty
        </Heading>
        <Link href="https://www.linkedin.com/in/vishwa-kalshetty/" isExternal>
          <ExternalLinkIcon mx="2px" />
        </Link>
      </HStack>
    </>
  );
};

export default Footer;
