import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';
import React from 'react';
import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import HomeScreen  from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearchScreen';
import GuestsScreen from './src/screens/Guests';
import 'react-native-gesture-handler';
import Router from './src/navigation/Router';
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)
import { withAuthenticator } from 'aws-amplify-react-native';





function App() {
  return (
    
        <Router />
    
  );
}

export default withAuthenticator(App);

