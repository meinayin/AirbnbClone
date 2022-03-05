import React, {useState, useEffect} from "react";
import {  createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import SearchResultsMaps from '../screens/SearchResultsMaps';
import { useRoute } from "@react-navigation/native";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../graphql/queries";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {

  const [posts, setPosts] = useState([]);

  const route = useRoute();
  

  useEffect(() => {
    const fetchPosts = async () => {
      try {

        const postsResult = await API.graphql(
          graphqlOperation(listPosts)
        ) 
        setPosts(postsResult.data.listPosts.items);
      }catch (e) {
        console.log(e);
      }
    }

    fetchPosts();
  }, [])

  return (
    <Tab.Navigator tabBarOptions={{
      activeTintColor: '#f15454',
      indicatorStyle: {
        backgroundColor: '#f15454',
      }
    }}>
      <Tab.Screen name={"list"}>
        {() => (
          <SearchResults posts={posts} />
        )}
      </Tab.Screen>
      <Tab.Screen name={"map"}>
        {() => (
          <SearchResultsMaps posts={posts} />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;