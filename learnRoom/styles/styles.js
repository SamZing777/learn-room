import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        margin: 10,
        padding: 10
    },

    containerLeft: {
        flex: 1,
        flexDirection: "column",
        margin: 10,
        padding: 10
    },

    row: {
        flex: 1,
        flexDirection: "row",
        margin: 10,
        padding: 10
    },

    normalText: {
        color: "black",
        fontSize: 14
    },

    headingText: {
        color: "black",
        fontSize: 24
    },

    boxImage: {
        marginTop: 10,
        width: 400,
        height: 200
    },

    category: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: 10,
        padding: 10
    },

    feature: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "gray",
        marginTop: 10,
        padding: 5
    },

    featureText: {
        color: "black", 
        fontSize: 18
    },

    imageScroll: {
        width: 200,
        height: 150,
        borderRadius: 5,

    },

    learning: {
        flex: 2,
        flexDirection: "row",
        margin: 10,
        padding: 10
    },

    top: {
        marginTop: -20,
    },

    courseText: {
        padding: 10
    },

    grayText: {
        color: "gray",
        fontSize: 14
    },

    smallText: {
        color: "black",
        fontSize: 8
    },

    btnText: {
        color: "aliceblue",
        fontSize: 20
    }
});

export default styles;
