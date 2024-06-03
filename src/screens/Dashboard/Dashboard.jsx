import React, { useState } from 'react';
import { Box, Modal, Typography } from "@mui/material";
import CustomTable from "../../Components/table/CustomTable";
import classes from "./DashBoard.module.css";
import CustomModal from '../../Components/Modal/CustomModal';
import { NavLink } from 'react-router-dom';
import { green } from '@mui/material/colors';

const columns = [
  {
    label: "Product",
    id: "product",
  },
  {
    label: "Discrepancy",
    id: "discrepancy",
    hyperLink: true
  },
  {
    label: "Discrepancy Submitted",
    id: "discrepancyResolutionSubmitted",
  },
  {
    label: "Discrepancy Resolved",
    id: "discrepancyResolved",
  },
  {
    label: "Issued",
    id: "issued",
  },
  {
    label: "Pending",
    id: "pending",
  },
  {
    label: "Pending For Submission",
    id: "pendingForSubmission",
  },
  {
    label: "Proposal Sourced",
    id: "proposalSourced",
  },
  // {
  //   label: "Quote Created",
  //   id: "quoteCreated",
  // },
  // {
  //   label: "Refer Uw Approved",
  //   id: "referUwApproved",
  // },
  // {
  //   label: "Refer Uw Rejected",
  //   id: "referUwRejected",
  // },
  // {
  //   label: "Replenishment Done",
  //   id: "replenishmentDone",
  // },
  // {
  //   label: "Verified",
  //   id: "verified",
  // },
];

