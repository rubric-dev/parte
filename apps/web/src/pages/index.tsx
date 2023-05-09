import { Badge, Box } from "@parte-ds/ui";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Parte</title>
        <meta name="description" content="Parte design system playground" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box padding={30}>
          <Badge text="가운데 정렬" />
        </Box>
      </main>
    </>
  );
}
