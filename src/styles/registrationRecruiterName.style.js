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

    nextButtonView: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        alignItems: 'flex-end',
    },
    
    blueText: {
        color: '#00ccd2',
    },

    gap50 : {
    height:50,
    },

    gap100 : {
    height:100,
    },
    
    nextButton: {
        margin: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 40,
        fontFamily: 'AvenirNextLTPro-Regular',
    },

    whiteText: {
        fontFamily: 'AvenirNextLTPro-Regular',
        color: '#ffffff',
        padding: 15,
    },
    
});