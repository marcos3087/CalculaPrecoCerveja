import { StatusBar } from 'expo-status-bar';
import React, { useState, createRef, useCallback } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import CurrencyInput from 'react-native-currency-input';




const App = (props) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#002e48',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 50
    },
    logo: {
      width: "100%",
      height: 80,
      marginBottom: 10
    },
    btlogo: {
      width: "80%",
      height: 80,
      marginBottom: 10
    },
    padtex: {
      color: "#FFF",
      height: 40,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      lineHeight: 40,
      marginRight: 8,
      fontWeight: "bold",
      minWidth: 60,
      textAlign:'right'
    },
    linha: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      flex: 1,
      padding: 8
    },
    coluna: {
      width: "50%",
      flexDirection: "row",
      justifyContent: "space-evenly",
      justifyContent: "flex-start",
      height: 40,
      marginTop: 8
    },
    inputStyle: {
      color: '#002e48',
      paddingLeft: 15,
      paddingRight: 15,
      borderBottomWidth: 2,
      borderLeftWidth: 2,
      backgroundColor: "#FFFFFF",
      borderColor: '#ff812e',
      width: 100,
      borderRadius:5
    },
    divisoria:{
      width:"100%",
      height:1,
      borderBottomWidth:2,
      borderColor:"#ff812e"
    }
  })
  const iconedevapp = require("./assets/logobranco.png");
  //const iconFolhas = require("../../../assets/IconeFolhas.png");
  //const iconTextura = require("../../../assets/IconeTextura.png");

  const [val250, setVal250] = useState(0.00)
  const [val269, setVal269] = useState(0.00)
  const [val275, setVal275] = useState(0.00)
  const [val310, setVal310] = useState(0.00)
  const [val300, setVal300] = useState(0.00)
  const [val330, setVal330] = useState(0.00)
  const [val350, setVal350] = useState(0.00)
  const [val473, setVal473] = useState(0.00)
  const [val600, setVal600] = useState(0.00)
  const [val1L, setVal1L] = useState(0.00)
  const [val5L, setVal5L] = useState(0.00)
  const [valgas, setValGas] = useState(0.00)
  const [valalc, setValAlc] = useState(0.00)

  const calcula = (volume, valor) => {
    let valml = 0
    valml = (valor / volume)

    setVal250((valml * 250).toFixed(2))
    setVal269((valml * 269).toFixed(2))
    setVal275((valml * 275).toFixed(2))
    setVal300((valml * 300).toFixed(2))
    setVal310((valml * 310).toFixed(2))
    setVal330((valml * 330).toFixed(2))
    setVal350((valml * 350).toFixed(2))
    setVal473((valml * 473).toFixed(2))
    setVal600((valml * 600).toFixed(2))
    setVal1L((valml * 1000).toFixed(2))
    setVal5L((valml * 5000).toFixed(2))



  }
  const limpar =() =>{
    setVal250(0.00)
    setVal269(0.00)
    setVal275(0.00)
    setVal310(0.00)
    setVal330(0.00)
    setVal350(0.00)
    setVal473(0.00)
    setVal600(0.00)
    setVal1L(0.00)
    setVal5L(0.00)
    setValAlc(0.00)
    setValGas(0.00)
  }

  const calculagas = () => {
    setValAlc((valgas * 0.73).toFixed(2))

  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btlogo} onPress={() =>{limpar()}}>
      <Image source={iconedevapp} style={styles.logo}resizeMode="stretch" /></TouchableOpacity>
      <View style={styles.divisoria}></View>
      <View style={styles.linha}>
        <View style={styles.coluna}>
          <Text style={[styles.padtex]}>250 ml:</Text>
          <CurrencyInput
            value={val250}
            onChangeValue={setVal250}
            prefix="R$ "
            delimiter="."
            separator=","
            precision={2}
            style={styles.inputStyle}
            onSubmitEditing={() =>
              calcula(250, val250)
            }
            blurOnSubmit={false}

          />

        </View>
        <View style={styles.coluna}>
          <Text style={[styles.padtex]}> 269 ml:</Text>
          <CurrencyInput
            value={val269}
            onChangeValue={setVal269}
            prefix="R$ "
            delimiter="."
            separator=","
            precision={2}
            style={styles.inputStyle}
            onSubmitEditing={() =>
              calcula(269, val269)
            }
            blurOnSubmit={false}

          />

        </View>
      </View>
      <View style={styles.linha}>
        <View style={styles.coluna}>
          <Text style={[styles.padtex]}>275 ml:</Text>
          <CurrencyInput
            value={val275}
            onChangeValue={setVal275}
            prefix="R$ "
            delimiter="."
            separator=","
            precision={2}
            style={styles.inputStyle}
            onSubmitEditing={() =>
              calcula(275, val275)
            }
            blurOnSubmit={false}

          />

        </View>
        <View style={styles.coluna}>
          <Text style={[styles.padtex]}> 300 ml:</Text>
          <CurrencyInput
            value={val300}
            onChangeValue={setVal300}
            prefix="R$ "
            delimiter="."
            separator=","
            precision={2}
            style={styles.inputStyle}
            onSubmitEditing={() =>
              calcula(300, val300)
            }
            blurOnSubmit={false}

          />

        </View>
       
      </View>
      <View style={styles.linha}>
      <View style={styles.coluna}>
          <Text style={[styles.padtex]}> 310 ml:</Text>
          <CurrencyInput
            value={val310}
            onChangeValue={setVal310}
            prefix="R$ "
            delimiter="."
            separator=","
            precision={2}
            style={styles.inputStyle}
            onSubmitEditing={() =>
              calcula(310, val310)
            }
            blurOnSubmit={false}

          />

        </View>
        <View style={styles.coluna}>
          <Text style={[styles.padtex]}>330 ml:</Text>
          <CurrencyInput
            value={val330}
            onChangeValue={setVal330}
            prefix="R$ "
            delimiter="."
            separator=","
            precision={2}
            style={styles.inputStyle}
            onSubmitEditing={() =>
              calcula(330, val330)
            }
            blurOnSubmit={false}

          />

        </View>
       

      </View>
      <View style={styles.linha}>
      <View style={styles.coluna}>
          <Text style={[styles.padtex]}> 350 ml:</Text>
          <CurrencyInput
            value={val350}
            onChangeValue={setVal350}
            prefix="R$ "
            delimiter="."
            separator=","
            precision={2}
            style={styles.inputStyle}
            onSubmitEditing={() =>
              calcula(350, val350)
            }
            blurOnSubmit={false}

          />

        </View>
        <View style={styles.coluna}>
          <Text style={[styles.padtex]}> 473 ml:</Text>
          <CurrencyInput
            value={val473}
            onChangeValue={setVal473}
            prefix="R$ "
            delimiter="."
            separator=","
            precision={2}
            style={styles.inputStyle}
            onSubmitEditing={() =>
              calcula(473, val473)
            }
            blurOnSubmit={false}

          />

        </View>
       

      </View>
      <View style={styles.linha}>
      <View style={styles.coluna}>
          <Text style={[styles.padtex]}>600 ml:</Text>
          <CurrencyInput
            value={val600}
            onChangeValue={setVal600}
            prefix="R$ "
            delimiter="."
            separator=","
            precision={2}
            style={styles.inputStyle}
            onSubmitEditing={() =>
              calcula(600, val600)
            }
            blurOnSubmit={false}

          />

        </View>
        <View style={styles.coluna}>
          <Text style={[styles.padtex]}> 5 L:</Text>
          <CurrencyInput
            value={val5L}
            onChangeValue={setVal5L}
            prefix="R$ "
            delimiter="."
            separator=","
            precision={2}
            style={styles.inputStyle}
            onSubmitEditing={() =>
              calcula(5000, val5L)
            }
            blurOnSubmit={false}

          />

        </View>

      </View>

      <View style={styles.divisoria}></View>
      <View style={styles.linha}>
        <View style={styles.coluna}>
          <Text style={[styles.padtex]}> Gasolina:</Text>
          <CurrencyInput
            value={valgas}
            onChangeValue={setValGas}
            prefix="R$ "
            delimiter="."
            separator=","
            precision={2}
            style={styles.inputStyle}
            onSubmitEditing={() =>
              calculagas()
            }
            blurOnSubmit={false}

          />

        </View>
        <View style={styles.coluna}>
          <Text style={[styles.padtex]}> Álcool:</Text>
          <CurrencyInput
            value={valalc}
            onChangeValue={setValAlc}
            prefix="R$ "
            delimiter="."
            separator=","
            precision={2}
            style={styles.inputStyle}

          />

        </View>

      </View>
    </View>
  );
};

export default App;