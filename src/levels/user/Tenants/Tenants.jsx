import CustomField from "../../../conmponents/input/InputField";
import AddButton from "../../../conmponents/Bottons/AddButton/AddButton";
import Table from "../../../conmponents/table/Table";

import SearchIcon from "../../../image/icons/SearchIcon";
import { tenantsStyle, sxTheming } from "./style";

const Tenants = ({}) => {
  const classes = tenantsStyle();

  return (
    <div className={classes.container}>
      <div className={classes.actionBar}>
        <CustomField
          inputIcon={<SearchIcon />}
          placeholder={"Search"}
          type={"text"}
          className={classes.inputField}
          sx={sxTheming}
        />
        <AddButton disabled={false} />
      </div>
      <div className={classes.tableWrapper}>{<Table />}</div>
    </div>
  );
};

export default Tenants;
