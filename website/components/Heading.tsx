import { Container, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Container maxW={900} bg="blue.900" textAlign="center" padding="4">
      <Heading fontSize="50px" color="blue.100" fontFamily="Chalkboard" as="b">
        Hand Digit Recognizer Website
      </Heading>
      <br />
    </Container>
  );
};
export default Header;
