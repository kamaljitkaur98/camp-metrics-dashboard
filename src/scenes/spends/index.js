import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataSpends } from "../../data/mockData"

import AdminPanelSettingsOutlinedIcon  from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon  from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon  from "@mui/icons-material/SecurityOutlined";

import Header from "../../components/Header"

const Spends = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)

    const columns = [
        {
            field: "id",
            headerName: "ID",
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
            field: "email",
            headerName: "Email",
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]} align="center" sx={{ marginTop: "15px" }}>
                    ${params.row.cost}
                </Typography>
            )
        },
        {
            field: "phone",
            headerName: "Phone",
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        }
        
    ]

    return (
        <Box m="20px">
            <Header title="Spends Tracker" subtitle="All cost of influencers paid is displayed here" />
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
                        "& .MuiCheckbox-root": {
                            color: `${colors.greenAccent[200]} !important`
                        }
                    }}>
                    <DataGrid 
                    checkboxSelection
                    rows={mockDataSpends}
                    columns={columns}
                    />
                </Box>
        </Box>
    )
}

export default Spends;