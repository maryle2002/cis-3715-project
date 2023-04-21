import { VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Heading";
import UserInput from "../components/UserInput";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hand Written Digit Recognizer</title>
      </Head>

      <VStack
        bgGradient="linear(orange.100 0%, pink.100 40%, purple.200 80%)"
        maxW="100%"
        height='800'
      >
        <Header />
        <UserInput />
      </VStack>
    </>
  );
};

export default Home;
