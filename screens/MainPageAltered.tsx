
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ImageBackground, Dimensions, TouchableOpacity, Text } from 'react-native'
import { useSwipe } from '../utils/useSwipe';
import Menu from '../components/Menu';
import { AntDesign } from '@expo/vector-icons';
const MainPageAltered = () => {
    const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6)
    const {width,height}:{width:number, height:number} = Dimensions.get("screen");
    const [w, setWidth] = useState<number>(width);
    const [h, setHeight] = useState<number>(height)
    const [showReference, setShowReference] = useState<boolean>(false);
    const [referenceText, setReferenceText] = useState("");

    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
          setHeight(screen.height)
          setWidth(screen.width)
        });
        return () => subscription?.remove();
      });
const {navigate}:{navigate:any} = useNavigation()
    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
          setHeight(screen.height)
          setWidth(screen.width)
        });
        return () => subscription?.remove();
      });

      function onSwipeLeft(){
       
    }

    function onSwipeRight(){
      navigate("hlavni-stranka")
    }
  return (
    <View onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
    
        <ImageBackground source={w<1180?require("../assets/splash_altered.png"):require("../assets/splash_2_altered.png")} style={{width:w, height:h}} resizeMode="cover">
        <TouchableOpacity style={[styles.position, {
          width:(w/2),
          marginRight:w*0.03,
          marginTop:w<1180?h*0.21:h*0.24
        }]} onPress={()=>{
          setShowReference(!showReference)
          setReferenceText("Zdroj: Doporučené diagnostické a terapeutické postupy pro VPL Diabetes mellitus a komorbidity 2021.")
        }}>
          
        </TouchableOpacity>
        <TouchableOpacity style={[styles.position, {
          width:(w/2),
          marginRight:w*0.03,
          marginTop:w<1180?h*0.27:h*0.31
        }]} onPress={()=>{

          setShowReference(!showReference)
          setReferenceText("Zdroj: Doporučené diagnostické a terapeutické postupy pro VPL Diabetes mellitus a komorbidity 2021.")
        }}>
          
        </TouchableOpacity>
        <TouchableOpacity style={[styles.position, {
          width:(w/2),
          marginRight:w*0.03,
          marginTop:w<1180?h*0.34:h*0.39,
          height:120
        }]} onPress={()=>{
          setShowReference(!showReference)
          setReferenceText("Zdroj: SPC Juzina")
      
        }}>
          </TouchableOpacity>
          {showReference&&
        <TouchableOpacity onPress={()=>{
          setReferenceText("")
          setShowReference(false)
         }} style={{
          position:"absolute",
          top:0,
          right:0,
          width:w/3,
          height:h,
          backgroundColor:"white",
          opacity:0.9,
          padding:10
         }}>
            <Text>{referenceText}</Text>
         </TouchableOpacity>
        }
                <Menu />
        </ImageBackground>
        <View style={{position:"absolute", bottom:h/2-50, left:0, zIndex:0}}>
<TouchableOpacity  
       onPress={
          ()=>{
            console.log("press")
            navigate("hlavni-stranka")
          }
       }
       >
     <Text>
      <AntDesign name="caretleft" size={100} color="grey" />
      </Text>
     
     </TouchableOpacity>
</View>
    </View>
  )
}

export default MainPageAltered

const styles = StyleSheet.create({
  position:{
    position:"absolute",
    top:-115, 
    right:0,
    height:50,
  }
})