
import classes from './SearchInward.module.css';
import MenuItem from '@mui/material/MenuItem';

import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { useState } from 'react';
import CustomTable from '../../Components/table/CustomTable';
import CustomModal from '../../Components/Modal/CustomModal';

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import man1 from '../../images/man1.jpg';
import man2 from '../../images/man2.jpg';
import man3 from '../../images/man3.jpg';
import FullWidthTabs from '../inwardList2/InwardList3';
import classes2 from "../Dashboard/DashBoard.module.css";
import { NavLink } from 'react-router-dom';


const columns1 = [
  {
    label: "Proposal Number",
    id: "proposalNumber",
    hyperLink:true
  },
  {
    label: "Policy No",
    id: "policyNo",
  },
  {
    label: "Quote No",
    id: "quoteNo",
  },
  {
    label: "Customer Name",
    id: "customerName",
  },
  {
    label: "Product Name",
    id: "productName",
  },
  {
    label: "Premium Amount",
    id: "premiumAmount",
  },
  {
    label: "Submitted Date",
    id: "submittedDate",
  },
  {
    label: "Ops Received Date",
    id: "opsReceivedDate",
  },
  {
    label: "Proposal Signed Date",
    id: "proposalSignedDate",
  },
  // {
  //   label: "Co Insurance",
  //   id: "coInsurance",
  // },
  // {
  //   label: "PPHC",
  //   id: "pphc",
  // },
  // {
  //   label: "Agreement Code",
  //   id: "agreementCode",
  // },
];

const data1 = [
  {
    proposalNumber: "5926864",
    policyNo: "0000000000369583",
    quoteNo: "0000000009172689",
    customerName: "Pravat Sharma",
    productName: "Motor",
    premiumAmount: 234566,
    submittedDate: "1/1/2024",
    opsReceivedDate: "1/2/2024",
    proposalSignedDate: "1/2/2024",
    // coInsurance: "N",
    // pphc: "N",
    // agreementCode: 127146,
  },
];



const SearchInward = () => {
  // const [searchBy, setSearchBy ] = useState('');
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);

  // const handleClick = (event) => {
  //     setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //     setAnchorEl(null);
  // };

  // const handleMenuItemClick = () => {

  //     handleClose();


  // };
  const [dropDown1, setDropDown1] = useState('Select Method')
  const [showTable, setShowTable] = useState(false);
  const [page, setPage] = useState(0);
  const handleSearch = () => {
    setShowTable(true);
  }

  const dropDownValue = (e) => {
    setDropDown1(e.target.value);
    console.log('In dropdown', e.target.value);
  }

  const [modalIsOpen, setModalIsOpen] = useState(false);


  const cellClicked = () => {
    setOpenModal(true);
    setModalIsOpen(true)
  };
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return <>
    <CustomModal
      open={openModal}
      onClose={() => setOpenModal(false)}
      width={1200}
      children={<FullWidthTabs />}


    />
    <div className={classes.formFather}>
      <form>
        <div className={classes.SearchInwardMain}>
          <h3>Search By   </h3>
          <div className={classes.headingFather}>

            <div className={classes.heading}>


              <select onChange={dropDownValue}>
                <option value='Proposal Number'>Proposal Number</option>
                <option value='Agreement Code'>Agreement Code</option>
                <option value='Product Name'>Product Name</option>
                <option value='Customer Name'>Customer Name</option>
              </select>
              <input ></input>
              <button type='button' onClick={handleSearch}>Search</button>


            </div>

            <button className={classes2.newInwardBtn}><NavLink to='/inwardForm'>
              New Inward
            </NavLink>
            </button>


          </div>
        </div>
      </form>
    </div>
    <div className={classes.tableOutline}>

      {showTable && <CustomTable isNavLink={true} cellClicked={cellClicked} page={page} setPage={setPage} columns={columns1} data={data1} />}
    </div>




  </>
}

export default SearchInward;