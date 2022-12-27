import React from 'react';
import './App.css';
import { Button } from '@mui/material';
import ingredientTypes from './data/ingredientTypes';
import { Select } from './common/components';
import { SearchTextField } from './features/search-text-field';
import DishCards from './common/components/dishCards/DishCards';

const App: React.FC = () => (
  <div id='app' className='center'>
    <h1 id='title'>
      Ăn Gì Đây
    </h1>

    <div id='homepage-search-form'>
      <SearchTextField />
      {/* TODO:
        - store ingredientType + ingredients in the DB
        - fetch ingredientType + ingredients from the DB on load
       */}
      {ingredientTypes.map((type) => (
        <Select
          label={type.name}
          options={type.ingredientList}
        />
      ))}
      <Button variant='contained'>Search</Button>
    </div>

    <div id='dish-cards'>
      <DishCards />
    </div>
  </div>
);
export default App;
