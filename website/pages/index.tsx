import { NextPage } from "next";
import Head from "next/head";
import UserInput from "../components/UserInput";
import { Container, Spacer, VStack } from "@chakra-ui/react";
import Header from "../components/Heading";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hand Written Digit Recognizer</title>
      </Head>

      <VStack
        bgGradient="linear(orange.100 0%, pink.100 40%, purple.200 70%)"
        maxW="100%"
        height={900}
      >
        <Header />
        <UserInput />
      </VStack>
    </>
  );
};

export default Home;
