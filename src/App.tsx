import React from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import IngredientDropdown from './common/IngredientDropdown';

const App: React.FC = () => (
  <div className='App'>
    <h1>
      Ăn Gì Đây
    </h1>

    {/* input section */}
    <div>
      <TextField label='Dish name' variant='outlined' />
      {/* TODO:
        - store ingredientType + ingredients in the DB
        - fetch ingredientType + ingredients from the DB on load
       */}
      <IngredientDropdown ingredientType='Protein' ingredients={['Beef', 'Chicken', 'Pork', 'Sea food']} />
      <IngredientDropdown ingredientType='Carb' ingredients={['Rice', 'Pasta', 'Potato', 'Bread']} />
      <IngredientDropdown ingredientType='Veggies' ingredients={['Rau Muống', 'Broccoli', 'Spinach', 'Lettuce']} />
    </div>
  </div>
);

export default App;
