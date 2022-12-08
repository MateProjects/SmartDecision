import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash';

import { searchTenants } from '../../redux/search/search';

export const SearchInput = (props) => {
  const {className} = props;
  const [requestInput, setRequestInput] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    setRequestInput(value);
  };

  const setRequest = useCallback(
    debounce(handleChange, 1),
    [requestInput]
  );

  dispatch(searchTenants(requestInput));

  // console.log(requestInput);

  return (
    <Input
      onChange={setRequest}
      placeholder="Search"
      startAdornment={<SearchIcon className={className} />}
      // value={requestInput}
    />
  );
};
