import React, { FunctionComponent } from 'react';
import {
  Card, CardActionArea, CardContent, CardMedia, Typography,
} from '@mui/material';
import Dish from '../../../data/types/dish';

const DishCards: FunctionComponent = () => {
  const dishes: Dish[] = [
    {
      imageUrl: 'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Beef Burger',
      description: 'Beef, buns, tomatoes, etc.',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Beef Burger',
      description: 'Beef, buns, tomatoes, etc.',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Beef Burger',
      description: 'Beef, buns, tomatoes, etc.',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Beef Burger',
      description: 'Beef, buns, tomatoes, etc.',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Beef Burger',
      description: 'Beef, buns, tomatoes, etc.',
    },
    {
      imageUrl: 'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Beef Burger',
      description: 'Beef, buns, tomatoes, etc.',
    },
  ];

  return (
    <>
      {dishes.map((dish) => (
        <Card sx={{ minWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='140'
              alt={dish.description}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {dish.title}
              </Typography>

              <Typography variant='body2' color='text.secondary'>
                {dish.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </>
  );
};

export default DishCards;
