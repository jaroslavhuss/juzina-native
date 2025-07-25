import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, {useEffect, useState, useContext} from 'react'
import Layout from '../components/Layout'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { UserDispatchContext, UserContext } from '../context/GlobalContext';
import { WebView } from 'react-native-webview';
const SrovnaniAntidiabetik1 = () => {
    const {navigate}:{navigate:any} = useNavigation()
    const {width,height}:{width:number, height:number} = Dimensions.get("screen");
    const [w, setWidth] = useState<number>(width);
    const [h, setHeight] = useState<number>(height)

    const showRefWindow = useContext(UserContext);
    const setRefWindow = useContext(UserDispatchContext);
    
    const text = "Zdroj:\n\ntabulka upravena dle https://www.svl.cz/files/files/Doporucene-postupy/2020/DP-DIABETES-MELLITUS-A-KOMORBIDITY.pdf"

    useEffect(() => {
      
        const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
          setHeight(screen.height)
          setWidth(screen.width)
        });
        return () => subscription?.remove();
      });

      const [loadComponent, setLoadComponent] = useState<boolean>(true)
      let pdf = require("../assets/sit1.pdf");
      useFocusEffect(() => {
          setLoadComponent(true)
          return () => {
              setLoadComponent(false)
          }
      })

      const [isLoaded, setIsLoaded] = useState<boolean>(false)
      useFocusEffect(
        React.useCallback(() => {
            setRefWindow({...showRefWindow,showIcon:false,referenceText:""})
          return () => {
            setRefWindow({...showRefWindow,showIcon:false,referenceText:""})
          };
        }, [isLoaded])
      );
  return (
    <Layout>
        <TouchableOpacity style={{width:600, height:100}} onPress={()=>{navigate("hlavni-stranka")}}>

        </TouchableOpacity>
        <Text></Text>
        <Text></Text>
        <Text style={[styles.nadpis,{width:w/4, position:"absolute", top:0, right:0, color:"white", textAlign:"center", fontSize:15}]}> <AntDesign style={{textAlign:"center"}} name="swap" size={15} color="white" /> Srovnání antidiabetik</Text>
     
      

      {loadComponent&&
      <WebView
      originWhitelist={["file://*", "http://*", "https://*"]}
      source={pdf}
      allowFileAccess
      allowUniversalAccessFromFileURLs
      allowFileAccessFromFileURLs
   
  ></WebView>
      }
     
                        
                    
     <View style={{position:"absolute", bottom:h/2-50, right:0, zIndex:1}}>
<TouchableOpacity  
       onPress={
          ()=>{
            
            navigate("srovnani-antidiabetik-2")
          }
       }
       >
     <Text>
      <AntDesign name="caretright" size={100} color="grey" />
      </Text>
     
     </TouchableOpacity>
</View>
     <View style={{position:"absolute", bottom:h/2-50, left:0, zIndex:1}}>
<TouchableOpacity  
       onPress={
          ()=>{
            
            navigate("srovnani-antidiabetik")
          }
       }
       >
     <Text>
      <AntDesign name="caretleft" size={100} color="grey" />
      </Text>
     
     </TouchableOpacity>
</View>
    </Layout>
  )
}

export default SrovnaniAntidiabetik1

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