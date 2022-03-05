import React from "react";
import { View, Text, Pressable } from 'react-native';
import { Auth } from 'aws-amplify';

const ProfileScreen = (props) => {

    const logout = () => {
        Auth.signOut();
    }

    return (
        <View style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Pressable 
                style={{width: '60%', height: 60, backgroundColor: '#f15454', borderRadius: '25px'}}
                onPress={logout}
            >
                <Text style={{
                    color: 'white', fontWeight: 'bold', fontSize: 18, left: 75, top: 18
                    }}>Log Out
                </Text>
            </Pressable>
        </View>
    )
}

export default ProfileScreen;