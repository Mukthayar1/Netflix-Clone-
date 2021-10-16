import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text, View } from "react-native"
import styles from "./style"

import Home from "../screen/Home"
import CommingSoon from "../screen/CommingSoon"
import Downloads from "../screen/Downloads"
import Search from "../screen/Search"


import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"


const Tab = createBottomTabNavigator()


function BottomTabs(props) {

    return (
            <Tab.Navigator
                screenOptions={{
                    headerShown: false, tabBarActiveTintColor: '#E2E2E2',
                    tabBarInactiveTintColor: '#fff', tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#000',
                        position: 'absolute',
                        borderTopWidth: 0,
                        height: 55
                    }
                }}>

                <Tab.Screen name={"Home"} component={Home}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (

                                <View style={styles.navview}>
                                    <AntDesign name="home" size={20} color={focused ? '#fff' : "#B2B2B2"} />
                                    <Text style={{ color: focused ? '#fff' : "#B2B2B2",fontSize:12 }}>Home</Text>
                                </View>
                            )
                        }
                    }}
                />


                <Tab.Screen name={"CommingSoon"} component={CommingSoon}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            return (

                                <View style={styles.navview}>
                                    <MaterialIcons name="video-library" size={20} color={focused ? '#fff' : "#B2B2B2"} />
                                    <Text style={{ color: focused ? '#fff' : "#B2B2B2",fontSize:12 }}>Coming Soon</Text>
                                </View>
                            )
                        }
                    }}
                />


                <Tab.Screen name={"Search"} component={Search}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (

                                <View style={styles.navview}>
                                    <AntDesign name="search1" size={20} color={focused ? '#fff' : "#B2B2B2"} />
                                    <Text style={{color: focused ? '#fff' : "#B2B2B2",fontSize:12 }}>Search</Text>
                                </View>
                            )
                        }
                    }}
                />

                <Tab.Screen name={"Downloads"} component={Downloads}
                    options={{
                        headerShown: false,
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={styles.navview}>
                                    <AntDesign name="arrowdown" size={20} color={focused ? '#fff' : "#B2B2B2"} />
                                    <Text style={{ color: focused ? '#fff' : "#B2B2B2",fontSize:12 }}>Downloads</Text>
                                </View>
                            )
                        }
                    }}
                />


            </Tab.Navigator>
    );
}

export default BottomTabs;