import react, { useState, useRef, useEffect } from 'react';

import { Box, Typography, Card, Grid, Divider, Container, Tooltip, Button, Table, TableHead, TableRow, TableCell, TableBody, TableFooter, TableContainer, styled } from '@mui/material';
import { format } from 'date-fns';
import numeral from 'numeral';
// import Logo from '/images/googleBussinessIcon.png';
// import Logo from 'src/';
import DownloadTwoToneIcon from '@mui/icons-material/DownloadTwoTone';
import PictureAsPdfTwoToneIcon from '@mui/icons-material/PictureAsPdfTwoTone';
import { PDFExport, PDFMargin, savePDF } from '@progress/kendo-react-pdf';

const BoxWrapper = styled(Box)(
  ({ theme }) => `
  border-radius: 1;
  // background: white;
`
);

const TableWrapper = styled(Box)(
  ({ theme }) => `
     border: 1px solid rgba(102,102,102,0.5);
     margin: 15 0;
     margin-top: 45px;
     border-radius:5px;
`
);

const LogoWrapper = styled(Box)(
  () => `
    width: '52px'
`
);

const InvoiceToki = ({invoiceData,setViewPdf}) => {
  const [totalPrice, setTotalPrice] = useState(0)
  
  useEffect(() => {
    const sumWithInitial = invoiceData.itemDetails.reduce((accumulator, currentValue) => accumulator + parseInt(currentValue.totalAmount), 0);
    console.log('ccc', sumWithInitial);
    setTotalPrice(sumWithInitial)

  }, [invoiceData.itemDetails]);

  // const date = invoiceData.date
  // const formattedDate = date.toLocaleString()
  // console.log("formattedDate", format(new Date(invoiceData.date), 'MM/dd/yyyy'))
  //                       // {/* {format(invoiceData?.date, 'dd MMMM yyyy')} */}






  // const [items] = useState(itemsList);
  const pdfExportComponent = useRef(null);

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  return (
    <>
      <Box display={"flex"} justifyContent={"space-between"} m={2}>
        <Button variant='contained'  onClick={()=>setViewPdf(false)}>
          Back
        </Button>
        <Button variant='contained' color='error' onClick={exportPDFWithComponent}>
          Create Pdf
        </Button>
      </Box>
      <PDFExport ref={pdfExportComponent} paperSize='A4' 
        scale={0.7}
        // margin={{ top: 10, left: -10, right: 0, bottom: 0 }}
        >
        <Container maxWidth='md'>
          <Card
            sx={{
              py: 3,
              mb: 3,
              backgroundColor: 'rgba(253, 237, 200, 0.1)',
              // backgroundImage: "linear-gradient(#FDEDC8, #FDEDC8)"
              // backgroundImage:"url(/images/pdfBackground.jpg)",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              
            }}>
            <Box
              sx={
                {
                  // backgroundColor: 'rgba(253, 237, 200, 0.1) !important',
                }
              }>
              <Box display='flex' alignItems='flex-start' justifyContent='space-between'>
                <Box>
                  <Typography variant='h4' gutterBottom>
                    Invoice
                  </Typography>
                  <Typography variant='h5' color='text.secondary'>
                    #{invoiceData?.invoiceNo}
                  </Typography>
                </Box>
                <Box display='flex' flexDirection='column'>
                  <LogoWrapper>
                    {/* <Logo /> */}
                    <img style={{ height: '80px', widht: '80px' }} src='/images/googleBussinessIcon.png' alt='' />
                  </LogoWrapper>
                  <Typography
                    sx={{
                      py: 2,
                    }}
                    variant='h6'
                    fontWeight={'bold'}>
                    {'Sharp Electronics and Industrial Services'}
                  </Typography>
                  <Typography variant='h6' fontWeight='normal'>
                    Manga Road
                  </Typography>
                  <Typography variant='h6' gutterBottom fontWeight='normal'>
                    Near Riwind Gol chakar
                  </Typography>
                </Box>
              </Box>
              <Divider
                sx={{
                  my: 4,
                }}
              />

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography variant='subtitle1' gutterBottom>
                    Invoice for:
                  </Typography>
                  <Typography
                    sx={{
                      pb: 2,
                      fontWeight: 'bold',
                    }}
                    variant='body1'>
                    {invoiceData?.companyName}
                  </Typography>
                  <Typography variant='body1' fontWeight='normal'>
                  {invoiceData?.companyAdress}
                  </Typography>
                  {/* <Typography variant='body1' gutterBottom fontWeight='normal'>
                    Scotch Plains, NJ 07076
                  </Typography>
                  <Typography variant='body1' fontWeight='normal'>
                    New York, USA
                  </Typography> */}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Grid container spacing={4} justifyContent={{ xs: 'flex-start', sm: 'flex-end' }}>
                    <Grid item>
                      <Typography variant='subtitle2' gutterBottom fontWeight={"bold"}>
                        Issued on:
                      </Typography>
                      <Typography
                        sx={{
                          pb: 2,
                        }}
                        variant='body2'>
                        {format(new Date(invoiceData.date), 'MM/dd/yyyy')}
                      </Typography>
                    </Grid>
             
                  </Grid>
        
                </Grid>
              </Grid>

              <TableWrapper>
                <TableContainer>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell style={{ width: '40%' }}>Item</TableCell>
                        <TableCell>Qty</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Total</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {invoiceData?.itemDetails.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell sx={{ width: '40%' }}>
                            <Typography>{item.name}</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>{item.quantity}</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography> Rs. {item.unitPrice}</Typography>
                          </TableCell>
                          <TableCell>
                            <Typography>Rs. {item.totalAmount}</Typography>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>

                  <Box display={'flex'} justifyContent={'right'} mr={3} my={2}>
                    <Box display={'flex'} alignContent={'center'}>
                      <Box mr={2} mb={-1}>
                        <Typography gutterBottom variant='caption' color='text.secondary' fontWeight='bold'>
                          Total:
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant='h5' fontWeight='bold'>
                          Rs. {totalPrice}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </TableContainer>
              </TableWrapper>
              <Box mt={5}>
                <Typography variant='subtitle2' gutterBottom>
                  Additional informations
                </Typography>
                <Typography variant='body2'>Repair Policy, Return Policy etc</Typography>
              </Box>
            </Box>
          </Card>
        </Container>
      </PDFExport>
    </>
  );
};

export default InvoiceToki;
