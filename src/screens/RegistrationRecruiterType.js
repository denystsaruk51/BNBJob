import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import {styles} from '../styles/registrationRecruiterType.style'
import StatusBar from '../components/StatusBar'
import TouchableRecruiterType from '../components/TouchableRecruiterType'
import I18n from '../locale-data/i18n'

class RegistrationRecruiterType extends Component {
  constructor(props){
    super(props);
    
    this.gotoRegistrationRecruiterName=this.gotoRegistrationRecruiterName.bind(this);
  }

  static propTypes = {
    routes: PropTypes.object,
  }

  static navigationOptions = {
    header: null,
  }

  goBack(){
    Actions.pop()
  }

  gotoLogin() {
    Actions.login({userType: 'Recruiter'})
  }
  gotoRegistrationRecruiterName(recruiterType) {
    const { fbEmail, fbPicture, fbFirstName, fbLastName, fbName, fbId } = this.props;
    Actions.registrationRecruiterName({recruiterType: recruiterType, fbEmail, fbPicture, fbFirstName, fbLastName, fbName, fbId});
  }
  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
          <SafeAreaView/>
          <View style={{height: 10}}></View>
          <TouchableOpacity style={styles.backImgView} onPress={this.goBack}>
            <View>
              <Image style={styles.backImgButton} source={require('../image/ic_back.png')} />
            </View>
          </TouchableOpacity>
          <Text style={styles.title}>{I18n.t('Who are you')}</Text>

          <View style={styles.gap100} />

          <View style={{flex:2}}>

            <View style={{flex:2, flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
              <TouchableRecruiterType
                typeText={I18n.t('I am a company')}
                typeIcon="company"
                typeBorderColor="#ff5b8c"
                gotoRegistrationRecruiterName={this.gotoRegistrationRecruiterName}>
              </TouchableRecruiterType>

              <TouchableRecruiterType
                typeText={I18n.t('I am an individual')}
                typeIcon="individual"
                typeBorderColor="#00ccd2"
                gotoRegistrationRecruiterName={this.gotoRegistrationRecruiterName}>
              </TouchableRecruiterType>
            </View>
            <View style={{flex:2, flexDirection:'row', alignItems: 'center', justifyContent: 'center'}}>
              <TouchableRecruiterType
                typeText={I18n.t('I am an organization')}
                typeIcon="organization"
                typeBorderColor="#cadbea"
                gotoRegistrationRecruiterName={this.gotoRegistrationRecruiterName}>
              </TouchableRecruiterType>

              <TouchableRecruiterType
                typeText={I18n.t('I am an association')}
                typeIcon="association"
                typeBorderColor="#8f86ea"
                gotoRegistrationRecruiterName={this.gotoRegistrationRecruiterName}>
              </TouchableRecruiterType>
              
            </View>

          </View>

          <View style={styles.gap100} />
          
          <View style={{flex:1, flexDirection:'row', alignItems: 'center', justifyContent: 'center',}}>
            <Text style={[styles.margin5, styles.fontAvenir]}>{I18n.t('I have an account')}</Text>
            <TouchableOpacity onPress={this.gotoLogin}>
              <Text style={[styles.redText, styles.fontAvenir, styles.margin5]}>{I18n.t('Log in')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default connect(({routes}) => ({routes}))(RegistrationRecruiterType)