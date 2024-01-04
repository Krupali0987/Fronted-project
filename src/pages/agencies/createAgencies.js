import React, {useMemo, useState} from "react";
import { Box } from '@mui/material';
import CustomButton from "../../Components/Buttons/Button";
import Table from "../../Components/Table/Table";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import FilterModal from "../../Components/modals/filtermodal";
import { CreateApplicationModal } from "../../Components/modals/createApplicationModal";
export const CreateAgencies = () => {

    const columns = [{
        key: "ProgramName",

        title: "Program Name",
    },
        {
            key: "CovrageType",

            title: "Coverage Types",
            render: (_, item) => (
                //    <MoreHorizIcon/>

                <ol>
                    {item?.CovrageType?.map((val, index) => {
                        return <li key={index}>{val}</li>
                    })}
                </ol>
            )

        },
        {
            key: "Status",

            title: "Status",

        },
        {
            key: "chooseindustry",
            title: "Choose Industry",
            render: (_, item) => {
                return (
                    <ul>
                        {item?.chooseindustry?.map((val) => {
                            return (
                                <li key={val?._id}>{val}</li>
                            )
                        })}
                    </ul>
                )
            }
        },
        {
            key: "choosestates",
            title: "States",
            render: (_, item) => {
                return (
                    <ul>
                        {item?.choosestates?.map((val) => {
                            return (
                                <li key={val?._id}>{val}</li>
                            )
                        })}
                    </ul>
                )
            }
        }

    ];

    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState([]);
    const handleOk = () => {
        setOpenModal(false)
    }

    const [filterData, setFilterData] = useState(null)

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const getFilteredData = useMemo(() => {

        if (filterData) {
            const newData = data?.filter((item) => item?.ProgramName === filterData?.program_name
                || item?.Status === filterData?.
                    Status
            )
            return newData;
        }
        else return data
    }, [filterData, data])

    return(
        <>
         <Box>
            <Box className="flex justify-between">
                <CustomButton type="primary" title="Create Applocation" handleClick={() => setOpenModal(true)} />
                <Box><FilterAltOutlinedIcon className="curser-pointer" onClick={(e) => handleClick(e)} /><span className="!font-bold">Filter</span></Box>
                <FilterModal open={open} anchorEl={anchorEl} handleClose={handleClose} getFilterData={(value) => setFilterData(value)} />
            </Box>
            <Table columns={columns} data={getFilteredData} />
            <CreateApplicationModal getData={(values) => setData(values)} open={openModal} handleClose={() => setOpenModal(false)} handleOk={handleOk}/>
        </Box>
        </>
    )
}