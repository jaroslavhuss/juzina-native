import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import Layout from '../components/Layout'
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { WebView } from 'react-native-webview';
const RenalniBezpecnost = () => {
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
      let pdf = require("../assets/kv_pdf.pdf");
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
        <View style={{flexDirection:"row"}}>
        <Text style={[styles.nadpis,{width:300}]}> <Entypo style={{textAlign:"center"}} name="shield" size={17} color="black" /> Renální bezpečnost</Text>
        <Image source={require("../assets/popznatek.png")} style={{width:800, height:100}} resizeMode={"contain"}/>
        </View>
      

      
     {loadComponent&&<WebView
                            originWhitelist={["file://*", "http://*", "https://*"]}
                            source={pdf}
                            allowFileAccess
                            allowUniversalAccessFromFileURLs
                            allowFileAccessFromFileURLs
                         
                        ></WebView>}
                        
                    
    
    </Layout>
  )
}

export default RenalniBezpecnost

const styles = StyleSheet.create({
    platno:{
        justifyContent:"center",
        alignItems:"center"
    },
    nadpis:{
        padding:20,
        backgroundColor:"white",
        borderTopRightRadius:12,
        fontSize:18,
        fontWeight:"bold",
        opacity:0.7
    }
})