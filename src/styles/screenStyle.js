import { StyleSheet, Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c2c3c',
        justifyContent: "center",
        paddingHorizontal: 34,
        height: windowHeight,
        flexDirection: "column",
        justifyContent: "space-between",
        // paddingVertical: 40,
    },
    layoutTop: {
        flex: 1, 
        justifyContent: "center",
    },
    layoutBottom: {
        flex: 0.09,
    },
    title: {
        color: "#f3f3f3",
        fontSize: 28,
        fontWeight: '600',
    },
    inputFields: {
        color: "#f3f3f3",
        height: 40, 
        borderColor: '#f3f3f3', 
        borderBottomWidth: 1.2,
        marginBottom: 20,
    },
    inputFieldView: {
        paddingTop: 50,
        paddingBottom: 20,
    },
    buttonDesignView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    specialBtn: {
        
    },
    specialBtnText: {
        color: "#89898f",
    },
    btn: {
        backgroundColor: "#d93b3b",
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
    },
    btnText: {
        color: "#f3f3f3",
    },
    navigateBtn: {
        color: "#d93b3b",
    },
    navigateView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
})