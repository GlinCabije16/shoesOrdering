import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebaseConfig';
export default function ShoeDetails({ route }: any) {
  const { shoe } = route.params;

  const placeOrder = async () => {
    await addDoc(collection(db, 'orders'), {
      shoeId: shoe.id,
      shoeName: shoe.name,
      price: shoe.price,
      userId: auth.currentUser?.uid,
      date: new Date().toISOString()
    });
    Alert.alert('Success', 'Order placed!');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{shoe.name}</Text>
      <Text style={{ fontSize: 18 }}>${shoe.price}</Text>
      <Button title="Place Order" onPress={placeOrder} />
    </View>
  );
}
