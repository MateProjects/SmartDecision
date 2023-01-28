import styled from "styled-components";

import CustomField from "../../../components/input/InputField";
import AddButton from "../../../components/Buttons/AddButton/AddButton";
import Table from "../../../components/table/Table";

import SearchIcon from "../../../image/icons/SearchIcon";
import { tenantsStyle, sxTheming } from "./style";

const ActionBar = styled.div`
  style: ${(props) => props.style};
`;

const InputField = styled.div`
  style: ${(props) => props.style};
`;

const Tenants = () => {
  const classes = tenantsStyle();

  const testData = [
    {
      name: "Alex",
      id: "Tbs_1",
      type: "enter",
    },
    {
      name: "Bob",
      id: "Tbs_2",
      type: "type_c",
    },
    {
      name: "Liam",
      id: "Tbs_3",
      type: "enter",
    },
    {
      name: "Grim",
      id: "Tbs_4",
      type: "type_c",
    },
  ];

  const columns = [
    {
      title: "№",
      cellStyle: () => ({
        width: "7%",
      }),
      render: (rowData) => {
        console.log("rowData", rowData?.tableData?.id);
        return <>{rowData?.tableData?.id + 1}</>;
      },
    },
    {
      title: "ID",
      field: "id",
      render: (rowData) => {
        return <span style={classes.idStyles}>{rowData.id}</span>;
      },
    },
    {
      title: "Name",
      field: "name",
    },
    {
      title: "Type",
      field: "type",
    },
  ];

  return (
    <div style={classes.container}>
      <ActionBar style={classes.actionBar}>
        <InputField style={classes.inputField}>
          <CustomField
            inputIcon={<SearchIcon />}
            placeholder={"Search"}
            type={"text"}
            sx={sxTheming}
          />
        </InputField>
        <AddButton disabled={false} className={classes.buttonStyles} />
      </ActionBar>
      {<Table data={testData} columns={columns} />}
    </div>
  );
};

export default Tenants;
