/* eslint-disable arrow-body-style */
import React from 'react';
import {
  FormControl,
  MenuItem,
} from '@mui/material';
import InputLabel, { InputLabelProps } from '@mui/material/InputLabel';
import Select, { SelectProps } from '@mui/material/Select';
import { styled } from '@mui/material/styles';

interface Props {
  label: string,
  options: string[]
}

const StyledSelect = styled(Select)<SelectProps>(() => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '&.Mui-focused  .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
  '& .MuiSelect-select': {
    color: 'white',
    backgroundColor: '#1f3a5a',
  },
}));

const StyledInputLabel = styled(InputLabel)<InputLabelProps>(() => ({
  color: 'white',
  '&.Mui-focused': {
    color: 'white',
  },
}));

const IngredientDropdown: React.FC<Props> = ({
  label,
  options,
}: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const a = '';
  return (
    <FormControl sx={{ minWidth: 140 }}>
      <StyledInputLabel>
        {label}
      </StyledInputLabel>
      <StyledSelect variant='outlined'>
        {options.map((option) => (
          <MenuItem value={option}>
            {option}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

export default IngredientDropdown;
