import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db, auth } from '../firebaseConfig';

export default function Orders() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const q = query(collection(db, 'orders'), where('userId', '==', auth.currentUser?.uid));
      const snapshot = await getDocs(q);
      setOrders(snapshot.docs.map(doc => doc.data()));
    };
    fetchOrders();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={orders}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>{item.shoeName} - ${item.price}</Text>
            <Text>{new Date(item.date).toLocaleString()}</Text>
          </View>
        )}
      />
    </View>
  );
}
