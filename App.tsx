import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Modal, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useWindowDimensions } from 'react-native';
import WebView from 'react-native-webview';

const App: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const windowDimensions = useWindowDimensions();
  const githubUrl = 'https://github.com/ndukwesamuel/';

  const [cardWidth, setCardWidth] = useState<number>(
    windowDimensions.width * 0.8
  );

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.card, { width: cardWidth }]}>
        <Image
          source={require('./assets/profile.jpg')}
          style={{ width: 200, height: 200, borderRadius: 50 }}
        />
        <Text style={styles.userName}>Ndukwe Samuel</Text>
        <Text style={styles.track}>Mobile Development</Text>

        <Pressable style={styles.buttonProfile} onPress={toggleModal}>
          <Image
            source={require('./assets/github.png')}
            style={styles.gitHub}
          />
          <Text style={styles.profileText}>Open Github</Text>
        </Pressable>

        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <WebView source={{ uri: githubUrl }} />
          <View style={styles.modalContent}>
            <Pressable style={styles.button} onPress={toggleModal}>
              <Text style={{ color: 'white' }}>Close</Text>
            </Pressable>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 24,
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 10,
    alignItems: 'center',
  },
  buttonProfile: {
    backgroundColor: 'rgba(28, 25, 23, 1)',
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 110,
    marginTop: 5,
  },
  gitHub: {
    width: 28,
    height: 28,
  },
  button: {
    backgroundColor: 'rgba(28, 25, 23, 1)',
    shadowColor: 'rgb(0, 0, 0)',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderRadius: 110,
    marginTop: 4,
    marginBottom: 16,
  },
  userName: {
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: 32,
    fontWeight: '600',
    letterSpacing: 0,
    marginTop: 5,
  },
  track: {
    textAlign: 'left',
    color: 'rgba(55, 65, 81, 1)',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0,
  },
  profileText: {
    textAlign: 'left',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0,
  },
  modalContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
