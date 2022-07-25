
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
        
    <Menu />
        </ImageBackground>
     
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({})