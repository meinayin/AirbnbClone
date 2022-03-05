import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';
import styles from "./styles";
import searchResults from '../../../assets/data/search';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SuggestionRow from "./SuggestionRow";

const DestinationSearchScreen = (props) => {

    const [inputText, setInputText] = useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={{ height: 250, zIndex: 100 }}>
                <GooglePlacesAutocomplete
                    placeholder="Where are you going?"
                    onPress={(data, details = null) => {
                        console.log(data, details);
                        navigation.navigate('Guests');
                    }}
                    query={{
                        key: 'AIzaSyBZgKMeTtaY-3KGivnPpT5ggj867PCudfc',
                        language: 'en',
                        types: '(cities)',
                    }}
                    styles={{
                        container: { width: '100%', marginTop: 10},
                        textInput: styles.textInput,
                    }}
                    renderRow={(item) => <SuggestionRow item={item} />}
                    suppressDefaultStyles
                />
            </View>

        </View>
    );
};

export default DestinationSearchScreen;