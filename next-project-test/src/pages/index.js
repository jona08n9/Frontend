import Link from "next/link";
import Anchor from "@/components/Anchor";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to dog page</title>
      </Head>
      <h1>Hello from Home</h1>
      <Anchor href="/dogs/bufas">Bufas link</Anchor>
      <Anchor href="/dogs/henry">Henry link</Anchor>
      <Anchor href="/dogs/snoopy">Snoopy link</Anchor>
      <Anchor href="/dogs/steve">Steve link</Anchor>
    </>
  );
}
