
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Dimensions } from 'react-native'
import { useSwipe } from '../utils/useSwipe';
import Menu from "../components/Menu"
const MainPage = () => {
  
    const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6)
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

      function onSwipeLeft(){
         navigate("hlavni-stranka-sekundarni")
    }
    function onSwipeRight(){
        //
    }


  return (
    <View onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        
        <ImageBackground source={w<1180?require("../assets/splash.png"):require("../assets/splash_2.png")} style={{width:w, height:h}} resizeMode="cover">

        <TouchableOpacity style={[styles.position, {
          width:(w/2),
          marginRight:w*0.03,
          marginTop:h*0.21
        }]} onPress={()=>{navigate("srovnani-antidiabetik")}}>
          
        </TouchableOpacity>
        <TouchableOpacity style={[styles.position, {
          width:(w/2),
          marginRight:w*0.03,
          marginTop:h*0.27
        }]} onPress={()=>{navigate("bez-vahoveho-prirustku")}}>
          
        </TouchableOpacity>
        <TouchableOpacity style={[styles.position, {
          width:(w/2),
          marginRight:w*0.03,
          marginTop:h*0.34
        }]} onPress={()=>{navigate("kv-bezpecnost")}}>
          
        </TouchableOpacity>
        <TouchableOpacity style={[styles.position, {
          width:(w*0.80),
          marginRight:w*0.03,
          marginTop:h*0.42,
          height:h/2
        }]} onPress={()=>{navigate("hypoglykemie")}}>
          
        </TouchableOpacity>
    <Menu />
        </ImageBackground>
     
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({
  position:{
    position:"absolute",
    top:0, 
    right:0,
    height:50,
  }
})