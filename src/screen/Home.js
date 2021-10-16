import React from 'react';
import { View, Text, Image, ScrollView ,FlatList} from "react-native"
import categories from '../assets/data/categories';

import styles from "./style";
import HorizontaliListPreviw from '../components/HorizontalList/HorizontaliListPreviw';
import Topten from "../components/TopTen/Topten"
import HomeHeader from "../components/Header/HomeHeader"

let PopularNetflix = categories.items[0];
let TrendingNetflix = categories.items[1];
let TopTens = categories.items[4];
let AmericanLatins = categories.items[2];
let comedy = categories.items[3]

export default function Home(props) {



  return (
    <View style={styles.container}>
      <HomeHeader/>
        <ScrollView>
      <Image source={{ uri: 'https://phantom-marca.unidadeditorial.es/8256e68fdfac5b6a6c792af7308d27e8/crop/0x0/1597x899/resize/1320/f/jpg/assets/multimedia/imagenes/2021/10/01/16330974723192.png' }}
        style={styles.bannerimagge} />




      <HorizontaliListPreviw tittle={PopularNetflix.title} movies={PopularNetflix.movies} nav={props.navigation} />
      <HorizontaliListPreviw tittle={TrendingNetflix.title} movies={TrendingNetflix.movies} nav={props.navigation}/>
      <Topten tittle={TopTens.title} movies={TopTens.movies} nav={props.navigation} />
      <HorizontaliListPreviw tittle={AmericanLatins.title} movies={AmericanLatins.movies} nav={props.navigation}/>

      <HorizontaliListPreviw tittle={comedy.title} movies={comedy.movies} nav={props.navigation} />

      </ScrollView>


    </View>
  );
}
