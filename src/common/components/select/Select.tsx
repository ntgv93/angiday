/* eslint-disable arrow-body-style */
import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

interface Props {
  label: string,
  options: string[]
}

const IngredientDropdown: React.FC<Props> = ({
  label,
  options,
}: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const a = '';
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select
        label='Protein'
        variant='outlined'
      >
        {options.map((option) => (
          <MenuItem
            value={option}
          >
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default IngredientDropdown;
