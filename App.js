import { StyleSheet, Text, View, ScrollView, Image} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

export default function App() {
  return (
    
      <ScrollView>
      <Text style={{ fontSize: 50 }}>hola</Text>
      <Image source={logo} />
      <Text style={{ fontSize: 50 }}>mundo</Text>
      <Image source={logo} />
      <Text style={{ fontSize: 50 }}>como</Text>
      <Image source={logo} />
      <Text style={{ fontSize: 50 }}>estas</Text>
      <Image source={logo} />
      <Text style={{ fontSize: 50 }}>yo muy</Text>
      <Image source={logo} />
      <Text style={{ fontSize: 50 }}>bien</Text>
      <Image source={logo} />
      <Text style={{ fontSize: 50 }}>y tu</Text>
      <Image source={logo} />
      <Text style={{ fontSize: 50 }}>tu muy bien</Text>
      <Image source={logo} />
      <Text style={{ fontSize: 50 }}>bueno</Text>
      <Image source={logo} />
      <Text style={{ fontSize: 50 }}>adios</Text>
      <Image source={logo} />

    </ScrollView>
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});