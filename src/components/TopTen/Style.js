import { StyleSheet } from "react-native"

const styles = StyleSheet.create({

    itemImage: {
        width: 120,
        height: 200,
        margin: 10,
        borderRadius: 10,
        resizeMode: 'cover',
        borderRadius: 5,
        position: 'relative'
    },
    categoriText: {
        color: '#fff'
    },
    mainitemcontainer: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,

    },
    top: {
        color: '#fff',
        fontSize: 90,
        marginRight: -20,
        marginTop: 115,
        textShadowColor: '#585858',
        textShadowOffset: { width: 10, height: 10 },
        textShadowRadius: 10,

    },
    toptencontainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})


export default styles