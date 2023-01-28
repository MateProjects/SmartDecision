import { React, useState, useEffect } from "react";
import SignUp from "../signUp/signUp";
import SignIn from "../signIn/signIn";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Sidebar from "../sidebar/sidebar";
import { useDispatch, useSelector } from "react-redux";
import operations from "../../redux/tenants/tenantsOperations";
// import StickyHeadTable from '../table/table'
import TablePhone from "../table/table";
import selectors from "../../redux/tenants/tenantsSelectors";
import { withStyles } from "@mui/material";
import DataTableDemo from "../table/table";

const PhoneNumbers = () => {
  const [initForm, setinitForm] = useState("");

  const dispatch = useDispatch();

  debugger;
  useEffect(() => {
    dispatch(operations.getTenants(1, 5));
    // setPageCount(Math.ceil(allPages/limit));
  }, []);

  const columns = [
    {
      Header: "№",
      accessor: "i",
    },
    {
      Header: "ID",
      accessor: "_id",
      color: "#30B78D",
      backgroundColor: "#30B78D",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Type",
      accessor: "type",
    },
  ];
  let tenants = useSelector(selectors.getAllTenantsSelector);

  //     let arr = [{"start": 12683281,"end": 12683281,"range": 1,"tableData": {"id": 6,"checked": true}},{
  //   "start": 12683281,
  //   "end": 12683281,
  //   "range": 1,
  //   "tableData": {
  //       "id": 1,
  //       "checked": true
  //   }},
  //   {
  //     "start": 12683281,
  //     "end": 12683281,
  //     "range": 8,
  //     "tableData": {
  //         "id": 6,
  //         "checked": true
  //     },
  // }]

  // let totalRange = arr.reduce(function(accumulator, elem, index, array) {
  //   return accumulator + elem.range;
  // }, 0);
  // debugger

  let dat = [
    {
      _id: "60b8d535e5ceed001517ec24",
      name: "ksu",
      type: "ServiceProvider",
      email: "dfdffd@mail.com",
    },
    {
      _id: "60c06eb57d48220015e758d6",
      name: "Ksenia",
      type: "ServiceProvider",
      email: "ksenia@ukr.net",
    },
    {
      _id: "60c06f7c7d48220015e758d7",
      name: "Lucas",
      type: "Enterprise",
      email: "lucas@mail.com",
    },
    {
      _id: "60c1e355cc924b0015749f25",
      name: "Maria",
      type: "Enterprise",
      email: "maria@mail.com",
    },
    {
      _id: "60c1f5e5cc924b0015749f26",
      name: "alex",
      type: "Enterprise",
      email: "alex@mail.com",
    },
    {
      _id: "60c1f62ccc924b0015749f27",
      name: "LA",
      type: "Enterprise",
      email: "la@ukr.net",
    },
    {
      _id: "60c1f667cc924b0015749f28",
      name: "00000000000",
      type: "ServiceProvider",
      email: "00000@mail.com",
    },
    {
      _id: "60c1f6adcc924b0015749f29",
      name: "tenant1weeeeaaaaaaaaaaaaaaaaaa",
      type: "Enterprise",
      email: "tenant1@mail.com",
    },
    {
      _id: "60c1f79bcc924b0015749f2a",
      name: "Madrid",
      type: "ServiceProvider",
      email: "madrid@mail.com",
    },
    {
      _id: "60c1f862cc924b0015749f2b",
      name: "nyx",
      type: "ServiceProvider",
      email: "nyx@ukr.net",
    },
    {
      _id: "60c34422c34e840015944070",
      name: "ggfgfgf",
      type: "ServiceProvider",
      email: "gfgfgfgf@mail.com",
    },
    {
      _id: "60c36ef13f89ce0015acbbee",
      name: "something",
      type: "ServiceProvider",
      email: "something@mail.com",
    },
    {
      _id: "60c70a64db1966001556ae12",
      name: "London",
      type: "Enterprise",
      email: "london@mail.com",
    },
    {
      _id: "60c70afadb1966001556ae13",
      name: "12312312321313",
      type: "Enterprise",
      email: "123@ukr.net",
    },
    {
      _id: "60c714d5db1966001556ae14",
      name: "Dima",
      type: "ServiceProvider",
      email: "dima@ukr.net",
    },
    {
      _id: "60c7151cdb1966001556ae15",
      name: "check",
      type: "ServiceProvider",
      email: "check@ukr.net",
    },
    {
      _id: "60c8982df8b24d0015aeef51",
      name: "xzcxzcxzcxzc",
      type: "ServiceProvider",
      email: "zxcxzcxz@ukr.net",
    },
  ];

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <h2>Home Page</h2>
      {/* <StickyHeadTable/> */}
      {/* <DataTableDemo/> */}
      <TablePhone data={dat} columns={columns} />
    </Grid>
  );
};

export default PhoneNumbers;
