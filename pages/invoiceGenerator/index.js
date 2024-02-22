import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import DatePickerValue from '../../components/dateFeild';
import AddItemModal from '../../components/AddItemModal';
import dayjs from 'dayjs';
import ItemsDataTable from '../../components/ItemsDataGrid';
import InvoiceTemplate from '../../components/InvoiceTemplate';
import InvoiceToki from '../../components/InvoiceToki';

const headingStyles = {
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  my: 5,
  backgroundColor: '#582C4D',
  color: 'white',
};

function InvoiceGenerator() {
  const [addItemModalFlag, setAddItemModalFlag] = useState(false);
  const [viewPdf, setViewPdf] = useState(false);
  const [invoiceData, setInvoiceData] = useState({
    invoiceNo: '',
    date: dayjs(new Date()),
    companyName: '',
    companyAdress: '',
    itemDetails: [],
  });

  function saveInvoiceData(key, value) {
    setInvoiceData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  }

  console.log('datainvoic', invoiceData);

  return (
    <>
      {viewPdf ? (
        <InvoiceToki invoiceData={invoiceData} setViewPdf={setViewPdf} />
      ) : (
        <Box backgroundColor='#582C4D'>
          <Box maxWidth={1000} mx={'auto'} backgroundColor={'white'}>
            <Box sx={{ ...headingStyles }}>
              <Typography sx={{ fontSize: 30 }}>General Details</Typography>
            </Box>
            <Stack gap={3} direction={'row'} justifyContent={'left'} alignItems='center' sx={{ m: 5 }}>
              <TextField id='outlined-basic' label='Invoice no' variant='outlined' sx={{ width: 200 }} onChange={(e) => saveInvoiceData('invoiceNo', e.target.value)} value={invoiceData.invoiceNo} />
              <Box sx={{ width: 200 }}>
                <DatePickerValue value={invoiceData.date} setValue={saveInvoiceData} />
              </Box>
            </Stack>
            <Box sx={{ ...headingStyles }}>
              <Typography sx={{ fontSize: 30 }}>Company Details</Typography>
            </Box>
            <Stack gap={4} sx={{ width: '80%', mx: 2 }}>
              <TextField id='outlined-basic' label='Company Name' variant='outlined' onChange={(e) => saveInvoiceData('companyName', e.target.value)} value={invoiceData.companyName} />
              <TextField id='outlined-basic' label='Company Adress' variant='outlined' onChange={(e) => saveInvoiceData('companyAdress', e.target.value)} value={invoiceData.companyAdress} />
            </Stack>
            <Box sx={{ ...headingStyles }}>
              <Typography sx={{ fontSize: 30 }}>Product Details</Typography>
            </Box>
            <ItemsDataTable itemsData={invoiceData.itemDetails} setInvoiceData={setInvoiceData} />
            <Stack spacing={3} width={200}>
              <Button
                variant='contained'
                onClick={() => {
                  setAddItemModalFlag(true);
                }}>
                Add item
              </Button>
              <Button
                variant='contained'
                color='warning'
                onClick={() => {
                  setViewPdf(true);
                }}>
                Pdf
              </Button>
            </Stack>
            <AddItemModal open={addItemModalFlag} handleClose={() => setAddItemModalFlag(false)} invoiceData={invoiceData} saveInvoiceData={saveInvoiceData} />
            {/* <InvoiceTemplate/> */}
          </Box>
        </Box>
      )}
    </>
  );
}

export default InvoiceGenerator;
