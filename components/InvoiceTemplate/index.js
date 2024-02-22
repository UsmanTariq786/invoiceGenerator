import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import EntriesTable from "../EntriesTable";

function InvoiceTemplate() {
  return (
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#a26769"}}>
        <Box sx={{ width: "800px", height: "800px", m:4, backgroundColor:"white", p:5,pt:7 }}>
          <Stack direction={"row"} sx={{justifyContent:"space-between"}}>
            <Stack>
              <Box>
                {/* <img src={`data:image/png;base64,${base64Image}`} alt="My Image" />  */}
                <Typography>Sharp Electronics and Industrial Services</Typography>
                <Typography>Manga road Riwind</Typography>
                <Typography>Ph# 012345678790</Typography>
              </Box>
              <Typography>Bill To</Typography>
              <Typography>Alam Cotton Mills</Typography>
              <Typography>Sundar state Riwind</Typography>
            </Stack>
            <Box>
              <Typography sx={{fontSize:30}}>INVOICE</Typography>
              <Typography sx={{fontWeight:"bold", fontSize:17}}>#2342</Typography>
            </Box>
          </Stack>











          InvoiceTemplate
        <EntriesTable/>
        </Box>  
    </Box>
  );
}

export default InvoiceTemplate;
