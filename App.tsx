
import React, {useState} from 'react';
import {Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {StatusBar} from 'expo-status-bar'

export default function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.centeredView}>
      <StatusBar style="auto" />
      
        <Modal
          visible={showModal}
          onRequestClose={() => {
            setShowModal(!showModal);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setShowModal(!showModal)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setShowModal(!showModal)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1d1d1d'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    padding: 55,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#797979ff',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
