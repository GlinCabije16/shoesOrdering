import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ShoeCard({ shoe, onPress }: any) {
  return (
    <View style={{ marginBottom: 20, borderWidth: 1, padding: 10 }}>
      <Text style={{ fontSize: 18 }}>{shoe.name}</Text>
      <Text>${shoe.price}</Text>
      <Button title="Order Now" onPress={onPress} />
    </View>
  );
}
