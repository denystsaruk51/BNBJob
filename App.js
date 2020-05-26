/**
 * BNBjob React Native App
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, Slider} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux'
import initStore from './src/store';
const store = initStore();
const RouterWithRedux = connect()(Router);

import {styles} from './src/styles/main.style';
import Splash from './src/screens/Splash';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';
import Search from './src/screens/Search';

import CandidatePresentation from './src/screens/CandidatePresentation';
import RegistrationCandidateName from './src/screens/RegistrationCandidateName';
import RegistrationCandidateMailPass from './src/screens/RegistrationCandidateMailPass';
import RegistrationCandidateSMS from './src/screens/RegistrationCandidateSMS';
import RegistrationCandidatePrivacy from './src/screens/RegistrationCandidatePrivacy';
import RegistrationCandidateConfirm from './src/screens/RegistrationCandidateConfirm';
import CandidateField from './src/screens/CandidateField';
import CandidateSubField from './src/screens/CandidateSubField';

import CandidateHomePopup from './src/screens/candidate/CandidateHomePopup';
import CandidateOfferExpiredPopup from './src/screens/candidate/CandidateOfferExpiredPopup';
import CandidateFilter from './src/screens/candidate/CandidateFilter';
import CandidateFilterField from './src/screens/candidate/CandidateFilterField';
import CandidateFilterSubField from './src/screens/candidate/CandidateFilterSubField';

import CandidateSideProfile from './src/screens/candidate/CandidateSideProfile';

import CandidateFriendsHome from './src/screens/candidate/CandidateFriendsHome';
import CandidateFriends from './src/screens/candidate/CandidateFriends';

import CandidateGroupHome from './src/screens/candidate/CandidateGroupHome';

import CandidateMessageHome from './src/screens/candidate/CandidateMessageHome';
import CandidateChat from './src/screens/candidate/CandidateChat';

import RecruitPresentation from './src/screens/RecruitPresentation';
import RegistrationRecruiterType from './src/screens/RegistrationRecruiterType';
import RegistrationRecruiterName from './src/screens/RegistrationRecruiterName';
import RegistrationRecruiterOrganize from './src/screens/RegistrationRecruiterOrganize';
import RegistrationRecruiterEnterprise from './src/screens/RegistrationRecruiterEnterprise';
import RegistrationRecruiterAssociation from './src/screens/RegistrationRecruiterAssociation';
import RegistrationRecruiterMailPass from './src/screens/RegistrationRecruiterMailPass';
import RegistrationRecruiterSMS from './src/screens/RegistrationRecruiterSMS';
import RegistrationRecruiterPrivacy from './src/screens/RegistrationRecruiterPrivacy';
import RegistrationRecruiterConfirm from './src/screens/RegistrationRecruiterConfirm';
import RecruiterField from './src/screens/RecruiterField';
import RecruiterSubField from './src/screens/RecruiterSubField';

import CandidateMapOffer from './src/screens/candidate/CandidateMapOffer';
import CandidateMapOfferList from './src/screens/candidate/CandidateMapOfferList';

import Login from './src/screens/Login';
import CandidateHome from './src/screens/candidate/CandidateHome';
import RecruiterHome from './src/screens/recruiter/RecruiterHome';
import RecruiterPublish from './src/screens/recruiter/RecruiterPublish';
import LiveVideo from './src/screens/LiveVideo';
import Videos from './src/screens/Videos';
import AllLatestOffersScreen from './src/screens/recruiter/AllLatestOffersScreen';
import CandidatePremium from './src/screens/candidate/CandidatePremium';
import CandidatePackPremium from './src/screens/candidate/CandidatePackPremium';
import CandidatePackVip from './src/screens/candidate/CandidatePackVip';
import CandidatePackGold from './src/screens/candidate/CandidatePackGold';
import RecruiterFilter from './src/screens/recruiter/RecruiterFilter';
import CandidateMain from './src/screens/candidate/CandidateMain';
import CreateGroup from './src/screens/CreateGroup';
import AgoraVideoCall from './src/screens/AgoraVideoCall';
import VideoCvsAll from './src/screens/VideoCvsAll';

const TabIcon = ({ selected, title}) => {
  return (
    <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
  )
}

// type Props = {};
// export default class App extends Component<Props> {
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="root">
            <Scene key="landing" component={Splash} title="Splash" initial={true}/>
            <Scene key="welcome" component={Welcome} title="Welcome" />
            <Scene key="candidatepresentation" component={CandidatePresentation} title="CandidatePresentation" />
            <Scene key="recruitpresentation" component={RecruitPresentation} title="RecruitPresentation" />
            <Scene key="login" component={Login} title="Login" />

            <Scene
              key="rootTabBar"
              tabs={true}
              tabBarStyle={{backgroundColor: '#ffffff'}}>
              <Scene key="home" component={Home} title="Home" icon={TabIcon} initial />
              <Scene key="search" component={Search} title="Search" icon={TabIcon} />
            </Scene>

            <Scene key="registrationCandidateName" component={RegistrationCandidateName} title="RegistrationCandidateName" />
            <Scene key="registrationCandidateMailPass" component={RegistrationCandidateMailPass} title="RegistrationCandidateMailPass" />
            <Scene key="registrationCandidateSMS" component={RegistrationCandidateSMS} title="RegistrationCandidateSMS" />
            <Scene key="registrationCandidatePrivacy" component={RegistrationCandidatePrivacy} title="RegistrationCandidatePrivacy" />
            <Scene key="registrationCandidateConfirm" component={RegistrationCandidateConfirm} title="RegistrationCandidateConfirm" />
            <Scene key="candidateField" component={CandidateField} title="CandidateField" />
            <Scene key="candidateSubField" component={CandidateSubField} title="CandidateSubField" />
            <Scene key="candidateHomePopup" component={CandidateHomePopup} title="CandidateHomePopup" />

            <Scene key="registrationRecruiterType" component={RegistrationRecruiterType} title="RegistrationRecruiterType" />
            <Scene key="registrationRecruiterName" component={RegistrationRecruiterName} title="RegistrationRecruiterName" />
            <Scene key="registrationRecruiterMailPass" component={RegistrationRecruiterMailPass} title="RegistrationRecruiterMailPass" />
            <Scene key="registrationRecruiterSMS" component={RegistrationRecruiterSMS} title="RegistrationRecruiterSMS" />
            <Scene key="registrationRecruiterPrivacy" component={RegistrationRecruiterPrivacy} title="RegistrationRecruiterPrivacy" />
            <Scene key="registrationRecruiterConfirm" component={RegistrationRecruiterConfirm} title="RegistrationRecruiterConfirm" />
            <Scene key="recruiterField" component={RecruiterField} title="RecruiterField" />
            <Scene key="recruiterSubField" component={RecruiterSubField} title="RecruiterSubField" />
            <Scene key="registrationRecruiterOrganize" component={RegistrationRecruiterOrganize} title="RegistrationRecruiterOrganize" />
            <Scene key="registrationRecruiterEnterprise" component={RegistrationRecruiterEnterprise} title="RegistrationRecruiterEnterprise" />
            <Scene key="registrationRecruiterAssociation" component={RegistrationRecruiterAssociation} title="RegistrationRecruiterAssociation" />
            
            <Scene key="candidateMapOffer" component={CandidateMapOffer} title="CandidateMapOffer" />
            <Scene key="candidateMapOfferList" component={CandidateMapOfferList} title="CandidateMapOfferList" />
            <Scene key="candidateOfferExpiredPopup" component={CandidateOfferExpiredPopup} title="CandidateOfferExpiredPopup" />
            <Scene key="candidateFilter" component={CandidateFilter} title="CandidateFilter" />
            <Scene key="candidateFilterField" component={CandidateFilterField} title="CandidateFilterField" />
            <Scene key="candidateFilterSubField" component={CandidateFilterSubField} title="CandidateFilterSubField" />

            <Scene key="candidateSideProfile" component={CandidateSideProfile} title="CandidateSideProfile" />
            <Scene key="candidateFriendsHome" component={CandidateFriendsHome} title="CandidateFriendsHome" />
            <Scene key="candidateFriends" component={CandidateFriends} title="CandidateFriends" />

            <Scene key="candidateGroupHome" component={CandidateGroupHome} title="CandidateGroupHome" />

            <Scene key="candidateMessageHome" component={CandidateMessageHome} title="CandidateMessageHome" />
            <Scene key="candidateChat" component={CandidateChat} title="CandidateChat" />
            
            <Scene key="candidateHome" component={CandidateHome} title="CandidateHome" />
            <Scene key="recruiterHome" component={RecruiterHome} title="RecruiterHome" />
            <Scene key="recruiterPublish" component={RecruiterPublish} title="RecruiterPublish" />
            <Scene key="recruiterFilter" component={RecruiterFilter} title="RecruiterFilter" />

            <Scene key="liveVideo" component={LiveVideo} title="LiveVideo" />
            <Scene key="videos" component={Videos} title="Videos" />
            <Scene key="allLatestOffersScreen" component={AllLatestOffersScreen} title="AllLatestOffersScreen" />
            <Scene key="candidatePremium" component={CandidatePremium} title="CandidatePremium" />
            <Scene key="candidatePackGold" component={CandidatePackGold} title="CandidatePackGold" />
            <Scene key="candidatePackPremium" component={CandidatePackPremium} title="CandidatePackPremium" />
            <Scene key="candidatePackVip" component={CandidatePackVip} title="CandidatePackVip" />
            <Scene key="candidateMain" component={CandidateMain} title="CandidateMain" />
            <Scene key="createGroup" component={CreateGroup} title="CreateGroup" />
            <Scene key="agoraVideoCall" component={AgoraVideoCall} title="AgoraVideoCall" />
            <Scene key="videoCvsAll" component={VideoCvsAll} title="VideoCvsAll" />

          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}
