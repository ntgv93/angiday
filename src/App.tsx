import React from 'react';
import './App.css';
import {
  TextField,
  Button,
} from '@mui/material';
import ingredientTypes from './data/ingredientTypes';
import { IngredientDropdown } from './common';

const App: React.FC = () => (
  <div className='center'>
    <h1>
      Ăn Gì Đây
    </h1>

    <div id='homepage_search_form'>
      <TextField label='Dish name' variant='outlined' />
      {/* TODO:
        - store ingredientType + ingredients in the DB
        - fetch ingredientType + ingredients from the DB on load
       */}
      {ingredientTypes.map((type) => (
        <IngredientDropdown
          ingredientType={type.name}
          ingredients={type.ingredientList}
        />
      ))}
      <Button variant='contained'>Search</Button>
    </div>

    <div id='dish list'>
      <div />
    </div>
  </div>
);

export default App;
