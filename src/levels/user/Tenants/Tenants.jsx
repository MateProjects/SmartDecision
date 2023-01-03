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
        <div className={classes.inputField}>
        <CustomField
          inputIcon={<SearchIcon />}
          placeholder={"Search"}
          type={"text"}
          sx={sxTheming}
        />
        </div>
        <AddButton disabled={false} className={classes.buttonStyles}/>
      </div>
      <div className={classes.tableWrapper}>{<Table />}</div>
    </div>
  );
};

export default Tenants;
