import { StyleSheet, Text, View, Image } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <View style={styles.header}>
          <Image
            style={styles.profilePic}
            source={require('./assets/profile-pic.jpg')}
          />
          <View style={styles.postDetails}>
            <Text style={styles.author}>Thabo Lebese</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.date}>Yesterday</Text>
              <Fontisto name='world-o' size={15} color='#666' />
            </View>
          </View>
        </View>
        <View>
          <Text>Amazing times in This long text that I want to write here</Text>
          <Image
            style={styles.postImage}
            source={require('./assets/ocean.jpg')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666',
    alignItems: 'center',
    justifyContent: 'center',
  },
  post: {
    backgroundColor: '#fff',
    width: '80%',
    height: '50%',
    padding: 10,
  },
  profilePic: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 30,
  },
  header: {
    flexDirection: 'row',
  },
  author: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    color: '#666',
    marginRight: 5,
  },
  postImage: {
    width: '100%',
    height: 200,
  },
});
