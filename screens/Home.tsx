import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';

const SHOES = [
  {
    id: '1',
    name: 'Nike Air Force 1 07',
    price: 4195,
    image:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/AIR+FORCE+1+%2707.png',
  },
  {
    id: '2',
    name: 'Air Jordan 1',
    price: 9895,
    image:
      'https://puresoles.ph/cdn/shop/products/170_156d48a8-ddf3-4478-9361-706b8545d3d1.png?v=1694152013',
  },
  {
    id: '3',
    name: 'React Infinity Run',
    price: 4657,
    image:
      'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/80499960-56cd-469b-bc55-2825f2366159/W+REACT+INFINITY+RUN+FK+2.png',
  },
  {
    id: '4',
    name: 'nike womens v2k run',
    price: 6895,
    image:
      'https://www.jdsports.cy/2745430-product_horizontal/nike-v2k-run.jpg',
  },
  {
    id: '5',
    name: 'Nike Cortez Leather',
    price: 4995,
    image:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5acdf6dc-61c4-4bb9-961e-1ec870a9e27f/W+NIKE+CORTEZ.png',
  },
  {
    id: '6',
    name: 'Nike Dunk Low',
    price: 5895,
    image:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/338d0737-bd55-4b33-86f4-e2f92a11d3c8/NIKE+DUNK+LOW+NN.png',
  },
  {
    id: '7',
    name: 'Kobe IX',
    price: 5795,
    image:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4a988030-c54a-4b6d-ab45-487a9f701ac6/KOBE+IX+LOW+EM+%28GS%29.png',

  },
  {
    id: '8',
    name: 'Nike SB Force 58',
    price: 3895,
    image:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ace5a056-1c85-44e5-a15c-a506a60183eb/NIKE+SB+FORCE+58.png',
  },
  {
    id: '9',
    name: 'Nike Vaporfly 4',
    price: 13295,
    image:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9b390895-8786-4437-99bf-af03be5c20a0/ZOOMX+VAPORFLY+NEXT%25+4.png',
  },
  {
    id: '10',
    name: 'Nike Downshifter 13',
    price: 3295,
    image:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d6b2024d-fc56-4ce8-a12b-39d8fb4ee413/NIKE+DOWNSHIFTER+13.png',
  },
  {
    id: '11',
    name: 'Chuck Taylor All Star Lift',
    price: 3990,
    image:
      'https://www.converse.ph/media/catalog/product/cache/fd0e379f89890db9af2334e8ce8c85ef/0/8/0802-CON560845C005007-1.jpg',
  },

  {
    id: '12',
    name: 'Run Star Hike Canvas Platform',
    price: 3075,
    image:
      'https://www.converse.ph/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0802-CON168816C000003-1.jpg',
  },
  {
    id: '13',
    name: 'Converse x Comme des Garçons Chuck 70',
    price: 3832,
    image:
      'https://www.converse.ph/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0802-CONA08805C0CM08H-1.jpg',
  },
  {
    id: '14',
    name: 'Run Star Legacy CX Platform Crafted',
    price: 4543,
    image:
      'https://www.converse.ph/media/catalog/product/cache/ae7cee22ac1ff58c2794c87414f27b45/0/8/0802-CONA10654C0CM07H-1.jpg',
  },
  {
    id: '15',
    name: 'PUMA Club 5v5 Sneakers',
    price: 6000,
    image:
      'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/389406/03/sv01/fnd/PHL/fmt/png/PUMA-Club-5v5-Sneakers',
  },
  {
    id: '16',
    name: 'MB.03 Lo Lava Basketball Shoes',
    price: 4424,
    image:
      'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/310847/01/sv01/fnd/PHL/fmt/png/MB.03-Lo-Lava-Basketball-Shoes',
  },
  {
    id: '17',
    name: 'Smash Leather Trainers',
    price: 2100,
    image:
      'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/356722/02/sv01/fnd/PHL/fmt/png/Smash-Leather-Trainers',
  },
  {
    id: '14',
    name: 'Speedcat OG Sneakers Unisex',
    price: 4800,
    image:
      'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/398846/02/sv01/fnd/PHL/fmt/png/Speedcat-OG-Sneakers-Unisex',
  },


];


