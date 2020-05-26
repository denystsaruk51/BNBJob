import React, {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    row: {
        marginTop: 20,
    },

    backImgView: {
        position: 'absolute',
        left: 20,
        width: 35,
        height: 35,
      },
      
    backImgButton:{
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },

    title: {
        fontFamily: 'AvenirNextLTPro-Bold',
        fontSize: 24,
        lineHeight: 24,
        color: '#000000',
        textAlign: 'center',
        width: '100%',
    },

    highLightView: {
        marginTop: 20,
        backgroundColor: '#00ccd2',
        height: 70,
    },
    whiteBackImg: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        position: 'absolute',
        marginTop: 3,
    },
    highLightWhiteText: {
        fontFamily: 'AvenirNextLTPro-Regular',
        fontSize: 15,
        lineHeight: 15,
        color: '#ffffff',
        marginLeft: 30,
        marginTop: 8,
    },
    highLightRightImg: {
        position: 'absolute',
        width: 30,
        height: 30,
        right: 0,
    },
    margin20: {
        margin: 20,
    },

    redButton: {
        backgroundColor: '#ff5b8c',
        borderRadius : 20,
    },

    thankyouText: {
        fontFamily: 'AvenirNextLTPro-Bold',
        fontSize: 16,
        lineHeight: 16,
        height: 20,
        color: '#ffffff',
        margin: 20,
        marginBottom: 15,
    },

    alignRight: {
        alignItems: 'flex-end',
        margin: 20,
        marginBottom: '10%',
    },

});