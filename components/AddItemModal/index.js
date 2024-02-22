import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Stack, TextField } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 1000,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  px: 4,
  py:8,
};

 function AddItemModal({open,handleClose,invoiceData,saveInvoiceData}) {
    const [itemDetails, setItemDetails] = React.useState({
      id:"",
      name: "",
      quantity: "",
      unitPrice: "",
      totalAmount: "",
    });

    function saveItemDetails(key, value) {
        setItemDetails((prevData) => ({
          ...prevData,
          [key]: value,
        }));
      }

    function handleAddItem() {
        let oldArray = structuredClone(invoiceData.itemDetails)
        let itemDetailsCopy = itemDetails
        itemDetailsCopy.id = uuidv4()
        console.log("itemDetailsCopy",itemDetailsCopy)
        oldArray.push(itemDetailsCopy)
        saveInvoiceData("itemDetails",oldArray)
        handleClose()
        setItemDetails({})
    }


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Stack direction={{xs:"column", md:"row"}} gap={3} sx={{width:"100%", mb:3}}>
        <TextField
          id="outlined-basic"
          label="Item Name/Desc"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          sx={{ maxWidth: 500 }}
          value={itemDetails.name}
          onChange={(e)=>saveItemDetails("name",e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Quantity"
          variant="outlined"
          sx={{ width: 250 }}
          fullWidth
          type='number'
          value={itemDetails.quantity}
          onChange={(e)=>saveItemDetails("quantity",e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Unit Price"
          variant="outlined"
          sx={{ width: 250 }}
          fullWidth
          value={itemDetails.unitPrice}
          type='number'
          onChange={(e)=>saveItemDetails("unitPrice",e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Total Amount"
          variant="outlined"
          sx={{ width: 300 }}
          fullWidth
          type='number'
          value={itemDetails.totalAmount}
          onChange={(e)=>saveItemDetails("totalAmount",e.target.value)}
        />
      </Stack>
      <Stack gap={1} direction={"row"} justifyContent={"right"}>
          <Button variant='contained' onClick={handleAddItem}> Confirm </Button>
          <Button variant='outlined' onClick={handleClose}> Cancel </Button>
      </Stack>
        </Box>
      </Modal>
    </div>
  );
}


export default AddItemModal;