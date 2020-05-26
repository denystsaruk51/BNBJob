import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity ,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {styles} from '../styles/RecruiterField.style';
import StatusBar from '../components/StatusBar';
import I18n from '../locale-data/i18n';
import Loader from 'react-native-modal-loader';

import TouchableField from '../components/TouchableField';
import CommonSearchBar from '../components/CommonSearchBar';

import { GetProfessionalFields } from '../services/Common';
import Config from '../services/Config';

class RecruiterField extends Component {
  constructor(props){
    super(props);

    this.state = { 
      fields:[],
      searchedFields:[],
      selectedIndex: 0,
      isSearching: false,
      isLoading: false,
    }

    this.onSkip = this.onSkip.bind(this);
    this.handleSearchText=this.handleSearchText.bind(this);
    this.handleItemClick=this.handleItemClick.bind(this);
  }

  static propTypes = {
    routes: PropTypes.object,
  };
  static navigationOptions = {
    header: null ,
  };

  componentDidMount() {
    this.getProfessionalFields();
  }

  async getProfessionalFields() {
    const TOKEN = await AsyncStorage.getItem(Config.STORAGE_TOKEN_KEY);
    this.setState({ isLoading: true });
    GetProfessionalFields(TOKEN)
      .then((res) => {
        if(res.success === true) {
          const data = res.data;
          const dataList = Object.keys(data).map(_id => ({
            ...data[_id],
            id: _id,
          }));

          this.setState({ 
            isLoading: false,
            fields: dataList,
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

  onSkip(){
    Actions.reset("recruiterPublish");
  }

  handleSearchText(text) {
    const key = text.toLowerCase();
    const { fields } = this.state;
    if(key && key.length > 0) {
      const searchedFields = [];
      fields.forEach(fieldItem => {
        const name = fieldItem.title.toLowerCase();
        if( name.indexOf(key) != -1 ) {
          searchedFields.push(fieldItem);
        }
      });
      this.setState({
        searchedFields: searchedFields,
        isSearching: true,
      })
    } else {
      this.setState({
        searchedFields: [],
        isSearching: false,
      })
    }
  }

  handleItemClick(fieldItem, index) {
    this.setState({
      selectedIndex: index,
    });

    Actions.recruiterSubField({field: fieldItem});
  }

  renderFieldItem(item, index){
    const { selectedIndex } = this.state;
    return (
      <TouchableField
        key={item.id}
        typeUser="recruite"
        typeText={item.title}
        typeIcon="organization"
        typeBorderColor="#cadbea"
        selected={selectedIndex === index ? true : false}
        index={index}
        data={item}
        handleItemClick={this.handleItemClick}>
      </TouchableField>
    );
  }

  renderFields(){
    const { fields, searchedFields, isSearching } = this.state;
    const fieldsContainerContent = [];
    if(isSearching) {
      if (searchedFields && searchedFields.length) {
        searchedFields.forEach((item, index) => {
          fieldsContainerContent.push(
            this.renderFieldItem(item, index)
          );
        });
      }
    } else {
      if (fields && fields.length) {
        fields.forEach((item, index) => {
          fieldsContainerContent.push(
            this.renderFieldItem(item, index)
          );
        });
      }
    }

    return fieldsContainerContent;
  }

  render() {
    const fieldsContainerContent = this.renderFields();
    return (
      <View style={styles.container}>
        <Loader loading={this.state.isLoading} color="#ff66be" />
        <StatusBar backgroundColor="#f9f9f9" barStyle="dark-content" />
        <SafeAreaView/>
        <TouchableOpacity onPress={this.onSkip}>
          <View>
            <Text style={[styles.buttonTopRight, styles.textRight, styles.colorRed]}>{I18n.t('Skip')}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.fieldContainer}>
          <Text style={[styles.title, styles.width60p]}>{I18n.t('Professional Field')}</Text>
          <Text style={[styles.subtitle]}>{I18n.t('Choose the professional field we allow you to propose tailor-made offers')}</Text>
        </View>

        <View style={styles.searchBarContainer}>
          <CommonSearchBar handleChangeText={this.handleSearchText} />
        </View>

        <ScrollView contentContainerStyle={styles.scrollViewStyle}>
          <View style={styles.fieldContainer}>

            {fieldsContainerContent}

          </View>
        </ScrollView>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(RecruiterField)