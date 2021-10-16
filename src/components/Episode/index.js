import React from 'react';
import { Text, View, TouchableOpacity, Image, ImageBackground } from "react-native"
import styles from "./style";
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
export default function EpisodeList(props) {

  return (


    <View>
      {Object.keys(props.Seassons.episodes.items).map((value,index)=>{
          console.log("SEassons",props.Seassons.episodes.items[index].video)
      return(
    <View key={index} style={styles.constiner}>

      <View style={styles.episdecontainer}>


        <ImageBackground source={{ uri: props.Seassons.episodes.items[value].poster }} style={styles.image}>

          <TouchableOpacity onPress={() => props.nav.navigate("VideoPlayers",{episode:props.Seassons.episodes.items[index].video})}>
            <MaterialCommunityIcons name="play" size={30} color={"red"} style={styles.PlaybuttonIcon} />
          </TouchableOpacity>

        </ImageBackground>

        <View>
          <Text style={styles.tittle}>{props.Seassons.episodes.items[value].title}</Text>
          <Text style={styles.duration}>{props.Seassons.episodes.items[value].duration}</Text>
        </View>

        <TouchableOpacity style={styles.buttomblack}>
          <AntDesign name="arrowdown" size={14} color={"#fff"} />
          <Text style={styles.download}>Download</Text>
        </TouchableOpacity>


      </View>

      <View>
        <Text style={styles.plot}>{props.Seassons.episodes.items[value].plot}</Text>
      </View>


    </View>
      )

  })}
  </View>
  
  );
}
