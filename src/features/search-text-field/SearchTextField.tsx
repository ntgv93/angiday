import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import {
  styled,
} from '@mui/material/styles';

// https://stackoverflow.com/questions/70641719/material-ui-change-textfield-initial-color
const StyledTextField = styled(TextField)<TextFieldProps>(() => ({
  '& .MuiInputBase-root': {
    backgroundColor: '#1f3a5a',
    '& input': {
      '&.Mui-focused:': {
        borderColor: 'white',
      },
    },
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
      borderWidth: 2,
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
  '& label': {
    color: 'white',
    '&.Mui-focused': {
      color: 'white',
    },
  },

}));

const SearchTextField: React.FC = () => (
  <StyledTextField label='Dish name' variant='outlined' />
);

export default SearchTextField;
