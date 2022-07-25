import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native'
import React,{useState, useEffect} from 'react'
import Menu from './Menu'

const Layout = ({children}:{children:any}) => {
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
  return (
    <View style={{width:w, height:h}}>
        <ImageBackground style={{flex:1}} source={w<1180?require("../assets/bg_regular.png"):require("../assets/bg_altered.png")}>
        {children}
      <Menu />
      </ImageBackground>
    </View>
  )
}

export default Layout

const styles = StyleSheet.create({})