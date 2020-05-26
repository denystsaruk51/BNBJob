export const APPID = 'e5b87ea4b2a64c7d99748e716a1aee5a'; //'Your Agora APP_ID'
// iPhoneX Xs
const X_WIDTH = 375;
const X_HEIGHT = 812;

// iPhoneXR XsMax
const XR_WIDTH = 414;
const XR_HEIGHT = 896;

//判断是否为iphoneX或Xs
export function isIphoneX(Platform, SCREEN_WIDTH, SCREEN_HEIGHT) {
    return (
        Platform.OS === 'ios' &&
        ((SCREEN_HEIGHT === X_HEIGHT && SCREEN_WIDTH === X_WIDTH) ||
        (SCREEN_HEIGHT === X_WIDTH && SCREEN_WIDTH === X_HEIGHT))
    )
};

//判断是否为iphoneXR或XsMAX
export function isIphoneXR(Platform, SCREEN_WIDTH, SCREEN_HEIGHT) {
    return (
        Platform.OS === 'ios' &&
        ((SCREEN_HEIGHT === XR_HEIGHT && SCREEN_WIDTH === XR_WIDTH) ||
        (SCREEN_HEIGHT === XR_WIDTH && SCREEN_WIDTH === XR_HEIGHT))
    )
};
