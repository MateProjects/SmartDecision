import styled from "styled-components";

import CustomField from "../../../conmponents/input/InputField";
import AddButton from "../../../conmponents/Bottons/AddButton/AddButton";
import Table from "../../../conmponents/table/Table";

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
      <div style={classes.tableWrapper}>{<Table />}</div>
    </div>
  );
};

export default Tenants;
