import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#000',
        marginBottom: 45

    },
    containerEpisode: {
        backgroundColor: '#000',

    },
    bannerimagge: {
        width: '90%',
        height: 200,
        marginLeft: '5%',
        borderRadius: 10,
    },
    Trailerbanner: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    PlaybuttonIcon: {
        borderColor: 'red',
        borderWidth: 3,
        borderRadius: 100
    },
    title: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 15,
        paddingBottom: 10
    },
    videodetail: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50
    },
    white: {
        color: '#fff'
    },
    buttomwhite: {
        backgroundColor: '#fff',
        width: '95%',
        marginLeft: '2.5%',
        height: 40,
        marginTop: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttomblack: {
        backgroundColor: '#3E3E3E',
        width: '95%',
        marginLeft: '2.5%',
        height: 40,
        marginTop: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textcontainer:{
        margin:13

    },
    moviecast:{
        color:'#C4C4C4',
        marginTop:10,
    },
    moviecreater:{
        color:'#C4C4C4',
        marginTop:5,
    },
    iconcontainer:{
        flexDirection:'row',
        paddingBottom:20,
        alignItems:'center',
        marginLeft:10

    },
    mrgin:{
        marginLeft:20,
        marginRight:20
    },
    picker:{
        backgroundColor:'#000',
        width:150,
        color:'#fff'
    },
    colorWhite:{
        color:'#fff'
    },
    center:{
        justifyContent:'center',
        alignItems:'center',
        marginRight:5
    }
})


export default styles