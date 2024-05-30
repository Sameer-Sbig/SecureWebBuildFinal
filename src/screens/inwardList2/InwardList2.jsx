import CustomModal from '../../Components/Modal/CustomModal';
import classes from './InwardList2.module.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';

const InwardList2 = () => {

    const [openModal, setOpenModal] = useState(false);
    const [value, setValue] = useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    // return <>
    //     <CustomModal>


    //     <Tabs
    //     value={value}
    //     onChange={handleChange}
    //     aria-label="wrapped label tabs example"
    //   >
    //     <Tab
    //       value="one"
    //       label="New Arrivals in the Longest Text of Nonfiction that should appear in the next line"
    //       wrapped
    //     />
    //     <Tab value="two" label="Item Two" />
    //     <Tab value="three" label="Item Three" />
    //   </Tabs>

    //     </CustomModal>


    // </>



    return <>
        <div>



            <div className={classes.Card}>
                <div>
                    Inward list
                </div>
                <div className={classes.gridMain}>

                    <label htmlFor="">Proposal No :</label>
                    <input></input>
                    <label>Customer Name</label>
                    <input></input>

                    <label>Agreement Code</label>
                    <input></input>

                    <label>Policy No</label>
                    <input></input>


                    <label>Proposal Signed Date</label>
                    <input></input>


                    <label>Co Insurance</label>
                    <input></input>


                    <label>PPHC</label>
                    <input></input>


                    <label>Inward Type Status</label>
                    <input></input>

                    <label>CYKC Exists</label>
                    <input></input>

                    <label>CKYC Number</label>
                    <input></input>


                    <label>Pan Number</label>
                    <input></input>

                    <label>Status History</label>
                    <input></input>

                    <label>Assigned Work Group</label>
                    <input></input>


                    <label>Assigned Branch</label>
                    <input></input>
                </div>


                <div className={classes.Grid2}>


                    <label>Instrument Type</label>
                    <input></input>

                    <label>Instrument No</label>
                    <input></input>

                    <label>Instrument Amount</label>
                    <input></input>











                </div>

                <div className={classes.Grid3}>



                </div>
            </div>
        </div>



    </>
}

export default InwardList2;