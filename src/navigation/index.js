import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import EpisodeViewScreen from "../screen/EpisodeViewScreen";
import VideoPlayers from '../components/VideoPlayer';
import Bottomtabs from "./Bottomtabs"
const Stack = createStackNavigator();

export default function MainNavigation() {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false }}>
                    <Stack.Screen name="Bottomtabs" component={Bottomtabs} />
                    <Stack.Screen name="EpisodeViewScreen" component={EpisodeViewScreen} />
                    <Stack.Screen name="VideoPlayers" component={VideoPlayers} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
