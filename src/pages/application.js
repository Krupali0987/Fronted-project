import React, { useMemo, useState,useEffect } from "react";
import { Box } from '@mui/material';
import CustomButton from "../Components/Buttons/Button";
import { CreateApplicationModal } from "../Components/modals/createApplicationModal";
import Table from "../Components/Table/Table";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FilterModal from "../Components/modals/filtermodal";
import axios from 'axios';

const columns = [
    {
        key: "application_name",

        title: "Application Name ",

    },
    {
        key: "associated_programme",

        title: "Associated Programme",

    },
    {
        key: "status",

        title: "Status",

    },
    {
        key: "",

        title: "Version",
        render: () => (
            <a href="#">Link Address</a>
        )
    }
    , {
        key: "",

        title: "Action",
        render: () => (
            //    <MoreHorizIcon/>

            <h1>sdds</h1>
        )
    }];
  
const Applications = () => {

    const [openModel, setOpenModal] = useState(false);
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState(null)
    console.log(filterData);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const getFilteredData = useMemo(() => {


        // if (filterData?.application_name) {
        //     const updated = data?.filter((item) => item?.application_name.toLocaleLowerCase() === filterData?.application_name?.toLocaleLowerCase())
        //     return updated
        // }
        // if (filterData?.associated_programme) {
        //     const updatedProgrammeData = data?.filter((item) => item?.associated_programme.toLocaleLowerCase() === filterData?.associated_programme?.toLocaleLowerCase())
        //     return updatedProgrammeData
        // }
        // if (filterData?.status) {
        //     const updatedStatusData = data?.filter((item) => item?.status.toLocaleLowerCase() === filterData?.status?.toLocaleLowerCase())
        //     return updatedStatusData
        // };   
        if (filterData?.status || filterData?.associated_programme || filterData?.application_name) {
            const updatedStatusData = data?.filter((item) => item?.status.toLocaleLowerCase() === filterData?.status?.toLocaleLowerCase() || item?.associated_programme.toLocaleLowerCase() === filterData?.associated_programme?.toLocaleLowerCase()
                || item?.application_name.toLocaleLowerCase() === filterData?.application_name?.toLocaleLowerCase())
            return updatedStatusData
        };


        return data

    }, [filterData, data]);

    

    const getData = () => {
        axios.get('http://localhost:3002/Application').then((response) => {
            console.log(response.data);
            setData(response.data)
        });
    }

    useEffect(() => {
        getData();
    }, [])

    console.log("===============getFilteredData", getFilteredData);
    const open = Boolean(anchorEl);
    return (
        <Box>
            <Box className="flex justify-between">
                <CustomButton type="primary" title="Create Applocation" handleClick={() => setOpenModal(true)} />
                <Box><FilterAltOutlinedIcon className="curser-pointer" onClick={(e) => handleClick(e)} /><span className="!font-bold">Filter</span></Box>
                <FilterModal open={open} anchorEl={anchorEl} handleClose={handleClose} getFilterData={(value) => setFilterData(value)} />
            </Box>
            <Table columns={columns} data={getFilteredData} />
            <CreateApplicationModal getData={(values) => setData(values)} openModal={openModel} handleClose={() => setOpenModal(false)} handleOk={() => setOpenModal(false)} />
        </Box>
    )
}
export default Applications;