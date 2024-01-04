import React, { useState } from 'react';
import { Box, Popover, FormControl, InputLabel, TextField, MenuItem, Select } from '@mui/material';
import CustomButton from '../Buttons/Button';

const ProgramFilterModal = ({ open, anchorEl, handleClose, getFilterData }) => {
    const [applicationData, setApplicationData] = useState({ program_name: "", coverage_type: "", status: "", choose_Industry: "", states: "" })
    const id = open ? 'simple-popover' : undefined;

    
    const handleOnChange = (e) => {
        setApplicationData({ ...applicationData, [e.target.name]: e.target.value })

    }
    const handleSubmit = () => {

        getFilterData(applicationData);
        handleClose()
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
            <Box className="p-5">
                <Box className="flex justify-space-between">
                    <TextField
                        onChange={(e) => handleOnChange(e)}
                        value={applicationData?.program_name}
                        name="program_name"
                        required
                        id="outlined-required"
                        label="program_name"
                    />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">coverage_Name</InputLabel>
                        <Select
                            name="coverage_type"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={(e) => handleOnChange(e)}
                            value={applicationData.coverage_type}
                            label="coverage_type"

                        >
                            <MenuItem value="Life">Life</MenuItem>
                            <MenuItem value="health">Health</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <FormControl fullWidth >
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>

                    <Select
                        name="Status"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={(e) => handleOnChange(e)}
                        value={applicationData.status}
                        label="Status"
                    >
                        <MenuItem value="active">Active</MenuItem>
                        <MenuItem value="InActive">InActive</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth className='!w-[300px]'>
                    <InputLabel id="demo-simple-select-label">Choose_Industry</InputLabel>
                    <Select
                        name="Choose_Industry"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={(e) => handleOnChange(e)}
                        value={applicationData.choose_Industry}
                        label="Choose_Industry"

                    >
                        <MenuItem value="Mechanical">Mechanical</MenuItem>
                        <MenuItem value="Chemical">Chemical</MenuItem>

                    </Select>
                </FormControl>
                <FormControl fullWidth className='!w-[300px]'>
                    <InputLabel id="demo-simple-select-label">states</InputLabel>
                    <Select
                        name="states"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={(e) => handleOnChange(e)}
                        value={applicationData.states}
                        label="states"

                    >
                        <MenuItem value="CA">CA</MenuItem>
                        <MenuItem value="AL">AL</MenuItem>

                    </Select>
                </FormControl>

            </Box>

            <Box className="flex justify-between">
                <CustomButton type="primary" title="Cancel" handleClick={() => handleClose()} />
                <CustomButton type="primary" title="Create" handleClick={() => handleSubmit()} />
            </Box>
        </Popover>
    )
}
export default ProgramFilterModal;