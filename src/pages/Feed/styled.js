import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import  styled  from 'styled-components';


export const ScreenContainer = styled.div ` 
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
`

export const CardContainer = styled.div `
display: flex;
flex-direction: column;
width: 80vw;
max-width: 450px;
align-items: center;
margin-bottom: 20px;
margin: 20px;
`



const RestaurantCard = (props) => {
  return (
    <Card sx={{ width: 250 }} >
      <CardActionArea onClick={props.onClick}>
        <CardMedia
          component={"img"}
          alt = {props.title}
          height="140"
          image={props.image}          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" align="center">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="p" component="div" align="center">
           Categoria:  {props.category}
          </Typography>
      
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default RestaurantCard