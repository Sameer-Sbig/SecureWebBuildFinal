import classes from "../DirectSearch/DirectSearch.module.css";
import CustomTable from '../../Components/table/CustomTable';
import CustomModal from "../../Components/Modal/CustomModal";
import FullWidthTabs from '../inwardList2/InwardList3';
import { useState } from 'react';


const columns = [
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
    
  ];
  
  const data = [
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
    },
  ];
  


const DirectSearch = () => {

    const [page, setPage] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const cellClicked = () => {
        setOpenModal(true);
        setModalIsOpen(true)
    };

    return <>
    <CustomModal
      open={openModal}
      onClose={() => setOpenModal(false)}
      width={1200}
      children={<FullWidthTabs />}


    />

    <div className={classes.DirectSearchDiv}>
        
        <CustomTable isNavLink={true} cellClicked={cellClicked} page={page} setPage={setPage} columns={columns} data={data}></CustomTable>
        
    </div>
    </>
}

export default DirectSearch;