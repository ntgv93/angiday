/* eslint-disable arrow-body-style */
import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

interface Props {
  ingredientType: string,
  ingredients: string[]
}

const IngredientDropdown: React.FC<Props> = ({
  ingredientType,
  ingredients,
}: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const a = '';
  return (
    <FormControl>
      <InputLabel>{ingredientType}</InputLabel>
      <Select
        label='Protein'
        variant='outlined'
      >
        {ingredients.map((ingredient) => (
          <MenuItem
            value={ingredient}
          >
            {ingredient}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default IngredientDropdown;
