import CheckboxTree from "react-checkbox-tree";
import { useState } from "react";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import RemoveIcon from "@mui/icons-material/Remove";
export default function CheckedBoxTree() {
  // Node Array will be used in CheckboxTree

  const nodes = [
    {
      value: "home",
      label: "Home",
    },
    {
      value: "transaction",
      label: "Transaction",
      children: [
        {
          value: "ticketSale",
          label: "Ticket Sale",
        },
        {
          value: "referralPayments",
          label: "Referral Payments",
        },
        {
          value: "rePrintReceipt",
          label: "Re Print Receipt",
        },
      ],
    },
    {
      value: "admin",
      label: "Admin",
      children: [
        {
          value: "purchaseOrder",
          label: "Purchase Order",
        },
        {
          value: "ewalletTopUp",
          label: "E-Wallet Top Up",
        },
      ],
    },
    {
      value: "settings",
      label: "Settings",
      children: [
        {
          value: "menuRights",
          label: "Menu Rights",
        },
        {
          value: "users",
          label: "Users",
        },
        {
          value: "changePassword",
          label: "Change Password",
        },
      ],
    },
    {
      value: "reports",
      label: "Reports",
      children: [
        {
          value: "salesReports",
          label: "Sales Reports",
        },
        {
          value: "ledgerBalance",
          label: "Ledger Balance",
        },
        {
          value: "ledgerCummulative",
          label: "Legdger Cummulative",
        },
      ],
    },
  ];

  //  Icons That use in Check box tree
  const icons = {
    check: <CheckCircleIcon />,
    uncheck: <CheckBoxOutlineBlankIcon />,
    halfCheck: <CheckCircleIcon />,
    expandClose: <RemoveIcon />,
    expandOpen: <RemoveIcon />,
    leaf: <InsertDriveFileIcon />,
  };
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  return (
    <>
      <CheckboxTree
        nodes={nodes}
        checked={checked}
        expanded={expanded}
        onCheck={(checked) => setChecked(checked)}
        onExpand={(expanded) => setExpanded(expanded)}
        icons={icons}
        showNodeIcon={false}
        expandOnClick={true}
        showExpandAll={true} // THis is not working yet
      />
    </>
  );
}
