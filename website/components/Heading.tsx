import { Box, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box maxW={1000} marginTop='6' textAlign="center">
      <Heading fontSize="53px" color="purple.900" fontFamily="Helvetica" as="b" textTransform={'uppercase'} textShadow='3px 3px pink'>
        Hand Written Digit Recognizer
      </Heading>     
    </Box> 
  );
};
export default Header;
