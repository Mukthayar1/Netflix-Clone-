import React, { Component } from 'react'
import {
Text,
StyleSheet,
StatusBar,
Dimensions,
Alert,
Modal,
BackHandler,
TouchableOpacity,
ToastAndroid,
View,
Button
} from 'react-native'


import Video from 'react-native-video';
import Orientation from 'react-native-orientation';


export default class VideoPlayers extends Component {
constructor(props) {
    super(props);
    this.onLoad = this.onLoad.bind(this);
    this.onProgress = this.onProgress.bind(this);
}


state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    active: false,
    modalVisible: false,
    fullScreen: true,
};

onLoad(data) {
    this.setState({ duration: data.duration });
}

onProgress(data) {
    this.setState({ currentTime: data.currentTime });
}

getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
        return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    } else {
        return 0;
    }
}

renderRateControl(rate) {
    const isSelected = (this.state.rate == rate);

    return (
        <View>
            <TouchableOpacity onPress={() => { this.setState({ rate: rate }) }}>
                <Text style={{ fontWeight: isSelected ? "bold" : "normal" }}>
                    {rate}x
</Text>
            </TouchableOpacity>
        </View>
    )
}

renderResizeModeControl(resizeMode) {
    const isSelected = (this.state.resizeMode == resizeMode);

    return (
        <TouchableOpacity onPress={() => { this.setState({ resizeMode: resizeMode }) 
}}>
            <Text style={[styles.controlOption, { fontWeight: isSelected ? "bold" : 
"normal" }]}>
                {resizeMode}
            </Text>
        </TouchableOpacity>
    )
}
setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
}

fullScreen = () => {
    Orientation.getOrientation((err, orientation) => {
        if (orientation == 'LANDSCAPE') {
            Orientation.lockToPortrait();
        } else {
            Orientation.lockToLandscape();
        }
    });

}

backAction = () => {
    Orientation.getOrientation((err, orientation) => {
        if (orientation == 'LANDSCAPE') {
            Orientation.lockToPortrait();
        }
    });
};

componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        this.backAction
    );
}

componentWillUnmount() {
    this.backHandler.remove();
}
render() {
    const { modalVisible, paused } = this.state
    const url = `https://firebasestorage.googleapis.com/v0/b/todoapp-1a8b6.appspot.com/o/multi.mp4?alt=media&token=2b52ad1b-8c52-44b6-9efa-c0ca5540cf0b`;
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />

            <Video source={{uri:url}}
                style={styles.fullScreen}
                rate={this.state.rate}
                paused={this.state.paused}
                volume={this.state.volume}
                muted={this.state.muted}
                resizeMode={this.state.resizeMode}
                onLoad={this.onLoad}
                onProgress={this.onProgress}
                onEnd={() => { alert('Done!') }}
                controls
                repeat={true} />
            <View style={[{ left: 0 }, styles.rateControl]}>
                <TouchableOpacity
                    transparent
                    onPress={() => {
                        this.fullScreen();
                    }}
                >
                  <Text>Compress</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.rateControl}>
                <TouchableOpacity
                    transparent
                    onPress={() => {
                        this.setModalVisible(true);
                    }}
                >
                    <Text>Modal</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.controls}>
<View style={styles.generalControls}>

<View style={styles.resizeModeControl}>
{this.renderResizeModeControl('cover')}
{this.renderResizeModeControl('contain')}
{this.renderResizeModeControl('stretch')}
</View>
</View>

<View style={styles.trackingControls}>
<View style={styles.progress}>
<View style={[styles.innerProgressCompleted, { flex: flexCompleted }]} />
<View style={[styles.innerProgressRemaining, { flex: flexRemaining }]} />
</View>
</View>
</View> */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.closeModal}>
                            <TouchableOpacity
                                transparent
                                onPress={() => { this.setModalVisible(!modalVisible); 
}}
                            >
                                <Text>\Close</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ textAlign: 'center', fontWeight: 'bold' 
}}>Play Rate</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 
'space-between', alignItems: 'center' }}>
                               <Text> {this.renderRateControl(0.25)}</Text>
                               <Text>{this.renderRateControl(0.5)}</Text>
                               <Text>{this.renderRateControl(1.0)}</Text>
                               <Text>{this.renderRateControl(1.5)}</Text>
                               <Text>{this.renderRateControl(2.0)}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View >
    )
}
}

const styles = StyleSheet.create({
backgroundVideo: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * .6,
},

container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
},
fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
},
controls: {
    backgroundColor: "transparent",
    borderRadius: 5,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
},
progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
},
innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
},
innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
},
generalControls: {
    flex: 1,
    // flexDirection: 'row',
    borderRadius: 4,
    overflow: 'hidden',
    paddingBottom: 10,
},
rateControl: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    right: 10
},
volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
},
resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
},
controlOption: {
    alignSelf: 'center',
    fontSize: 11,
    color: "white",
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 12,
},
centeredView: {
    flex: 1,
    marginTop: '22%'
},
modalView: {
    width: '100%',
    padding: '5%',
    backgroundColor: "white",
    position: 'absolute',
    bottom: 10,
},
openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
},
closeModal: {
    alignItems: 'flex-end',
    margin: -10
},
textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
},
modalText: {
    marginBottom: 15,
    textAlign: "center"
}
});