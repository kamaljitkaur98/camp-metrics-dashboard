import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockCampaignData } from "../../data/mockData"

import AdminPanelSettingsOutlinedIcon  from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon  from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon  from "@mui/icons-material/SecurityOutlined";

import Header from "../../components/Header"

const Campaign = () => {
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
            field: "influencer_name",
            headerName: "Influence Name",
            flex: 1,
            cellClassName: "name-column--cell",
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: "product",
            headerName: "Product",
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: "date_live",
            headerName: "Campaign Date",
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: "total_costing",
            headerName: "Total Costing",
            flex: 1,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: "status",
            headerName: "Status",
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            renderCell : ({row: {status}}) => {
                return(
                    <Box width="60%" m="10px auto" p="5px" display="flex" 
                    justifyContent="center"
                    backgroundColor={
                        status === "Live" ?
                        colors.greenAccent[600] :
                        colors.grey[600]
                    }
                    borderRadius="4px"
                    >
                        {status === "Live" && <AdminPanelSettingsOutlinedIcon />}
                        {status === "manager" && <SecurityOutlinedIcon />}
                        {status === "user" && <LockOpenOutlinedIcon />}
                        <Typography color={colors.grey[100]} sx={{ ml: "5px"}}>
                            {status}
                        </Typography>
                    </Box>
                )
            }
        }
    ]

    return (
        <Box m="20px">
            <Header title="Campaign Manager" subtitle="All campaigns run are visible here" />
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
                        }
                    }}>
                    <DataGrid 
                    rows={mockCampaignData}
                    columns={columns}
                    />
                </Box>
        </Box>
    )
}

export default Campaign;