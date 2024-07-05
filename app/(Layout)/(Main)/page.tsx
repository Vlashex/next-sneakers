import { Container } from "@mui/material";
import React from "react";
import Banner from "./components/bunner";
import SneakersList from "./components/sneakersList";

export default async function Page() {

  return (
    <Container maxWidth='md'>
      <Banner/>
      
      <SneakersList/>
    </Container>
  );
}
