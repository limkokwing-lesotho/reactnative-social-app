import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Fontisto, AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <View style={styles.postBody}>
          <View style={styles.header}>
            <Image
              style={styles.profilePic}
              source={require('./assets/profile-pic.jpg')}
            />
            <View style={styles.postDetails}>
              <Text style={styles.author}>Thabo Lebese</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.date}>Yesterday</Text>
                <Fontisto name='world-o' size={15} color='#9E9E9E' />
              </View>
            </View>
          </View>
          <View>
            <Text>
              Amazing times in This long text that I want to write here
            </Text>
            <Image
              style={styles.postImage}
              source={require('./assets/ocean.jpg')}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <AntDesign name='like1' size={24} color='#9E9E9E' />
            <Text style={styles.footerText}>Like</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  post: {
    backgroundColor: '#fff',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    width: '80%',
  },
  postBody: {
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
    color: '#9E9E9E',
    marginRight: 5,
    fontSize: 13,
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  footer: {
    height: 40,
    paddingLeft: 10,
    width: '100%',
    backgroundColor: '#ECEFF1',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  footerText: {
    marginLeft: 5,
    color: '#9E9E9E',
    fontWeight: 'bold',
  },
});
