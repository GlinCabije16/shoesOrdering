import React from 'react';
import { View, Text, Button } from 'react-native';
import { auth } from '../firebaseConfig';

export default function Profile({ navigation }: any) {
  const logout = async () => {
    await auth.signOut();
    navigation.replace('Login');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Logged in as: {auth.currentUser?.email}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
