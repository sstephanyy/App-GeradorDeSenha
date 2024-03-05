// --------------------- HOME PAGE ----------------------------

import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native"
import Slider from "@react-native-community/slider"
import { ModalPassword } from '../../components/modal/index';

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_";


export function Home() {

  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState("") //vai começar empty até que a senha seja gerada
  const [modalVisible, setModalVisible] = useState(false);

  function generatePassword(){

    let password = "";

    for(let i=0, n = charset.length; i < size; i++)
    {
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password);
    setModalVisible(true);

  }

  return (
    <View style={styles.container}>
      <Image 
        source={require("../../../assets/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}> {size} caracteres</Text>

      <View style={styles.area}>
        <Slider 
          style={{ height: 50}}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="orange"
          minimumTrackTintColor="black"
          thumbTintColor="#392de9"
          value={size}
          //This should be called whenever the value of the component changes.
          onValueChange={ (value) => setSize(value.toFixed(0)) } //value parameter represents the NEW value of the component when it changes.
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={generatePassword}>
        <Text style={styles.btnText}>Gerar Senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false) }/>
      </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: "#F3F3F3"
  },
  logo:{
    marginBottom: 60,

  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 7
  },
  btn:{
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  btnText:{
    color: "#FFF",
    fontSize: 20
  },
  title:{
    fontSize: 27,
    fontWeight: "bold"
  }
})