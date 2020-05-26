import React, {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    scrollViewStyle: {
        flexGrow: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    
    backImgView: {
        width: 35,
        height: 35,
        marginLeft: 20,
    },
    backImgButton: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },

    recruiterImg: {
        height: 100,
        resizeMode: 'contain',
    },

    centerItem: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    borderRed: {
        borderColor: '#ff5b8c',
        borderRadius: 20,
        borderWidth: 2,
    },

    borderBlue: {
        borderColor: '#00ccd2',
        borderRadius: 20,
        borderWidth: 2,
    },

    title: {
        fontFamily: 'AvenirNextLTPro-Bold',
        fontSize: 30,
        textAlign: 'left',
        color: '#000000',
        marginLeft: 35,
        marginTop: 5,
    },

    subtitle: {
        fontFamily: 'AvenirNextLTPro-Regular',
        fontSize: 16,
        textAlign: 'left',
        color: '#888888',
        marginLeft: 20,
        marginTop: 10,
    },

    alignRight: {
        alignItems: 'flex-end',
        margin: 20,
    },
    
    blueText: {
        color: '#00ccd2',
    },

    redText: {
        color: '#ff5b8c',
    },

    margin20: {
        margin: 20,
    },

    margin5: {
        margin: 5,
    },

    gap100 : {
    height:100,
    },
    
    nextButton: {
        margin: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        height: 40,
        fontFamily: 'AvenirNextLTPro-Regular',
        fontSize: 17,
    },

    whiteText: {
        color: '#ffffff',
    },

    centerText: {
        textAlign: 'center',
    },

    fontAvenir: {
        fontFamily: 'AvenirNextLTPro-Regular',
    },
    
});