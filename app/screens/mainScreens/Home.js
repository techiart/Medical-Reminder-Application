import React, {Component} from 'react';
import {
    ScrollView,
    StatusBar,
    Text,
    View,
    TouchableOpacity,
    Image,
<<<<<<< HEAD
    Button,
    AlertIOS,
    Platform,
    Dimensions,
=======
    StatusBar,
    Button,
    FlatList,
>>>>>>> master
    ActivityIndicator,
    AsyncStorage,
    ImageBackground,
    StyleSheet } from 'react-native';

<<<<<<< HEAD
=======
import {
  Container, 
  Content, 
  Icon, 
  Left, 
  Right,
  List, 
  ListItem  }
  from 'native-base';

>>>>>>> master

import colors from '../../constants/colors';
const { height, width } = Dimensions.get('window');

//import List from '../../components/List';
import bgImage from '../../images/background1.jpg';
import logo from '../../images/logo.png'
import Header from '../../components/Header';
import { Title } from 'native-base';
const headerTitle = 'Your Medication Reminders';
const  { width: WIDTH} = Dimensions.get('window');

class Home extends Component {
    state = {
      loadingItems: false,
      allItems: {},
      isCompleted: false,
    };
         componentDidMount = () => {
          this.loadingItems();
  }

    loadingItems = async () => {
		try {
      const allItems = await AsyncStorage.getItem('MedicationReminder');
			this.setState({
        loadingItems: true,
        currentDate: this.getCurrentDate(),
				allItems: JSON.parse(allItems)|| {}
      });
      console.log()
      console.log(JSON.parse(allItems,'items to render')) // check that items have loaded on start
		} catch (err) {
			console.log(err,'failure');
		}
  };

  _getWeekReminders = () => {
  };

    getCurrentDate = () => {
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() + 1;
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();
        newdate = year + "-" + month + "-" + day;
        return newdate;
  };


  _signOutAsync = async () => {
    try {
        await AsyncStorage.removeItem('userToken');
        this.props.navigation.navigate('Auth');
        this.setState({
          loggedin: false,
        })
      } catch (error) {
        // Error retrieving data
        console.log(error.message);
      }
    };
    _keyExtractor = (item, index) => item.id;



     //_keyExtractor = (item, index) => item.id;


    _getDayReminders = () => {
    };

      /*const CurrentDate = this.state.currrentDate;
      var todayItems;
      this.setState({
        day: true,
        todayItems: JSON.parse(todayItems) || {}
      })
    }; */

<<<<<<< HEAD
   
=======
    _getWeekReminders = () => {
      this.setState({
        day: false
      })
    };
>>>>>>> master


    deleteItem = id => {
      this.setState(prevState => {
        const allItems = prevState.allItems;
        delete allItems[id];
        const newState = {
          ...prevState,
          ...allItems
        };
        this.saveItems(newState.allItems);
        return { ...newState };
      });
    };
    
      completeItem = id => {
        this.setState(prevState => {
          const newState = {
            ...prevState,
            allItems: {
              ...prevState.allItems,
              [id]: {
                ...prevState.allItems[id],
                isCompleted: true
              }
            }
          };
          this.saveItems(newState.allItems);
          return { ...newState };
        });
      };

          incompleteItem = id => {
            this.setState(prevState => {
              const newState = {
                ...prevState,
                allItems: {
                  ...prevState.allItems,
                  [id]: {
                    ...prevState.allItems[id],
                    isCompleted: false
                  }
                }
              };
              this.saveItems(newState.allItems);
              return { ...newState };
            });
          };
    
          deleteAllItems = async () => {
            try {
              await AsyncStorage.removeItem('Medication');
              this.setState({ allItems: {} });
            } catch (err) {
              console.log(err);
            }
        };
        _helpButton = () => {
<<<<<<< HEAD
          AlertIOS.alert('help')
=======
          Alert.alert('help')
>>>>>>> master
        }
        

      Render_FlatList_Sticky_header = () => {
      
          var Sticky_header_View = (
      
          <View style={styles.header_style}>
      
            <Text style={{textAlign: 'center', color: '#fff', fontSize: 22}}> Medical Reminder </Text>
      
          </View>
      
          );
      
          return Sticky_header_View;
      };

    FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#607D8B",
        }}
      />
    );
    }
<<<<<<< HEAD

    saveItems = newItem => {
      const saveItem = AsyncStorage.setItem('MedicationReminder', JSON.stringify(newItem));
    };
=======
>>>>>>> master

    showItem = (value, notes, endDate, dosage) => {
      AlertIOS.alert('Your Medication notes' + notes+  '\n End date for Medication is '+ endDate)
    };

