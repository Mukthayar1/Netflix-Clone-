import React from 'react'
import { Image, Text, View, ScrollView } from "react-native"

import styles from "./Style"
export default function HorizontaliListPreviw(props) {

    return (
        <View style={styles.mainitemcontainer}>
            <Text style={styles.categoriText}>{props.tittle}</Text>
            <ScrollView horizontal={true}>


                {Object.keys(props.movies).map((item, index) => {
                    return (
                        <View key={index} style={styles.toptencontainer}>
                            <Text style={styles.top}>{index+1}</Text>
                            <Image key={index} source={{ uri: props.movies[index].poster }}
                                style={styles.itemImage} />
                        </View>
                    )
                })}


            </ScrollView>

        </View>
    )
}
