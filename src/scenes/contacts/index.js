import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData"

import AdminPanelSettingsOutlinedIcon  from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon  from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon  from "@mui/icons-material/SecurityOutlined";

import Header from "../../components/Header"

const Contact = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.5,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: "registrarId",
            headerName: "Registrar ID",
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: "address",
            headerName: "Address",
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: "city",
            headerName: "City",
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: "zipCode",
            headerName: "Zip Code",
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
    ]

    return (
        <Box m="20px">
            <Header title="INFLUNCER CONTACTS" subtitle="List of contact information of influencers available here" />
                <Box m="40px 0 0 0" height="60vh" sx= {{ 
                        "& .name-column--cell": {
                            color: colors.greenAccent[300]
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: colors.blueAccent[700],
                            borderBottom: "none"
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "none",
                            backgroundColor: colors.blueAccent[700]
                        },
                        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                            color: `${colors.grey[100]} !important`
                        }
                    }}>
                    <DataGrid 
                    rows={mockDataContacts}
                    columns={columns}
                    slots={{
                        toolbar: GridToolbar,
                      }}
                    />
                </Box>
        </Box>
    )
}

export default Contact;