render() {
    const { loadingItems, allItems } = this.state;
    if(loadingItems==true) {
        return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.centered}>
              <Header title={headerTitle} />
        </View>
       
        <View style={styles.toggleButtons} >
        <TouchableOpacity style={styles.buttonDay}>
          <Button 
              style={styles.buttonDay}
              title="Reminders for today" 
              color="white" 
              onPress={this._getDayReminders}>
            </Button>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonWeek}>
          <Button 
            style={styles.buttonWeek}
              title="Reminders for this week" 
              color="white" 
              onPress={this._getWeekReminders}>
            </Button>
            </TouchableOpacity>
        </View>

        {
<<<<<<< HEAD
          allItems === undefined || allItems.length == 0  ?
       
        <View style={styles.list}>
            <ScrollView contentContainerStyle={styles.scrollableList}>
              {Object.values(allItems)
                .reverse()
                .map(item => (
                  <List
                    key={item.id}
                    {...item}
                    showItem={this.showItem}
                    deleteItem={this.deleteItem}
                    completeItem={this.completeItem}
                    incompleteItem={this.incompleteItem}
                  />
                ))}
        </ScrollView>
        </View>
        
      : 
          <Text style > No Reminders</Text>
=======
          allItems != '' ?
       
        <View style={styles.list}>
        <List>
        <FlatList
              contentContainerStyle={{
                alignSelf: 'flex-start'
            }}
            style={styles.listView}
            data={Object.keys(allItems)}
            renderItem={({ item }) => (
          <ListItem
              roundAvatar
              title={'${item.value'}
              subtitle={'dosage'+ item.dosage}
              />
          
          )}
          keyExtractor={item => allItems[item].id}
          key={allItems.id}
          numColumns={2}
          horizontal={false}
          columnWrapperStyle={styles.colwrapper}
          listheadercomponent={this.renderHeader}
          stickyHeaderIndices={[0]}
          listheadercomponent={this.renderHeader}
          ItemSeparatorComponent = {this.FlatListItemSeparator}
         
        />
         </List>
    </View>
   
        
      : 
          <Text> No Reminders</Text>
>>>>>>> master
      }
             
        <View style ={styles.buttonStyler}>
            <Button color='rgba(0,0,0,0.5)'
                    style={styles.standardText} 
                    title="sign me out" 
                    size={30}
                    onPress={() => this.props.navigation.navigate('Auth')}/>
        </View>
        <View style ={styles.buttonHelp}>
            <Button color='white'
                    style={styles.standardText} 
                    title="help?" 
                    size={30}
                    onPress={this._helpButton}/>
        </View>

        
        </ImageBackground>
            )} else 
            return (
                <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <ActivityIndicator size='large' color="white" />
            </ImageBackground>
        );
      };
    };
    

const styles = StyleSheet.create ({
    text: 
        {
        fontSize: 30, 
        color: 'white', 
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 150
        },
    standardText: {
        color: 'rgba(0,0,0,0.5)', 
        fontSize: 20,
        fontWeight: '500',
        marginTop: 15,
        opacity: 2
        },
    buttonStyler:{
          marginTop: 50,
          marginBottom: 10
        },
    buttonHelp: {
          marginTop: 50,
          marginBottom: 10,
          paddingLeft: 250,
  
        },
      logo:{
          width: 60,
          height: 60,
        },
    logoContainer: {
        alignItems: 'stretch',
      },
      backgroundContainer: {
        flex: 1,
        width: null, 
        height: null,
        justifyContent: 'center',
        alignItems: 'center'
      },
      toggleButtons: {
          flex: 1,
          marginTop: 10,
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'center',

        },
        buttonDay: {
          flex: 1,
<<<<<<< HEAD
          opacity: 1,
=======
          height: 45,
>>>>>>> master
          marginTop: 40,
          borderRadius: 45,
          backgroundColor: colors.lightblue,
          width: width - 50,
          height: width / 10,
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 5,
          ...Platform.select({
            ios: {
              shadowColor: 'rgb(50,50,50)',
              shadowOpacity: 0.8,
              shadowRadius: 2,
              shadowOffset: {
                height: 2,
                width: 0
              }
            },
            android: {
              elevation: 5
            }
          })
        },
        buttonWeek: {
          flex: 1,
<<<<<<< HEAD
          opacity: 1,
          marginTop: 40,
          borderRadius: 45,
          backgroundColor: colors.green1,
          width: width - 50,
          height: width / 10,
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 5,
          ...Platform.select({
            ios: {
              shadowColor: 'rgb(50,50,50)',
              shadowOpacity: 0.8,
              shadowRadius: 2,
              shadowOffset: {
                height: 2,
                width: 0
              }
            },
            android: {
              elevation: 5
            }
          })
        },
        list: {
          width: WIDTH -25,
          marginTop: 20,
          marginBottom: 280,
          paddingLeft: 25,
          alignItems: 'center',
          alignSelf: "stretch",
        },
        scrollableList: {
          marginTop: 15
=======
          marginTop: 40,
          height: 45,
          borderRadius: 45,
          backgroundColor: colors.green1,
        },
        list: {
          flexDirection: 'row',
          flex: 0.5,
          alignItems: 'center',
          marginBottom: 30,
          backgroundColor: colors.lightWhite,
          color: 'black',
          fontSize: 20,
          paddingVertical: 20
>>>>>>> master
        },
        colHeader: {
          fontSize: 20,

        },
        colwrapper: {
          backgroundColor: colors.lightWhite,
          borderWidth: 5,
          backgroundColor: colors.green1
        }

});
export default Home;