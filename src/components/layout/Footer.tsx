import { Divider, HStack, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Divider margin="20px" />
      <HStack justifyContent="center" alignItems="center">
        <Link href="https://www.linkedin.com/in/vishwa-kalshetty/" isExternal>
          Design and Developed by- Vishwa Shetty
        </Link>
      </HStack>
    </>
  );
};

export default Footer;
