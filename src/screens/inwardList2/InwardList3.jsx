import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import man1 from '../../images/man1.jpg';
import man2 from '../../images/man2.jpg';
import man3 from '../../images/man3.jpg';


import classes from './InwardList3.module.css';
import { useState } from 'react';
import CustomModal from '../../Components/Modal/CustomModal';
import { Button } from '@mui/material';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

export default function FullWidthTabs() {
    const proposalData = {
        proposalNo: '5927013',
        agreementCode: '119592',
        customerName: 'Pravat Sharma',
        quoteNo: '',
        policyNo: '',
        premiumAmount: 11350,
        proposalSignedDate: '5/27/2024',
        coInsurance: 'N',
        pphc: 'N',
        inwardTypeStatus: 'proposal',
        ckycExists: 'Yes',
        ckycNumber: '12345678912345',
        panNumber: 'BGLPS0250E',
        statusHistory: 'Pending',
        assignedWorkGroup: 'Branch',
        assignedBranch: 'Jaipur',
    };


    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    const [showPopUp, setShowPopUp] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const closeModalFunction = () => {
        setShowPopUp(false);
    }

    return (<>


        <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            centered
        >
            <Tab label="Inward Details" {...a11yProps(0)} />
            <Tab label="Instrument Details" {...a11yProps(1)} />
            <Tab label="Supporting Documents" {...a11yProps(2)} />
        </Tabs>

        <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
        >
            <TabPanel value={value} index={0} >
                <div className={classes.InwardDetailsMain}>

                    <p><strong>Proposal No:</strong> {proposalData.proposalNo}</p>
                    <p><strong>Agreement Code:</strong> {proposalData.agreementCode}</p>
                    <p><strong>Customer Name:</strong> {proposalData.customerName}</p>
                    <p><strong>Quote No:</strong> {proposalData.quoteNo}</p>
                    <p><strong>Policy No:</strong> {proposalData.policyNo}</p>
                    <p><strong>Premium Amount:</strong> {proposalData.premiumAmount}</p>
                    <p><strong>Proposal Signed Date:</strong> {proposalData.proposalSignedDate}</p>
                    <p><strong>Co Insurance:</strong> {proposalData.coInsurance}</p>
                    <p><strong>PPHC:</strong> {proposalData.pphc}</p>
                    <p><strong>Inward Type Status:</strong> {proposalData.inwardTypeStatus}</p>
                    <p><strong>CKYC Exists:</strong> {proposalData.ckycExists}</p>
                    <p><strong>CKYC Number:</strong> {proposalData.ckycNumber}</p>
                    <p><strong>PAN Number:</strong> {proposalData.panNumber}</p>
                    <p><strong>Status History:</strong> {proposalData.statusHistory}</p>
                    <p><strong>Assigned Work Group:</strong> {proposalData.assignedWorkGroup}</p>
                    <p><strong>Assigned Branch:</strong> {proposalData.assignedBranch}</p>

                    <button className={classes.statusBtn} onClick={() => {
                        console.log('Update Status Button Pressed');
                        setShowPopUp(true);
                    }}>Update Status</button>
                    <button className={classes.assignWorkBtn} onClick={() => {
                        setShowPopUp(true);
                    }}>Assign Work Group</button>
                    {/* <button className={classes.assignedBranchBtn}>Assign Branch</button> */}


                </div>


            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                <div className={classes.InstrumentDetails}
                >

                    <p><strong>Instrument Type</strong> EFT</p>
                    <p><strong>Instrument Number</strong>12345 </p>
                    <p><strong>Instrument Amount</strong>11350</p>



                </div>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                <div>
                    <img src={man1} alt="" />
                    <img src={man2} alt="" />
                    <img src={man3} alt="" />
                </div>
            </TabPanel>
        </SwipeableViews>

        <div>
            <CustomModal
                open={showPopUp}
                onClose={() => setShowPopUp(false)}
                width={900}

                children={<Discrepancy closeModalFunction={closeModalFunction}/>}

            />



        </div>
    </>
    );
}

const Discrepancy = props => {

    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    return <>
        <div>
            <div className={classes.dropdownContainer}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Update Status</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={category}
                        
                        onChange={(e) => {
                            setCategory(e.target.value);
                        }}
                    >
                        <MenuItem value={'Insufficient Documents'}>Insufficient Documents</MenuItem>
                        <MenuItem value={'Wrong Documents'}>Wrong Documents</MenuItem>
                        <MenuItem value={'Premium and Payment Related'}>'Premium and Payment Related</MenuItem>
                        <MenuItem value={'Insufficient Information of PF'}>Insufficient Information of PF</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Discrepancy Sub-Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={subCategory}
                        label="Age"
                        onChange={(e) => {
                            setSubCategory(e.target.value);
                        }}
                    >
                        <MenuItem value={'Risk Related Documents'}>Risk Related Documents</MenuItem>
                        <MenuItem value={'AML &  KYC Documents'}>AML &  KYC Documents</MenuItem>
                        <MenuItem value={'Approvals'}>Approvals</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={{
                marginTop: 20,
                textAlign: 'center'
            }}>
            <button className={classes.statusBtn} onClick={() => {
                props.closeModalFunction();
            }}>Update</button>
            </div>
        </div>
    </>
}