import { NextPage } from "next";
import Head from "next/head";
import { Container, Heading } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Digit Recognizer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Heading>Digit Recognizer</Heading>
      </Container>
    </>
  );
};

export default Home;
