import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { CardHorizontalFood } from './food';

export interface FoodProps{
    id: string;
    name: string;
    price: number;
    time: string;
    delivery: number;
    rating: number;
    image: string;
    restaurant: string;
}

export function TrendingFoods() {
    const [ foods, setFoods ] = useState([]);

    useEffect(() => {
        async function getFoods() {
            const response = await fetch("http://192.168.100.74:3000/foods");
            const data = await response.json();
            setFoods(data);
        }
        getFoods();
    }, []);

 return (
   <FlatList
        data={foods}
        renderItem={ ({ item }) => <CardHorizontalFood food={item} />}
        horizontal={true}
        contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
        showsHorizontalScrollIndicator={false}
   />
  );
}