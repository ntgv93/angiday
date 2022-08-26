import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import {
  styled,
} from '@mui/material/styles';

// https://stackoverflow.com/questions/70641719/material-ui-change-textfield-initial-color

const StyledTextField = styled(TextField)<TextFieldProps>(() => ({
  '& .MuiInputBase-root': {
    borderColor: 'white',
  },
}));

const SearchTextField: React.FC = () => (
  <StyledTextField label='Dish name' variant='outlined' />
);

export default SearchTextField;
