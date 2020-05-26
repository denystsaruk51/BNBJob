import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import {styles} from '../styles/touchableRecruiterType.style';
import Config from '../services/Config';

export default class TouchableRecruiterType extends Component {
  constructor(props) {
    super(props);
    this.state = {
        pressed: false,
    };

    this.gotoRegistrationRecruiterName=this.gotoRegistrationRecruiterName.bind(this);
  }

  onFocusGet() {
    this.setState({isGotFocus: true});
  }

  onFocuseLost() {
    this.setState({isGotFocus: false});
  }

  gotoRegistrationRecruiterName() {
    const { typeIcon } = this.props;
    let recruiterType = 0;

    if(typeIcon === 'company') {
      recruiterType = Config.RECRUITER_COMPANY;
    } else if(typeIcon === 'individual') {
      recruiterType = Config.RECRUITER_INDIVIDUAL;
    } else if(typeIcon === 'organization') {
      recruiterType = Config.RECRUITER_ORGANIZATION;
    } else if(typeIcon === 'association') {
      recruiterType = Config.RECRUITER_ASSOCIATION;
    }    

    if(this.props.gotoRegistrationRecruiterName){
      this.props.gotoRegistrationRecruiterName(recruiterType);
    }
  }
  
  renderTypeIcon(){
    const { typeIcon } = this.props

    if(typeIcon === 'company') {
      return(
        <Image style={styles.recruiterImg} source={require('../image/ic_enterprise.png')} />
      )
    } else if(typeIcon === 'individual') {
      return(
        <Image style={styles.recruiterImg} source={require('../image/ic_particulier.png')} />
      )
    } else if(typeIcon === 'organization') {
      return(
        <Image style={styles.recruiterImg} source={require('../image/ic_organiztion.png')} />
      )
    } else if(typeIcon === 'association') {
      return(
        <Image style={styles.recruiterImg} source={require('../image/ic_association.png')} />
      )
    } else {
      return(
        <View></View>
      )
    }
  }

  render(){

    const { typeText, typeBorderColor } = this.props
    const typeIconImg = this.renderTypeIcon()

    return (
      <TouchableHighlight
          onPress={this.gotoRegistrationRecruiterName}
          style={[this.state.pressed ? { borderColor: typeBorderColor, borderWidth:2, borderRadius: 20 } : 
            { borderColor: '#fff', borderWidth:2, borderRadius: 20 }]}
          onHideUnderlay={() => { this.setState({ pressed: false }); }}
          onShowUnderlay={() => { this.setState({ pressed: true }); }}
          underlayColor={'#ffffff'} >
          <View style={styles.centerItem}>
            {typeIconImg}
            <Text style={styles.titleText}>{typeText}</Text>
          </View>
      </TouchableHighlight>
    )
  }
}