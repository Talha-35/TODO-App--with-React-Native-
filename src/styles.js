import { StyleSheet, Dimensions } from 'react-native';

/**
 * #303e45
 * #a7b6bd
 * #4a636e
 * #ff9b31
 */

const main = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cfd8dc'
    },
    banner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        backgroundColor : '#1565c0',
        paddingHorizontal : 25
    },
    todoText: {
        fontSize: 40,
        fontWeight: 'bold',
        paddingLeft : 100,
        color : '#ffab00'
    },
    todoCount: {
        fontSize: 20,
        color: "#ffab00"
    },
    emptyComponent: {
        color: 'black',
        textAlign: 'center',
        fontSize : 25,
        textShadowColor : 'black',     
        textShadowRadius : 2,
        marginTop : Dimensions.get("window").height /5
    }
})

const todo_input = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#e0e0e0',
        padding: 5,
        margin: 10,
        borderRadius: 10
    },
    container: {
        
        backgroundColor: '#1565c0',
        padding: 5,
        margin: 10,
        borderRadius: 5
    },
    buttonContainer: {
        backgroundColor: '#ffab00',
        padding: 10,
        margin: 3,
        width: Dimensions.get('window').width / 2.5,
        alignSelf: 'center',
        borderRadius: 8
    },
    buttonText1: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonText2: {
        marginTop : 1,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

const todo_card = StyleSheet.create({
    container: {
        marginTop : 10,
        backgroundColor: '#eceff1',
        padding: 8,
        margin: 5,
        borderRadius: 7
    },
    text: {
        fontSize: 18
    }
})

export { main, todo_input, todo_card };