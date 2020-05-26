import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity ,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../styles/welcome.style';
import StatusBar from '../components/StatusBar';
import I18n from '../locale-data/i18n';
import Loader from 'react-native-modal-loader';
import { GetCandidateCount, GetJobCount } from '../services/Common';

class Welcome extends Component {
  constructor(props){
    super(props);

    this.state = { 
      candidateCount:'0',
      jobCount:'0',
      isLoading: false,
    }

    this.getCandidateCount=this.getCandidateCount.bind(this);
    this.getJobCount=this.getJobCount.bind(this);
  }

  static propTypes = {
    routes: PropTypes.object,
  };

  static navigationOptions = {
    header: null ,
  };
  componentDidMount() {
    this.getJobCount();
  }
  getJobCount(){
    this.setState({ isLoading: true });
    GetJobCount()
    .then((res) => {
      if(res.success === true) {
        const data = res.data;
        this.setState({ jobCount: data });
        this.getCandidateCount();
      } else {
        this.setState({ isLoading: false });
        alert(JSON.stringify(res.error));
      }
    })
    .catch((reason) => {
      this.setState({ isLoading: false });
      alert(reason);
    });
  }
  getCandidateCount() {
    GetCandidateCount()
      .then((res) => {
        if(res.success === true) {
          const data = res.data;
          this.setState({ 
            isLoading: false,
            candidateCount: data,
          });
        } else {
          this.setState({ isLoading: false });
          alert(JSON.stringify(res.error));
        }
      })
      .catch((reason) => {
        this.setState({ isLoading: false });
        alert(reason);
      });
  }
  gotoCandidatePresentation() {
    Actions.candidatepresentation({userType: 'Candidate'});
  }
  gotoRecruitPresentation() {
    Actions.recruitpresentation({userType: 'Recruit'});
  }

  render() {
    const { jobCount, candidateCount} = this.state;
    return (
      <View style={styles.container}>
        <Loader loading={this.state.isLoading} color="#ff66be" />
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <Image style={styles.appName} source={require('../image/img_app_title.png')}/>
        <View style={styles.containerTop}>
          <Text style={styles.questions}>{I18n.t('need')}</Text>
          <Text style={styles.questions}>{I18n.t('to recruit')}</Text>
          <Text style={styles.instructions}>{I18n.t('We help you find the best talent')}</Text>
          <TouchableOpacity  onPress={this.gotoRecruitPresentation}>
            <View style={styles.blueButtonView} >
              <Text style={styles.button}>{I18n.t('Recruit')}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.countDesc}>
            <Text style={styles.description}>{candidateCount}</Text>
            <Text style={styles.description}>{I18n.t('candidates')}</Text>
          </View>
        </View>
        <View style={styles.containerBottom}>
          <View style={{height: 20}}></View>
          <Text style={styles.questions}>{I18n.t('need')}</Text>
          <Text style={styles.questions}>{I18n.t('a job')}</Text>
          <Text style={styles.instructions}>{I18n.t('We help you find the job of what you need')}</Text>
          <TouchableOpacity  onPress={this.gotoCandidatePresentation}>
            <View style={styles.redButtonView}>
              <Text style={styles.button}>{I18n.t('Candidate')}</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.countDesc}>
            <Text style={styles.description}>{jobCount}</Text>
            <Text style={styles.description}>{I18n.t('Jobs')}</Text>
          </View>
        </View>
        <Image style={styles.imgDesc} source={require('../image/img_welcome.png')}/>        
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(Welcome)