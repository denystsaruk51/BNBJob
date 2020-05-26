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
  scrollViewStyle: {
    marginBottom: 0,
    paddingVertical: 2,
  },
  backImgView: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginTop: 5,
  },

  backImgButton: {
      width: 20,
      height: 20,
      resizeMode: 'contain',
  },
  titleView: {
    marginTop: 2,
    flexDirection: 'row',
  },
  titleImage: {
    width: 25,
    height: 25,
    borderRadius: 13,
  },
  title: {
    marginTop: 5,
    marginLeft: 10,
    fontFamily: 'AvenirNextLTPro-Bold',
    fontSize: 20,
    lineHeight: 20,
    color: '#000000',
  },
  latestCandidateView: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  latestCandidateWaitingView: {
    flexDirection: 'row',
    borderRadius: 18,
    height: 36,
    backgroundColor: '#00ccd2',
  },
  waitingText:{
    fontFamily: 'AvenirNextLTPro-Regular',
    fontSize: 14,
    lineHeight: 14,
    marginLeft: 15,
    marginTop: 12,
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
});