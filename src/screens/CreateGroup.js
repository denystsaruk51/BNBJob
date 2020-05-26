import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Slider,
  AsyncStorage,
} from 'react-native';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Loader from 'react-native-modal-loader';
import {styles} from '../styles/createGroup.style';

import I18n from '../locale-data/i18n';
import StatusBar from '../components/StatusBar';
import UserAvatar from '../components/UserAvatar';

import { PublishNewGroup } from '../services/Common';
import Config from '../services/Config';

class CreateGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showParticipate: true,
      numberOfParticipants: 12,
      isLoading: false,
    };
    this.handleCreate=this.handleCreate.bind(this);
  }

  static navigationOptions = {
    header: null ,
  };

  goBack(){
    Actions.pop();
  }
  async handleCreate(){
    const { numberOfParticipants } = this.state;
    const startTime = new Date();
    const endTime = new Date('2019-06-01T07:00:00.000Z');
    const TOKEN = await AsyncStorage.getItem(Config.STORAGE_TOKEN_KEY);
    this.setState({ isLoading: true });

    PublishNewGroup(TOKEN, 'New Group', 'Group Description', '30.0405', '107.3094', '5cac14691ed0a50f70d52299', numberOfParticipants, startTime, endTime)
      .then((res) => {
        if(res.success === true) {
          this.setState({ isLoading: false });
          this.goBack();
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
  numberOfParticipantsChange(value){
    this.setState({numberOfParticipants: parseInt(value)});
  }
  render () {
    return (
      <View style={styles.container}>
        <Loader loading={this.state.isLoading} color="#ff66be" />
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <SafeAreaView />
        <View style={styles.titleBar}>
          <Text style={styles.title}>{I18n.t('Group creation')}</Text>
          <TouchableOpacity style={styles.publishButtonView} onPress={this.handleCreate}>
            <Text style={styles.publishButton}>{I18n.t('Publish')}</Text>
          </TouchableOpacity>
          <View style={styles.backImgView}>
          <TouchableOpacity  onPress={this.goBack}>
            <Image style={styles.backImgButton} source={require('../image/ic_back.png')} />
          </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.mainView} showsVerticalScrollIndicator={true}>
          <View style={styles.contentView}>
            <View style={styles.addPhotoVideoView}>
              <Image style={styles.addPhotoVideoImage} source={require('../image/ic_add_video_photo.png')}/>
              <Text style={styles.addPhotoVideoText}>+ {I18n.t('Add a photo video')}</Text>
            </View>
            
            <View style={styles.groupNameView}>
              <View style={styles.groupNameAvatarView}>
                <UserAvatar/>
              </View>
              <Text style={styles.groupNameText}>{I18n.t('Name of the group')}</Text>
            </View>
            
            <View style={styles.addressView}>
              <Image style={styles.addressImage} source={require('../image/ic_address.png')}/>
              <Text style={styles.addressText}>{I18n.t('Address')}</Text>
              <Image style={styles.addressExpandImage} source={require('../image/ic_forward.png')}/>
            </View>
            
            <Text style={styles.videoGroupTitle}>{I18n.t('Group video')}</Text>
            <Text style={styles.videoGroupText}>{I18n.t('Creating a video will add more value to your group')}</Text>
            
            <View style={styles.addVideoView}>
              <Image style={styles.addVideoImage} source={require('../image/ic_add_video.png')}/>
              <Text style={styles.addVideoText}>+ {I18n.t('Add a video 10s max')}</Text>
            </View>
            
            <View style={styles.videoLongView}>
              <Text style={styles.videoLongText}>{I18n.t('For a longer video')}</Text>
              <View style={styles.videoLongButton}>
                <Text style={styles.videoLongButtonText}>{I18n.t('Spend Premium')}</Text>
              </View>
            </View>
            
            <View style={styles.descriptionView}>
              <Image style={styles.descriptionImage} source={require('../image/ic_description.png')}/>
              <Text style={styles.descriptionText}>{I18n.t('Description')}</Text>
            </View>
            <View style={styles.typeActivityView}>
              <Image style={styles.typeActivityImage} source={require('../image/ic_type_activity.png')}/>
              <Text style={styles.typeActivityText}>{I18n.t('Type of activity')}</Text>
              <Image style={styles.typeActivityExpandImage} source={require('../image/ic_down.png')}/>
            </View>
            
            <View style={styles.numberView}>
              <View style={styles.numberTopView}>
                <Image style={styles.numberImage} source={require('../image/ic_number_participants.png')}/>
                <Text style={styles.numberText}>{I18n.t('Number of participants')}</Text>
                <Text style={styles.numberValue}>{this.state.numberOfParticipants}</Text>
              </View>
              <View style={styles.numberSliderView}>
                <Slider
                  style={styles.slider}
                  value= {this.state.numberOfParticipants}
                  onValueChange={this.numberOfParticipantsChange.bind(this)}
                  minimumValue={0}
                  maximumValue={100}
                  maximumTrackTintColor='#86939c'  
                  minimumTrackTintColor='#00ccd2'
                  thumbTintColor='#f5f5f5' >
                </Slider>
              </View>
            </View>

            <View style={styles.dateView}>
              <View style={styles.startDateView}>
                <Image style={styles.startDateImage} source={require('../image/ic_calander.png')}/>
                <View style={styles.startDateTextView}>
                  <Text style={styles.dateLabelText}>{I18n.t('Start date')}</Text>
                  <Text style={styles.dateValueText}>{I18n.t('Today at')} 16:00 m</Text>
                </View>
                <Image style={styles.dateExpandImage} source={require('../image/ic_forward.png')}/>
              </View>
              <View style={[styles.startDateView]}>
                <Image style={styles.startDateImage} source={require('../image/ic_calander.png')}/>
                <View style={styles.startDateTextView}>
                  <Text style={styles.dateLabelText}>{I18n.t('End date')}</Text>
                  <Text style={styles.dateValueText}>{I18n.t('Day month hour')}</Text>
                </View>
                <Image style={styles.dateExpandImage} source={require('../image/ic_forward.png')}/>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(CreateGroup);