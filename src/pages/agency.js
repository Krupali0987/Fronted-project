import React, { useState, useMemo } from "react";
import { Box } from '@mui/material';
import CustomButton from "../Components/Buttons/Button";
import { CreateAgencyModal } from "../Components/modals/createAgencyModel";
import Table from "../Components/Table/Table";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import AgencyFilterModal from "../Components/modals/agencyFilterModel";
const columns = [{
    key: "application_name",

    title: "Agency Name",

},
{
    key: "associated_programme",

    title: "Asscociated Programme",

},
{
    key: "status",

    title: "Status",
    
}];

const Agency = () => {
    const [openModel, setOpenModal] = useState(false);
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const getFilteredData = useMemo(() => {



        if (filterData?.status || filterData?.associated_programme || filterData?.application_name) {
            const updatedStatusData = data?.filter((item) => item?.status.toLocaleLowerCase() === filterData?.status?.toLocaleLowerCase() || item?.associated_programme.toLocaleLowerCase() === filterData?.associated_programme?.toLocaleLowerCase()
                || item?.application_name.toLocaleLowerCase() === filterData?.application_name?.toLocaleLowerCase())
            return updatedStatusData
        };


        return data

    }, [filterData, data]);

    const open = Boolean(anchorEl);

    return (
        <Box>
            <Box className="flex justify-between">
                <CustomButton type="primary" title="Create Agency" handleClick={() => setOpenModal(true)} />
                <Box><FilterAltOutlinedIcon className="curser-pointer" onClick={(e) => handleClick(e)} /><span className="!font-bold">Filter</span></Box>
                <AgencyFilterModal open={open} anchorEl={anchorEl} handleClose={handleClose} getFilterData={(value) => setFilterData(value)} />
            </Box>
            <Table columns={columns} data={getFilteredData} />
            <CreateAgencyModal  getData={(values) => setData(values)} openModal={openModel} handleClose={() => setOpenModal(false)} handleOk={() => setOpenModal(false)} />
        </Box>
    )
}
export default Agency;