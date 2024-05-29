import CustomTable from "../../Components/table/CustomTable";
import React, { useState } from 'react';
import classes from "./InwardList.module.css";
import { useNavigate } from "react-router-dom";

const column = [
    {
        label:"Proposal No",
        id:"proposal_no"
    },
    {
        label:"Inward Type",
        id:"inward_type"
    },
    {
        label:"Instrument No",
        id:"instrument_no"
    },
    {
        label:"Product",
        id:"product"
    },
    {
        label:"Customer Name",
        id:"customer_name"
    },
    {
        label:"Premium",
        id:"premium"
    },
    {
        label:"Debit Date",
        id:"debit_date"
    },
    {
        label:"Policy Number",
        id:"policy_no"
    },
    {
        label:"Policy Issued Date",
        id:"policy_issued"
    },
    {
        label:"Status",
        id:"status"
    }
];

const data = [
    {
        proposal_no: "5926451",
        inward_type: "Proposal",
        instrument_no: 1,
        product: "Arogya Premier Policy",
        customer_name: "Pravat Sharma",
        premium: 1800,
        debit_date: "23-05-2024",
        policy_no: "345232434",
        policy_issued: "23-05-2024",
        status: "Discrepancy Resolved"
    },
    {
        proposal_no: "5926566",
        inward_type: "Proposal",
        instrument_no: 1,
        product: "Advance Loss Of Profit",
        customer_name: "Bharat H",
        premium: 2500,
        debit_date: "01-01-2024",
        policy_no: "76535476",
        policy_issued: "01-01-2024",
        status: "Pending"
    },
    {
        proposal_no: "5926451",
        inward_type: "Proposal",
        instrument_no: 1,
        product: "Arogya Premier Policy",
        customer_name: "Shivani K",
        premium: 1800,
        debit_date: "23-05-2024",
        policy_no: "345232434",
        policy_issued: "23-05-2024",
        status: "Discrepancy Resolved"
    },
    {
        proposal_no: "5926566",
        inward_type: "Proposal",
        instrument_no: 1,
        product: "Advance Loss Of Profit",
        customer_name: "Sameer K",
        premium: 2500,
        debit_date: "01-01-2024",
        policy_no: "76535476",
        policy_issued: "01-01-2024",
        status: "Pending"
    },
    {
        proposal_no: "5926451",
        inward_type: "Proposal",
        instrument_no: 1,
        product: "Arogya Premier Policy",
        customer_name: "Sheyas G",
        premium: 1800,
        debit_date: "23-05-2024",
        policy_no: "345232434",
        policy_issued: "23-05-2024",
        status: "Discrepancy Resolved"
    },
    {
        proposal_no: "5926566",
        inward_type: "Proposal",
        instrument_no: 1,
        product: "Advance Loss Of Profit",
        customer_name: "Rajdeep P",
        premium: 2500,
        debit_date: "01-01-2024",
        policy_no: "76535476",
        policy_issued: "01-01-2024",
        status: "Pending"
    }
];


const InwardList = () => {
    const navigate =useNavigate();

    const [page, setPage] = useState(0);
    const cellClicked = () => {
        // setOpenModal(true);
        navigate('/inwardList2');
      };

    return <>

        <div className={classes.tableOutline}>
            <div className={classes.heading}>
                <h2>Inward List</h2>
            </div>
            <CustomTable page={page} setPage={setPage} columns={column} data={data} cellClicked={cellClicked}></CustomTable>
        </div>

    </>
}

export default InwardList;