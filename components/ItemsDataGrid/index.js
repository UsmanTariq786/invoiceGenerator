import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, IconButton, Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';




function ItemsDataTable({ itemsData,setInvoiceData }) {

  console.log("btang", itemsData);
    


    const columns = [
      {
        field: "name",
        headerName: "Name",
        width: 400,
      },
      {
        field: "quantity",
        headerName: "Quantity",
        width: 150,
      },
      {
        field: "unitPrice",
        headerName: "Unit Price",
        width: 150,
      },
      {
        field: "totalAmount",
        headerName: "Total Amount",
        width: 150,
      },
      {
        field: "delete", // Custom field for the delete button
        headerName: "",
        width: 100,
        sortable: false, // Disable sorting for this column
        filterable: false, // Disable filtering for this column
        renderCell: (params) => (
          <Stack direction={"row"} gap={1}>
            {/* <Tooltip title={"Edit"}>
              <IconButton onClick={() => handelUpdateRow(params.row) }>
                <EditIcon sx={{ color: "green" }} />
              </IconButton>
            </Tooltip> */}
            <Tooltip title="Delete">
              <IconButton onClick={() => handleDeleteRow(params.row.id)}>
                <DeleteIcon sx={{ color: "red" }} />
              </IconButton>
            </Tooltip>
          </Stack>
        ),
      },
    ];

      

    const handelUpdateRow =()=>{

    }

  const handleDeleteRow =(id)=>{
    const afterDeletion = itemsData.filter((item)=>item.id !==id)
    console.log("heeeloo",afterDeletion)

    setInvoiceData((prevData) => ({
        ...prevData,
        itemDetails: afterDeletion,
      }));

  }





  return (
    <Box sx={{ m: 3 }}>
      {itemsData.length !== 0 && (
        <DataGrid rows={itemsData} columns={columns} />
      )}
    </Box>
  );
}

export default ItemsDataTable;
