import React, { useState } from 'react';
import { DialogActions, DialogTitle, FormControl, InputLabel, MenuItem, DialogContent, Select, DialogContentText, Dialog, TextField, Box } from '@mui/material';
import CustomButton from '../Buttons/Button';
import axios from "axios";


export const CreateApplicationModal = ({ openModal, handleOk, handleClose, getData }) => {
    const [applicationData, setApplicationData] = useState({ application_name: "", associated_programme: "", status: "" })
    const [applications, setApplications] = useState([])
    const handleOnChange = (e) => {
        setApplicationData({ ...applicationData, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        setApplications([...applications, applicationData]);
        getData([...applications, applicationData]);



        axios.post('http://localhost:3002/createApplication', {
            CovrageType: applicationData?.application_name,
            ProgramName: applicationData?.associated_programme,
            Status: applicationData?.status,
        
        })
            .then(function (response) {
                console.log(response);
                axios.get('http://localhost:3002/Application').then((response) => {
                    console.log(response.data);
                    getData(response.data);
                });
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    // console.log(applicationData);

    

    return (
        <div>
            <Dialog maxWidth={900} open={openModal} onClose={handleClose}>
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <Box className="flex justify-around">
                        <TextField
                            onChange={(e) => handleOnChange(e)}
                            value={applicationData?.application_name}
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
                                value={applicationData.associated_programme}
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
                                value={applicationData.status}
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