const LoginScreen = ({ onLogin }: { onLogin: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Dummy check
    if (username.trim() && password.trim()) {
      setError('');
      onLogin();
    } else {
      setError('Please enter username and password');
    }
  };

  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.title}>Welcome to Shoes Online Shop</Text>
      <TextInput
        placeholder="Username"
        placeholderTextColor="#888"
        style={loginStyles.input}
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#888"
        style={loginStyles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={loginStyles.error}>{error}</Text> : null}
      <TouchableOpacity style={loginStyles.loginButton} onPress={handleLogin}>
        <Text style={loginStyles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};



const ShoeShop = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'profile', title: 'Profile' },
    { key: 'about', title: 'About' },
    { key: 'shop', title: 'Shop' },
    { key: 'cart', title: 'Cart' },
    { key: 'settings', title: 'Settings' },
  ]);

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [greeting, setGreeting] = useState('Welcome, Champion!');
  const [aboutModalVisible, setAboutModalVisible] = useState(false);
  const [cart, setCart] = useState<
    { id: string; name: string; price: number; image: string; quantity: number }[]
  >([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Image picker for profile
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setProfileImage(result.assets[0].uri);
    }
  };

  // Cart functions
  const addToCart = (shoe: { id: string; name: string; price: number; image: string }) => {
    setCart((prevCart) => {
      const found = prevCart.find((item) => item.id === shoe.id);
      if (found) {
        return prevCart.map((item) =>
          item.id === shoe.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...shoe, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (
    shoe: { id: string; name: string; price: number; image: string; quantity: number }
  ) => {
    setCart((prevCart) => {
      const found = prevCart.find((item) => item.id === shoe.id);
      if (found) {
        if (found.quantity === 1) {
          return prevCart.filter((item) => item.id !== shoe.id);
        } else {
          return prevCart.map((item) =>
            item.id === shoe.id ? { ...item, quantity: item.quantity - 1 } : item
          );
        }
      }
      return prevCart;
    });
  };

  const onCheckout = () => {
    if (cart.length === 0) {
      Alert.alert('Cart is empty', 'Please add shoes before checkout.');
    } else {
      Alert.alert('Checkout Success', 'Thank you for your purchase!');
      setCart([]);
    }
  };

  const onAbout = () => setAboutModalVisible(true);

 
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

 
  const ProfileRoute = () => (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <Text style={[styles.title, isDarkMode && styles.titleDark]}>👤 Your Profile</Text>
      <TouchableOpacity onPress={pickImage} activeOpacity={0.7}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <View
            style={[
              styles.profileImagePlaceholder,
              isDarkMode && styles.profileImagePlaceholderDark,
            ]}
          >
            <Text style={[styles.profileImageText, isDarkMode && styles.profileImageTextDark]}>
              Tap to Upload
            </Text>
          </View>
        )}
      </TouchableOpacity>
      <TextInput
        style={[styles.greetingInput, isDarkMode && styles.greetingInputDark]}
        value={greeting}
        onChangeText={setGreeting}
        placeholder="Enter your greeting"
        placeholderTextColor={isDarkMode ? '#aaa' : '#666'}
      />
    </View>
  );

 
  const AboutRoute = () => (
    <View style={[styles.container, isDarkMode && styles.containerDark, styles.centerContent]}>
      <Text style={[styles.aboutText, isDarkMode && styles.aboutTextDark]}>
        Welcome to the official Shoes Online Shop app. Shop the latest kicks, manage your
        profile, and enjoy a seamless, stylish experience.
      </Text>
    </View>
  );


  const ShopRoute = () => (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <FlatList
        data={SHOES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
        renderItem={({ item }) => (
          <View style={[styles.cardGrid, isDarkMode && styles.cardGridDark]}>
            <Image source={{ uri: item.image }} style={styles.imageGrid} />
            <Text style={[styles.textGrid, isDarkMode && styles.textGridDark]}>{item.name}</Text>
            <Text style={[styles.priceGrid, isDarkMode && styles.priceGridDark]}>
              ₱{item.price.toLocaleString()}
            </Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => addToCart(item)}
              activeOpacity={0.8}
            >
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );

  
  const CartRoute = () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
      <View style={[styles.container, isDarkMode && styles.containerDark]}>
        <Text style={[styles.title, isDarkMode && styles.titleDark]}>🛒 Your Cart</Text>
        {cart.length === 0 ? (
          <Text>
            Your cart is empty.
          </Text>
        ) : (
          <>
            <FlatList
              data={cart}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={[styles.cartItem, isDarkMode && styles.cartItemDark]}>
                  <Image source={{ uri: item.image }} style={styles.imageCart} />
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={[styles.textCart, isDarkMode && styles.textCartDark]}>{item.name}</Text>
                    <Text style={[styles.priceCart, isDarkMode && styles.priceCartDark]}>
                      ₱{item.price.toLocaleString()}
                    </Text>
                  </View>
                  <View style={styles.qtyControls}>
                    <TouchableOpacity
                      style={styles.buttonQty}
                      onPress={() => removeFromCart(item)}
                      activeOpacity={0.7}
                    >
                      <Text style={styles.qtyText}>−</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity
                      style={styles.buttonQty}
                      onPress={() => addToCart(item)}
                      activeOpacity={0.7}
                    >
                      <Text style={styles.qtyText}>＋</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
            <Text style={[styles.total, isDarkMode && styles.totalDark]}>
              Total: ₱{total.toLocaleString()}
            </Text>
            <TouchableOpacity style={styles.checkoutButton} onPress={onCheckout} activeOpacity={0.8}>
              <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  };


  const SettingsRoute = () => (
    <View style={[styles.container, isDarkMode && styles.containerDark]}>
      <Text style={[styles.title, isDarkMode && styles.titleDark]}>⚙️ Settings</Text>
      <View style={styles.settingsButtonsContainer}>
        <TouchableOpacity
          style={[styles.settingsButton, isDarkMode && styles.settingsButtonDark]}
          onPress={onAbout}
          activeOpacity={0.7}
        >
          <Text style={[styles.settingsButtonText, isDarkMode && styles.settingsButtonTextDark]}>
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.settingsButton, isDarkMode && styles.settingsButtonDark, { backgroundColor: '#D32F2F' }]}
          onPress={() => setIsLoggedIn(false)}
          activeOpacity={0.7}
        >
          <Text style={[styles.settingsButtonText, { color: '#fff' }]}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.settingsButton, isDarkMode && styles.settingsButtonDark, { backgroundColor: '#388E3C' }]}
          onPress={() => Alert.alert('Help', 'Contact support@nikeshop.com')}
          activeOpacity={0.7}
        >
          <Text style={[styles.settingsButtonText, isDarkMode && styles.settingsButtonTextDark]}>
            Help
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.darkModeContainer}>
        <Text style={[styles.darkModeText, isDarkMode && styles.darkModeTextDark]}>
          {isDarkMode ? 'Dark Mode' : 'Light Mode'}
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={(val) => setIsDarkMode(val)}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isDarkMode ? '#6200ee' : '#f4f3f4'}
        />
      </View>
    </View>
  );

  const renderScene = SceneMap({
    profile: ProfileRoute,
    about: AboutRoute,
    shop: ShopRoute,
    cart: CartRoute,
    settings: SettingsRoute,
  });

  return (
    <>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: 360 }}
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={isDarkMode ? styles.tabBarDark : styles.tabBar}
            indicatorStyle={{ backgroundColor: '#FF3B30' }}
            activeColor="#FF3B30"
            inactiveColor={isDarkMode ? '#AAA' : '#444'}
            
            scrollEnabled
          />
        )}
      />

    
      <Modal
        visible={aboutModalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setAboutModalVisible(false)}
      >
        <View style={modalStyles.modalOverlay}>
          <View style={modalStyles.modalContent}>
            <Text style={modalStyles.modalTitle}>About Nike Shop</Text>
            <Text style={modalStyles.modalText}>
            Welcome to the official Shoes Online Shop app. Shop the latest kicks, manage your
            profile, and enjoy a seamless, stylish experience.
            </Text>
            <TouchableOpacity
              style={modalStyles.closeButton}
              onPress={() => setAboutModalVisible(false)}
              activeOpacity={0.7}
            >
              <Text style={modalStyles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

// ---------- Main App wrapper ----------
export default function App() {
  return <ShoeShop />;
}

// -------------- Styles ----------------

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FF3B30',
    marginBottom: 36,
    fontFamily: 'Arial',
  },
  input: {
    width: '100%',
    backgroundColor: '#222',
    color: '#eee',
    fontSize: 18,
    paddingHorizontal: 20,
    paddingVertical: 14,
    marginVertical: 10,
    borderRadius: 30,
    fontWeight: '600',
  },
  error: {
    color: '#FF3B30',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#FF3B30',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 16,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 18,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  containerDark: {
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
    color: '#111',
    marginBottom: 20,
    fontFamily: 'Arial',
  },
  titleDark: {
    color: '#fff',
  },
  profileImage: {
    width: 300,
    height: 300,
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  profileImagePlaceholder: {
    width: 300,
    alignSelf: 'center',
    height: 300,
    borderRadius: 100,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImagePlaceholderDark: {
    backgroundColor: '#222',
  },
  profileImageText: {
    color: '#555',
    fontWeight: '600',
  },
  profileImageTextDark: {
    color: '#aaa',
  },
  greetingInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 30,
    color: '#111',
    alignSelf: 'center'
  },
  greetingInputDark: {
    borderColor: '#333',
    color: '#eee',
  },
  aboutText: {
    fontSize: 30,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    marginHorizontal: 30,
    
  },
  aboutTextDark: {
    color: '#ccc',
  },
  centerContent: {
    justifyContent: 'center',
    flex: 1,
  },
  gridContainer: {
    paddingBottom: 20,
  },
  cardGrid: {
    flex: 1,
    margin: 8,
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  cardGridDark: {
    backgroundColor: '#222',
  },
  imageGrid: {
    width: 500,
    height: 500,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  textGrid: {
    fontWeight: '700',
    fontSize: 20,
    color: '#111',
    alignSelf: 'center',
  },
  textGridDark: {
    color: '#eee',
  },
  priceGrid: {
    fontWeight: '900',
    fontSize: 20,
    color: '#FF3B30',
    marginVertical: 6,
  },
  priceGridDark: {
    color: '#FF6659',
  },
  addButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginTop: 6,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    padding: 10,
    marginVertical: 6,
  },
  cartItemDark: {
    backgroundColor: '#222',
  },
  imageCart: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  textCart: {
    fontWeight: '700',
    fontSize: 16,
    color: '#111',
  },
  textCartDark: {
    color: '#eee',
  },
  priceCart: {
    fontWeight: '900',
    fontSize: 24,
    color: '#FF3B30',
  },
  priceCartDark: {
    color: '#FF6659',
  },
  qtyControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonQty: {
    backgroundColor: '#FF3B30',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
  },
  qtyText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '900',
  },
  quantityText: {
    marginHorizontal: 8,
    fontWeight: '700',
    fontSize: 24,
  },
  total: {
    fontWeight: '900',
    fontSize: 24,
    marginVertical: 12,
    color: '#FF3B30',
    textAlign: 'right',
  },
  totalDark: {
    color: '#FF6659',
  },
  checkoutButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 24,
  },
  settingsButtonsContainer: {
    marginVertical: 24,
  },
  settingsButton: {
    backgroundColor: '#060270',
    paddingVertical: 16,
    borderRadius: 30,
    marginVertical: 10,
    alignItems: 'center',
  },
  settingsButtonDark: {
    backgroundColor: '#333',
  },
  settingsButtonText: {
    fontWeight: '900',
    fontSize: 24,
    color: '#F3F2FF',
  },
  settingsButtonTextDark: {
    color: '#F3F2FF',
  },
  darkModeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginTop: 20,
  },
  darkModeText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#060270',
  },
  darkModeTextDark: {
    color: '#060270',
  },
  tabBar: {
    backgroundColor: '#ffffff',
    color:'#060270',
    fontSize: 24
  },
  tabBarDark: {
    backgroundColor: '#060270',
    color:'#060270',
    fontSize: 24
  },
});

const modalStyles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    padding: 24,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
  },
  modalTitle: {
    fontWeight: '900',
    fontSize: 22,
    marginBottom: 12,
    color: '#FF3B30',
    textAlign: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#FF3B30',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
