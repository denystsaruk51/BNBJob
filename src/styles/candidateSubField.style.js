import React, {
    StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },

    titlebar: {
        marginTop: 20,
    },

    backImgView: {
        position: 'absolute',
        marginTop: 20,
        marginLeft: 20,
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
        marginTop: 20,
        textAlign: 'center',
        width: '100%',
    },

    highLightView: {
      flexDirection: 'row',
      marginTop: 20,
      backgroundColor: '#00ccd2',
      height: 70,
      alignItems: 'center',
    },
    whiteBackImg: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginLeft: 20,
    },
    highLightWhiteText: {
        fontFamily: 'AvenirNextLTPro-Regular',
        fontSize: 15,
        color: '#ffffff',
        marginLeft: 10,
        width: '70%',
    },
    highLightRightImg: {
        position: 'absolute',
        width: 25,
        height: 25,
        right: 0,
        marginRight: 20,
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