import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import Layout from '../components/Layout'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useNavigation } from '@react-navigation/native';

import { AntDesign } from '@expo/vector-icons';
const Dostupnost = () => {
    const {navigate}:{navigate:any} = useNavigation()
    const {width,height}:{width:number, height:number} = Dimensions.get("screen");
    const [w, setWidth] = useState<number>(width);
    const [h, setHeight] = useState<number>(height)
const [showFullSizedImage, setShowFullSizedImage] = useState<boolean>(false)
    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
          setHeight(screen.height)
          setWidth(screen.width)
        });
        return () => subscription?.remove();
      });

  return (
    <>
      {
  showFullSizedImage && 
  <View style={{
    position:"absolute",
    top:0,
    left:0,
    width:w,
    height:h,
    zIndex:100,
    backgroundColor:"#202124e0",
  }}>
<TouchableOpacity onPress={()=>{
  setShowFullSizedImage(!showFullSizedImage)
}}>
        <Image source={require("../assets/dostupnost.png")} resizeMode="contain" style={{width:w, height:h}}/>
     </TouchableOpacity>
     </View>
}
     <Layout>
     
     <TouchableOpacity style={{width:600, height:100}} onPress={()=>{navigate("hlavni-stranka")}}>

     </TouchableOpacity>

     <Text></Text>
     <Text></Text>
 
     <View style={[styles.platno, {height:h-100}]}>
{
  !showFullSizedImage && 

<TouchableOpacity onPress={()=>{
  setShowFullSizedImage(!showFullSizedImage)
}}>
        <Image source={require("../assets/dostupnost.png")} resizeMode="contain" style={{width:w<1180?760:780, height:w<1180?750:800}}/>
     </TouchableOpacity>

}

    


    </View>
   
 </Layout>
<View style={{position:"absolute", bottom:h/2-50, left:0, zIndex:0}}>
<TouchableOpacity  
       onPress={
          ()=>{
            navigate("dostupnost-tabulka")
          }
       }
       >
     <Text>
      <AntDesign name="caretright" size={100} color="grey" />
      </Text>
     
     </TouchableOpacity>
</View>
 
    </>
 
  )
}

export default Dostupnost

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