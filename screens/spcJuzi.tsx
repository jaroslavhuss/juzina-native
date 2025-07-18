import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import Layout from '../components/Layout'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
const SPC = () => {
    const {navigate}:{navigate:any} = useNavigation()
    const {width,height}:{width:number, height:number} = Dimensions.get("screen");
    const [w, setWidth] = useState<number>(width);
    const [h, setHeight] = useState<number>(height)
    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
          setHeight(screen.height)
          setWidth(screen.width)
        });
        return () => subscription?.remove();
      });

      const [loadComponent, setLoadComponent] = useState<boolean>(true)
      let pdf = require("../assets/juzi.pdf");
      useFocusEffect(() => {
          setLoadComponent(true)
          return () => {
              setLoadComponent(false)
          }
      })

      
  return (
    <Layout>
        <TouchableOpacity style={{width:600, height:100}} onPress={()=>{navigate("hlavni-stranka")}}>

        </TouchableOpacity>
        <Text></Text>
        <Text></Text>
        <Text style={[styles.nadpis,{width:w/4, position:"absolute", top:0, right:0, color:"white", textAlign:"center", fontSize:15}]}> <AntDesign style={{textAlign:"center"}} name="pdffile1" size={15} color="white" /> SPC</Text>
         

      {loadComponent&&
      <WebView
      originWhitelist={["file://*", "http://*", "https://*"]}
      source={pdf}
      allowFileAccess
      allowUniversalAccessFromFileURLs
      allowFileAccessFromFileURLs
   
  ></WebView>
      }
     
                        
                    
    
    </Layout>
  )
}

export default SPC

const styles = StyleSheet.create({
    platno:{
        justifyContent:"center",
        alignItems:"center"
    },
    nadpis:{
      padding:20,
      borderTopRightRadius:12,
      fontSize:18,
      fontWeight:"bold",
    }
})