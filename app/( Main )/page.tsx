import { Button, Container, Input, Stack, Typography } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React from "react";
import Banner from "./components/bunner";
import SneakersList from "./components/sneakersList";

export default function Home() {

  return (
    <Container maxWidth='md'>
      <Banner/>

      <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{mb: '40px'}}>
        <Typography variant="h3" fontWeight={600}>Все кроссовки</Typography>
        <Stack direction='row' sx={{border: '1px solid #F3F3F3', borderRadius: '10px', p: '5px 0'}}>
          <Button startIcon={<SearchOutlinedIcon/>} 
          sx={{
            p: '5px 5px 5px 10px', 
            m: '', 
            minWidth: '0', 
            overflow: 'hidden', 
            width: 'min-content',
            ":hover": {m: ''}
            }}
          />
          <Input disableUnderline placeholder="Поиск..."/>
        </Stack>
      </Stack>
      <Stack direction='row' flexWrap='wrap' justifyContent='space-between'>
        <SneakersList/>
      </Stack>
    </Container>
  );
}
