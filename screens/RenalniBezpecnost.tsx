import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, {useEffect, useState, useContext} from 'react'
import Layout from '../components/Layout'
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { WebView } from 'react-native-webview';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { UserDispatchContext, UserContext } from '../context/GlobalContext';
const RenalniBezpecnost = () => {
    const {navigate}:{navigate:any} = useNavigation()
    const {width,height}:{width:number, height:number} = Dimensions.get("screen");
    const [w, setWidth] = useState<number>(width);
    const [h, setHeight] = useState<number>(height)


    const showRefWindow = useContext(UserContext);
    const setRefWindow = useContext(UserDispatchContext);
    
    const text = "Zdroj:\n\nhttps://www.svl.cz/files/files/Doporucene-postupy/2020/DP-DIABETES-MELLITUS-A-KOMORBIDITY.pdf"

    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
          setHeight(screen.height)
          setWidth(screen.width)
          console.log(w,h)
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
 const [isLoaded, setIsLoaded] = useState<boolean>(false)
      useFocusEffect(
        React.useCallback(() => {
            setRefWindow({...showRefWindow,showIcon:true,referenceText:text})
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
        <Text style={[styles.nadpis,{width:w/4, position:"absolute", top:0, right:0, color:"white", textAlign:"center", fontSize:15}]}> <Entypo style={{textAlign:"center"}} name="shield" size={15} color="white" /> Renální bezpečnost</Text>
        <View style={{flexDirection:"row"}}>
      
        
        
        <Image source={require("../assets/popznatek.png")} style={{width:800, height:100}} resizeMode={"contain"}/>
        </View>
      

      <Image source={require("../assets/kv_table_head.png")} style={{width:w-50,height:w<1180?154:170, resizeMode:"cover", alignSelf:"center", padding:0, margin:0}} />
     {loadComponent&&<WebView
                            originWhitelist={["file://*", "http://*", "https://*"]}
                            source={pdf}
                            allowFileAccess
                            allowUniversalAccessFromFileURLs
                            allowFileAccessFromFileURLs
                          style={{marginTop:-20}}
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
        borderTopRightRadius:12,
        fontSize:18,
        fontWeight:"bold",

    }
})