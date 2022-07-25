
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native'
import { useSwipe } from '../utils/useSwipe';
import Menu from '../components/Menu';
const MainPageAltered = () => {
    const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6)
    const {width,height}:{width:number, height:number} = Dimensions.get("screen");
    const [w, setWidth] = useState<number>(width);
    const [h, setHeight] = useState<number>(height)
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
                <Menu />
        </ImageBackground>
     
    </View>
  )
}

export default MainPageAltered

const styles = StyleSheet.create({})