import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity ,
  ScrollView,
  SafeAreaView,
  AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Loader from 'react-native-modal-loader';
import {styles} from '../styles/recruiterSubField.style';
import StatusBar from '../components/StatusBar';
import I18n from '../locale-data/i18n';

import TouchableSubField from '../components/TouchableSubField';
import { GetProfessionalSubFields, SetProfessionalField } from '../services/Common';
import Config from '../services/Config';

class RecruiterSubField extends Component {
  constructor(props){
    super(props);

    this.state = {
      parentField: null,
      subFields:[],
      selectedIndex: 0,
      selectedItem: null,
      isLoading: false,
    }

    this.handleThankyou = this.handleThankyou.bind(this);
    this.handleItemClick=this.handleItemClick.bind(this);
  }

  static propTypes = {
    routes: PropTypes.object,
  };

  static navigationOptions = {
    header: null ,
  };
  componentDidMount() {
    const { field } = this.props;
    this.setState({
      parentField: field,
    });

    this.getProfessionalSubFields(field._id);
  }
  async getProfessionalSubFields(id) {
    const TOKEN = await AsyncStorage.getItem(Config.STORAGE_TOKEN_KEY);
    this.setState({ isLoading: true });
    GetProfessionalSubFields(TOKEN, id)
      .then((res) => {
        if(res.success === true) {
          const data = res.data;
          const dataList = Object.keys(data).map(_id => ({
            ...data[_id],
            id: _id,
          }));
          
          let selectedItem;
          dataList.forEach((item, index) => {
            if(index ===0 ){
              selectedItem = item;
            }
          });

          this.setState({ 
            isLoading: false,
            subFields: dataList,
            selectedIndex: 0,
            selectedItem: selectedItem,
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
  async handleThankyou() {
    const {parentField, selectedItem} = this.state;
    const TOKEN = await AsyncStorage.getItem(Config.STORAGE_TOKEN_KEY);
    this.setState({ isLoading: true });

    SetProfessionalField(TOKEN, parentField._id, selectedItem._id)
      .then((res) => {
        this.setState({ isLoading: false });
        if(res.success === true) {
          Actions.reset("recruiterPublish");
        } else {
          alert(JSON.stringify(res.error));
        }
      })
      .catch((reason) => {
        this.setState({ isLoading: false });
        alert(reason);
      });
  }

  goBack(){
    Actions.pop();
  }
  
  handleItemClick(fieldItem, index) {
    this.setState({
      selectedIndex: index,
      selectedItem: fieldItem,
    });
  }

  renderFieldItem(item, index){
    const { selectedIndex } = this.state;
    return (
      <TouchableSubField
        key={item.id}
        type="recruite"
        typeText={item.title}
        typeBorderColor="#cadbea"
        selected={selectedIndex === index ? true : false}
        index={index}
        data={item}
        handleItemClick={this.handleItemClick}>
      </TouchableSubField>
    );
  }

  renderFields(){
    const { subFields } = this.state;
    const fieldsContainerContent = [];
    if (subFields && subFields.length) {
      subFields.forEach((item, index) => {
        fieldsContainerContent.push(
          this.renderFieldItem(item, index)
        );
      });
    }

    return fieldsContainerContent;
  }

  render() {
    const { field } = this.props;
    const parentField = field;
    const fieldsContainerContent = this.renderFields();
    
    return (
        <View style={styles.container}>
          <Loader loading={this.state.isLoading} color="#ff66be" />
          <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
          <SafeAreaView style={{backgroundColor: '#ffffff'}}/>
          <View style={styles.titlebar}>
            <Text style={styles.title}>{I18n.t('Professional Field')} csub</Text>
            <View style={styles.backImgView}>
            <TouchableOpacity  onPress={this.goBack}>
                <Image style={styles.backImgButton} source={require('../image/ic_back.png')} />
            </TouchableOpacity>
            </View>
          </View>

          <View style={styles.highLightView}>
            <Image style={styles.whiteBackImg} source={require('../image/ic_back_white.png')} />
            <Text style={styles.highLightWhiteText}>{parentField.title}</Text>
            <Image style={styles.highLightRightImg} source={require('../image/ic_check_round_white.png')} />
          </View>

          <ScrollView showsVerticalScrollIndicator={true}>
            <View style={styles.margin20}>
              {fieldsContainerContent}
            </View>
          </ScrollView>

          <View style={styles.alignRight}>
            <TouchableOpacity onPress={this.handleThankyou}>
              <View style={styles.redButton}>
                <Text style={styles.thankyouText}>{I18n.t('Great thank you')}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

    );
  }
}

export default connect(({routes}) => ({routes}))(RecruiterSubField)