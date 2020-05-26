import React, {
  StyleSheet,
} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  wrapper: {
  },
  appLogoImg: {
    width : '100%',
    height: 25,
    resizeMode:"contain",
    marginTop: 20,
  },
  scrollViewStyle: {
    marginBottom: 50,
    paddingVertical: 2,
  },
  subTitleView: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 25,
    height: 35,
  },
  subTitle: {
    position: 'absolute',
    color: '#000000',
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 18,
    textAlign: 'left',
    marginRight: 100,
    width: '70%',
  },
  showAllView: {
    position: 'absolute',
    right: 0,
  },
  showAll: {
    color: '#ff5b8c',
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 16,
    textAlign: 'center',
  },
  latestCandidateView: {
    flexDirection: 'row',
  },
  latestCandidateWaitingView: {
    flexDirection: 'row',
    borderRadius: 18,
    height: 36,
    backgroundColor: '#00ccd2',
    marginLeft: 10,
  },
  waitingText:{
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
    lineHeight: 14,
    marginLeft: 15,
    marginTop: 11,
    color: '#ffffff',
  },
  waitingValueView:{
    height: 23,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    marginRight: 9,
    marginTop: 6,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  waitingValue: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 10,
    lineHeight: 10,
    color: '#000000',
    margin: 5,
    marginTop: 7,
  },
  latestCandidateInterviewView: {
    flexDirection: 'row',
    height: 36,
    marginLeft: 15,
  },
  interviewText:{
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 15,
    lineHeight: 15,
    marginLeft: 15,
    marginTop: 10,
    color: '#00ccd2',
  },
  interviewValue: {
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 10,
    lineHeight: 10,
    color: '#000000',
    marginLeft: 10,
    marginTop: 14,
  },
  subDescription: {
    color: '#000000',
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
    textAlign: 'left',
    marginLeft: 20,
    marginTop: -5,
    marginBottom: 15,
  },
});