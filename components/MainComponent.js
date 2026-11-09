
import { React, Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { baseUrl } from '../shared/baseUrl';
import { View, Image, Text, Linking } from 'react-native';
import { Icon } from 'react-native-elements';

import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Home from './HomeComponent';

// NEW: Reservation
import Reservation from './ReservationComponent';

// redux
import { connect } from 'react-redux';
import { fetchLeaders, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';

const mapDispatchToProps = (dispatch) => ({
  fetchLeaders: () => dispatch(fetchLeaders()),
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos())
});

function HomeNavigatorScreen() {
  const HomeNavigator = createStackNavigator();

  return (
    <HomeNavigator.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: 'rgb(91, 50, 225)' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}
    >
      <HomeNavigator.Screen
        name='Home'
        component={Home}
        options={({ navigation }) => ({
          headerTitle: 'Home',
          headerLeft: () => (
            <Icon
              name='menu'
              size={36}
              color='#fff'
              onPress={() => navigation.toggleDrawer()}
              containerStyle={{ marginLeft: 10 }}
            />
          )
        })}
      />
    </HomeNavigator.Navigator>
  );
}

function AboutNavigatorScreen() {
  const AboutNavigator = createStackNavigator();

  return (
    <AboutNavigator.Navigator
      initialRouteName='About'
      screenOptions={{
        headerStyle: { backgroundColor: 'rgb(91, 50, 225)' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}
    >
      <AboutNavigator.Screen
        name='About'
        component={About}
        options={({ navigation }) => ({
          headerTitle: 'About',
          headerLeft: () => (
            <Icon
              name='menu'
              size={36}
              color='#fff'
              onPress={() => navigation.toggleDrawer()}
              containerStyle={{ marginLeft: 10 }}
            />
          )
        })}
      />
    </AboutNavigator.Navigator>
  );
}

function MenuNavigatorScreen() {
  const MenuNavigator = createStackNavigator();

  return (
    <MenuNavigator.Navigator
      initialRouteName='Menu'
      screenOptions={{
        headerStyle: { backgroundColor: 'rgb(91, 50, 225)' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}
    >
      <MenuNavigator.Screen
        name='Menu'
        component={Menu}
        options={({ navigation }) => ({
          headerTitle: 'Menu',
          headerLeft: () => (
            <Icon
              name='menu'
              size={36}
              color='#fff'
              onPress={() => navigation.toggleDrawer()}
              containerStyle={{ marginLeft: 10 }}
            />
          )
        })}
      />

      <MenuNavigator.Screen
        name='Dishdetail'
        component={Dishdetail}
        options={{
          headerTitle: 'Dish Detail'
        }}
      />
    </MenuNavigator.Navigator>
  );
}

function ContactNavigatorScreen() {
  const ContactNavigator = createStackNavigator();

  return (
    <ContactNavigator.Navigator
      initialRouteName='Contact'
      screenOptions={{
        headerStyle: { backgroundColor: 'rgb(91, 50, 225)' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}
    >
      <ContactNavigator.Screen
        name='Contact'
        component={Contact}
        options={({ navigation }) => ({
          headerTitle: 'Contact',
          headerLeft: () => (
            <Icon
              name='menu'
              size={36}
              color='#fff'
              onPress={() => navigation.toggleDrawer()}
              containerStyle={{ marginLeft: 10 }}
            />
          )
        })}
      />
    </ContactNavigator.Navigator>
  );
}

// NEW: Reservation Navigator
function ReservationNavigatorScreen() {
  const ReservationNavigator = createStackNavigator();

  return (
    <ReservationNavigator.Navigator
      initialRouteName='Reservation'
      screenOptions={{
        headerStyle: { backgroundColor: 'rgb(91, 50, 225)' },
        headerTintColor: '#fff',
        headerTitleStyle: { color: '#fff' }
      }}
    >
      <ReservationNavigator.Screen
        name='Reservation'
        component={Reservation}
        options={({ navigation }) => ({
          headerTitle: 'Reserve Table',
          headerLeft: () => (
            <Icon
              name='menu'
              size={36}
              color='#fff'
              onPress={() => navigation.toggleDrawer()}
            />
          )
        })}
      />
    </ReservationNavigator.Navigator>
  );
}

// Drawer giao dien tuy chinh
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>

      <View
        style={{
          backgroundColor: 'rgb(91, 50, 225)',
          height: 80,
          marginBottom: 5,
          alignItems: 'center',
          flexDirection: 'row'
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            source={{ uri: baseUrl + 'images/logo.png' }}
            style={{
              margin: 10,
              width: 80,
              height: 60,
              resizeMode: 'contain'
            }}
          />
        </View>

        <View style={{ flex: 2 }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 22,
              fontWeight: 'bold'
            }}
          >
            KhoaNTD
          </Text>
        </View>
      </View>

      <DrawerItemList {...props} />

      <DrawerItem
        label='Help'
        icon={({ focused, color, size }) => (
          <Icon
            name='help'
            size={size}
            color={focused ? 'rgb(91, 50, 225)' : '#ccc'}
          />
        )}
        onPress={() =>
          Linking.openURL(
            'https://reactnavigation.org/docs/getting-started'
          )
        }
      />

    </DrawerContentScrollView>
  );
}

function MainNavigatorScreen() {
  const MainNavigator = createDrawerNavigator();

  return (
    <MainNavigator.Navigator
      initialRouteName='HomeScreen'
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >

      <MainNavigator.Screen
        name='HomeScreen'
        component={HomeNavigatorScreen}
        options={{
          title: 'Home',
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              name='home'
              size={size}
              color={focused ? 'rgb(91, 50, 225)' : '#ccc'}
            />
          )
        }}
      />

      <MainNavigator.Screen
        name='AboutScreen'
        component={AboutNavigatorScreen}
        options={{
          title: 'About Us',
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              name='info'
              size={size}
              color={focused ? 'rgb(91, 50, 225)' : '#ccc'}
            />
          )
        }}
      />

      <MainNavigator.Screen
        name='MenuScreen'
        component={MenuNavigatorScreen}
        options={{
          title: 'Menu',
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              name='menu'
              size={size}
              color={focused ? 'rgb(91, 50, 225)' : '#ccc'}
            />
          )
        }}
      />

      <MainNavigator.Screen
        name='ContactScreen'
        component={ContactNavigatorScreen}
        options={{
          title: 'Contact Us',
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              name='contacts'
              size={size}
              color={focused ? 'rgb(91, 50, 225)' : '#ccc'}
            />
          )
        }}
      />

      {/* NEW: Reservation Screen */}
      <MainNavigator.Screen
        name='ReservationScreen'
        component={ReservationNavigatorScreen}
        options={{
          title: 'Reserve Table',
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Icon
              name='cutlery'
              type='font-awesome'
              size={size}
              color={focused ? 'rgb(91, 50, 225)' : '#ccc'}
            />
          )
        }}
      />

    </MainNavigator.Navigator>
  );
}

class Main extends Component {
  render() {
    return (
      <NavigationContainer>
        <MainNavigatorScreen />
      </NavigationContainer>
    );
  }

  componentDidMount() {
    // redux
    this.props.fetchLeaders();
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }
}

export default connect(null, mapDispatchToProps)(Main);
