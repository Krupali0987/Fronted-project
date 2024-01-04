import React, { useState } from 'react';
import { Box, Popover, FormControl, InputLabel, TextField, MenuItem, Select } from '@mui/material';
import CustomButton from '../Buttons/Button';


const AgencyFilterModal = ({ open, anchorEl, handleClose, getFilterData }) => {
    const [agencyData, setAgencyData] = useState({ application_name: "",associated_programme: "", status: "" })
    const id = open ? 'simple-popover' : undefined;
    const handleOnChange = (e) => {
        setAgencyData({ ...agencyData, [e.target.name]: e.target.value })

    }
    const handleSubmit = () => {

        getFilterData(agencyData);
        handleClose();
    }
    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <Box className="flex justify-center flex-col">
                <TextField
                    onChange={(e) => handleOnChange(e)}
                    value={agencyData?.application_name}
                    name="application_name"
                    required
                    id="outlined-required"
                    label="Required"

                />

                <FormControl fullWidth >
                    <InputLabel id="demo-simple-select-label">Programme Name</InputLabel>
                    <Select
                        name="associated_programme"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={(e) => handleOnChange(e)}
                        value={agencyData.associated_programme}
                        label="Programme Name"

                    >
                        <MenuItem value="Ten">Ten</MenuItem>
                        <MenuItem value="Twenty">Twenty</MenuItem>
                        <MenuItem value="Thirty">Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth className='!w-[300px]'>
                    <InputLabel id="demo-simple-select-label">status</InputLabel>
                    <Select
                        name="status"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={(e) => handleOnChange(e)}
                        value={agencyData.status}
                        label="Status"

                    >
                        <MenuItem value="active">Active</MenuItem>
                        <MenuItem value="inActive">inActive</MenuItem>

                    </Select>
                </FormControl>


            </Box>


            <CustomButton type="primary" title="Cancel" handleClick={() => handleClose()} />
            <CustomButton type="primary" title="Create" handleClick={() => handleSubmit()} />

        </Popover>
    )
}
export default AgencyFilterModal;