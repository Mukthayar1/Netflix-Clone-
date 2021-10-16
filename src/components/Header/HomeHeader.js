import React from 'react'
import {View,Text,Image} from "react-native"

import styles from "./Stle"

export default function HomeHeader() {
    return (
        <View style={styles.container}>
            <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqyDckNxdnVn01yNXKk_BzIAgJFtAynYGkcA&usqp=CAU'}}
                style={styles.logo}/>

                <Text style={styles.text}>TV Shows</Text>
                <Text style={styles.text}>Movies</Text>
                <Text style={[styles.text,{marginRight:30}]}>My List</Text>
        </View>
    )
}
