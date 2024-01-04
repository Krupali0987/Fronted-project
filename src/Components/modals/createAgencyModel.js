import React,{useState} from 'react';
import { DialogActions, DialogTitle, FormControl, InputLabel, MenuItem, DialogContent, Select,  Dialog, TextField, Box } from '@mui/material';
import CustomButton from '../Buttons/Button';



export const CreateAgencyModal = ({ openModal,  handleClose ,getData}) => {
    const [agencyData, setAgencyData] = useState({ application_name: "", associated_programme: "", status: "" })
    const [agencys, setAgencys] = useState([])
    const handleOnChange = (e) => {
        setAgencyData({ ...agencyData, [e.target.name]: e.target.value })

    }

    const handleSubmit = () => {
        setAgencys([...agencys, agencyData]);
        getData([...agencys, agencyData]);
        
    }
    return (
        <div>
            <Dialog open={openModal} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <Box className="flex justify-around">
                        <TextField
                            onChange={(e) => handleOnChange(e)}
                            value={agencyData?.application_name}
                            name="application_name"
                            required
                            id="outlined-required"
                            label="Required"

                        />

                        <FormControl fullWidth className='!w-[300px]'>
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
                                <MenuItem value="Active">Active</MenuItem>
                                <MenuItem value="inActive">inActive</MenuItem>

                            </Select>
                        </FormControl>


                    </Box>
                </DialogContent>
                <DialogActions>
                    <CustomButton type="primary" title="Cancel" handleClick={() => handleClose()} />
                    <CustomButton type="primary" title="Create" handleClick={() => handleSubmit()} />
                </DialogActions>
            </Dialog>
        </div>
    )
}