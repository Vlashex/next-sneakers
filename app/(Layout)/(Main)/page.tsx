import { Container } from "@mui/material";
import React from "react";
import Banner from "./components/bunner";
import SneakersList from "./components/sneakersList";
import { prisma } from "@/lib/prisma";

export default async function Page() {

  const data = await prisma.sneakersCardData.findMany()

  return (
    <Container maxWidth='md'>
      <Banner/>
      
      <SneakersList/>
    </Container>
  );
}
