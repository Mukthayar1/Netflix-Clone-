import React from 'react'
import { Image, Text, View, ScrollView, TouchableOpacity } from "react-native"

import styles from "./Style"
export default function HorizontaliListPreviw(props) {

    return (
        <View style={styles.mainitemcontainer}>
            <Text style={styles.categoriText}>{props.tittle}</Text>
            <ScrollView horizontal={true}>


                {Object.keys(props.movies).map((item, index) => {
                    return (

                        <TouchableOpacity  key={index} onPress={()=>props.nav.navigate("EpisodeViewScreen")}>
                            <Image source={{ uri: props.movies[index].poster }}
                                style={styles.itemImage} />
                        </TouchableOpacity>
                    )
                })}


            </ScrollView>

        </View>
    )
}