const data = [
  {
    product: "Engineering",
    discrepancy: 0,
    discrepancyResolutionSubmitted: 1,
    discrepancyResolved: 0,
    issued: 2,
    pending: 0,
    pendingForSubmission: 5,
    proposalSourced: 0,
    quoteCreated: 9,
    referUwApproved: 10,
    referUwRejected: 11,
    replenishmentDone: 20,
    verified: 15,
  },
  {
    product: "Fire",
    discrepancy: 31,
    discrepancyResolutionSubmitted: 10,
    discrepancyResolved: 25,
    issued: 28,
    pending: 84,
    pendingForSubmission: 5,
    proposalSourced: 21,
    quoteCreated: 1,
    referUwApproved: 3,
    referUwRejected: 5,
    replenishmentDone: 3,
    verified: 6,
  },
  {
    product: "Health",
    discrepancy: 19,
    discrepancyResolutionSubmitted: 1,
    discrepancyResolved: 16,
    issued: 36,
    pending: 45,
    pendingForSubmission: 4,
    proposalSourced: 11,
    quoteCreated: 3,
    referUwApproved: 1,
    referUwRejected: 3,
    replenishmentDone: 2,
    verified: 7,
  },
  {
    product: "Liability",
    discrepancy: 3,
    discrepancyResolutionSubmitted: 5,
    discrepancyResolved: 5,
    issued: 1,
    pending: 2,
    pendingForSubmission: 5,
    proposalSourced: 1,
    quoteCreated: 5,
    referUwApproved: 2,
    referUwRejected: 2,
    replenishmentDone: 2,
    verified: 1,
  },
  {
    product: "Loan",
    discrepancy: 1,
    discrepancyResolutionSubmitted: 3,
    discrepancyResolved: 1,
    issued: 3,
    pending: 2,
    pendingForSubmission: 5,
    proposalSourced: 3,
    quoteCreated: 5,
    referUwApproved: 5,
    referUwRejected: 6,
    replenishmentDone: 4,
    verified: 3,
  },
  {
    product: "Miscellaneous",
    discrepancy: 7,
    discrepancyResolutionSubmitted: 4,
    discrepancyResolved: 7,
    issued: 7,
    pending: 19,
    pendingForSubmission: 2,
    proposalSourced: 4,
    quoteCreated: 4,
    referUwApproved: 3,
    referUwRejected: 3,
    replenishmentDone: 1,
    verified: 6,
  },
  {
    product: "Motor",
    discrepancy: 13,
    discrepancyResolutionSubmitted: 5,
    discrepancyResolved: 9,
    issued: 22,
    pending: 21,
    pendingForSubmission: 9,
    proposalSourced: 11,
    quoteCreated: 1,
    referUwApproved: 10,
    referUwRejected: 1,
    replenishmentDone: 5,
    verified: 3,
  },
  {
    product: "Personal Accident",
    discrepancy: 1,
    discrepancyResolutionSubmitted: 4,
    discrepancyResolved: 4,
    issued: 1,
    pending: 5,
    pendingForSubmission: 5,
    proposalSourced: 6,
    quoteCreated: 10,
    referUwApproved: 11,
    referUwRejected: 11,
    replenishmentDone: 12,
    verified: 12,
  },
];

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const columns1 = [
  {
    label: "Proposal Number",
    id: "proposalNumber",
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
  {
    label: "Co Insurance",
    id: "coInsurance",
  },
  {
    label: "PPHC",
    id: "pphc",
  },
  {
    label: "Agreement Code",
    id: "agreementCode",
  },
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
    coInsurance: "N",
    pphc: "N",
    agreementCode: 127146,
  },
  {
    proposalNumber: "5926864",
    policyNo: "0000000000369583",
    quoteNo: "0000000009172689",
    customerName: "Bharat H",
    productName: "Motor",
    premiumAmount: 234566,
    submittedDate: "1/1/2024",
    opsReceivedDate: "1/2/2024",
    proposalSignedDate: "1/2/2024",
    coInsurance: "N",
    pphc: "N",
    agreementCode: 127146,
  },
  {
    proposalNumber: "5926864",
    policyNo: "0000000000369583",
    quoteNo: "0000000009172689",
    customerName: "Sameer K",
    productName: "Health",
    premiumAmount: 234566,
    submittedDate: "1/1/2024",
    opsReceivedDate: "1/2/2024",
    proposalSignedDate: "1/2/2024",
    coInsurance: "N",
    pphc: "N",
    agreementCode: 127146,
  },
  {
    proposalNumber: "5926864",
    policyNo: "0000000000369583",
    quoteNo: "0000000009172689",
    customerName: "Aray",
    productName: "Motor",
    premiumAmount: 234566,
    submittedDate: "1/1/2024",
    opsReceivedDate: "1/2/2024",
    proposalSignedDate: "1/2/2024",
    coInsurance: "N",
    pphc: "N",
    agreementCode: 127146,
  },
  {
    proposalNumber: "5926864",
    policyNo: "0000000000369583",
    quoteNo: "0000000009172689",
    customerName: "Shivani K",
    productName: "Health",
    premiumAmount: 234566,
    submittedDate: "1/1/2024",
    opsReceivedDate: "1/2/2024",
    proposalSignedDate: "1/2/2024",
    coInsurance: "N",
    pphc: "N",
    agreementCode: 127146,
  },
  {
    proposalNumber: "5926864",
    policyNo: "0000000000369583",
    quoteNo: "0000000009172689",
    customerName: "Shreyash G",
    productName: "Motor",
    premiumAmount: 234566,
    submittedDate: "1/1/2024",
    opsReceivedDate: "1/2/2024",
    proposalSignedDate: "1/2/2024",
    coInsurance: "N",
    pphc: "N",
    agreementCode: 127146,
  },
  {
    proposalNumber: "5926864",
    policyNo: "0000000000369583",
    quoteNo: "0000000009172689",
    customerName: "Sinu P",
    productName: "Health",
    premiumAmount: 234566,
    submittedDate: "1/1/2024",
    opsReceivedDate: "1/2/2024",
    proposalSignedDate: "1/2/2024",
    coInsurance: "N",
    pphc: "N",
    agreementCode: 127146,
  },
  {
    proposalNumber: "5926864",
    policyNo: "0000000000369583",
    quoteNo: "0000000009172689",
    customerName: "Riya T",
    productName: "Motor",
    premiumAmount: 234566,
    submittedDate: "1/1/2024",
    opsReceivedDate: "1/2/2024",
    proposalSignedDate: "1/2/2024",
    coInsurance: "N",
    pphc: "N",
    agreementCode: 127146,
  },
];




















const DashBoard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState(0);

  const cellClicked = () => {
    setOpenModal(true);
  };


  return (

    <div className={classes.tableOutline}>

      <CustomModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        width={1200}

      >
        <Typography>
          <CustomTable page={page} setPage={setPage} columns={columns1} data={data1}></CustomTable>
        </Typography>
        
      </CustomModal>
      <div className={classes.heading}>


        <h2>Inward Status Summary</h2>
        <button className={classes.newInwardBtn}><NavLink to='/inwardForm'>

          New Inward
        </NavLink>
          </button>

      </div>
      <CustomTable page={page} setPage={setPage} isNavLink={true} cellClicked={cellClicked} columns={columns} data={data} />
    </div>
  );
};

export default DashBoard;