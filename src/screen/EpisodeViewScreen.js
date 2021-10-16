import React, { useState } from 'react';
import { Text, View, ImageBackground, TouchableOpacity, ScrollView } from "react-native"
import { Picker } from '@react-native-picker/picker';
import styles from './style';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"

import EpisodeViewHeader from "../components/Header/EpisodeViewHeader"
import movie from '../assets/data/movie';
import EpisodeList from "../components/Episode"
import VideoPlayers from "../components/VideoPlayer"

let FirstEpisode = movie.seasons.items[0].episodes.items[0];



export default function EpisodeViewScreen(props) {

  const [Seassonss, GetSeasson] = useState(0);
  let FirstSeasson = movie.seasons.items[Seassonss];
  let SesassonNames = movie.seasons.items.map(seasson => seasson.name);
  const [CurrentEpisode,GetEpisode] = useState(FirstSeasson.episodes.items[0])



  return (
    <>
      <EpisodeViewHeader navigation={props.navigation} />
      <ScrollView>
        <View style={styles.containerEpisode}>
          <ImageBackground source={{ uri: FirstEpisode.poster }} style={styles.Trailerbanner}>

            <TouchableOpacity onPress={() => console.warn("Playing Trailer")}>
              <MaterialCommunityIcons name="play" size={60} color={"#fff"} style={styles.PlaybuttonIcon} />
            </TouchableOpacity>

          </ImageBackground>
          <View style={{ backgroundColor: "#3E3E3E", fontWeight: 'bold' }}>
            <Text style={styles.title}>{"   "}{movie.title}</Text>
          </View>


          <View style={styles.videodetail}>
            <Text style={{ color: "#76FE19", fontWeight: 'bold', marginLeft: 20 }}>98% match</Text>

            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: "#B0B0B0", fontWeight: 'bold' }}>{movie.year}{"   "}</Text>
              <Text style={{ color: "#000", fontWeight: 'bold', backgroundColor: '#FEFA23', padding: 2, borderRadius: 5 }}>13+</Text>
            </View>

            <View style={{ flexDirection: 'row', marginRight: 20, alignItems: 'center', }}>
              <Text style={{ color: "#B0B0B0", fontWeight: 'bold' }}>{movie.numberOfSeasons} Seasson{"    "}</Text>
              <Text style={{ color: "#B0B0B0", fontWeight: 'bold', borderWidth: 1, borderColor: '#B0B0B0', padding: 2 }}>HD</Text>
            </View>

          </View>

          <TouchableOpacity style={styles.buttomwhite}>
            <MaterialCommunityIcons name="play" size={20} color={"#000"} />
            <Text style={{ color: '#000' }}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttomblack}>
            <AntDesign name="arrowdown" size={20} color={"#fff"} />
            <Text style={styles.white}>Download</Text>
          </TouchableOpacity>

          <View style={styles.textcontainer}>

            <Text style={styles.white}>
              {FirstEpisode.plot}
            </Text>
            <Text style={styles.moviecast}>Cast : {movie.cast}</Text>
            <Text style={styles.moviecreater}>Creater: {movie.creator}</Text>

          </View>


          <View style={styles.iconcontainer}>
            <TouchableOpacity style={styles.center}>
            <AntDesign name="plus" size={20} color={"#fff"} style={styles.mrgin} />
            <Text style={styles.colorWhite}>My List</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.center}>
            <Feather name="thumbs-up" size={20} color={"#fff"} style={styles.mrgin} />
            <Text style={styles.colorWhite}>Like</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.center}>
            <Feather name="send" size={20} color={"#fff"} style={styles.mrgin} />
            <Text style={styles.colorWhite}>Share</Text>
            </TouchableOpacity>
          </View>

          <View >
            <Picker
            style={styles.picker}
            dropdownIconColor={'#fff'}
              selectedValue={Seassonss}
              onValueChange={(itemValue, itemIndex) =>
                GetSeasson(itemValue)
              }>
                {SesassonNames.map((SesassonNames,index)=>
                <Picker.Item label={SesassonNames} value={index} key={SesassonNames} />
                  )}
             
            </Picker>
            </View>
  

          <EpisodeList Seassons={FirstSeasson} nav={props.navigation} />
        </View>
      </ScrollView>
    </>
  );
}
