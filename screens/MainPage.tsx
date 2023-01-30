
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
    const [showReference, setShowReference] = useState<boolean>(false);
    const [referenceText, setReferenceText] = useState("");

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
          marginTop:w<1180?h*0.21:h*0.24
        }]} onPress={()=>{
          setShowReference(!showReference)
          setReferenceText("Zdroj:Seck T et al. Int J Clin Pract. 2010;64:562–576")
        }}>
          
        </TouchableOpacity>
        <TouchableOpacity style={[styles.position, {
          width:(w/2),
          marginRight:w*0.03,
          marginTop:w<1180?h*0.27:h*0.31
        }]} onPress={()=>{

          setShowReference(!showReference)
          setReferenceText("Zdroj: Arechavaleta R et al. Efficacy and safety of treatment with sitagliptin or glimepiride in patients with type 2 diabetes inadequately controlled on metformin monotherapy: a randomized, double-blind, non-inferiority trial. Diabetes, Obesity and Metabolism 13: 160–168, 2011.")
        }}>
          
        </TouchableOpacity>
        <TouchableOpacity style={[styles.position, {
          width:(w/2),
          marginRight:w*0.03,
          marginTop:w<1180?h*0.34:h*0.39,
          height:120
        }]} onPress={()=>{
          setShowReference(!showReference)
          setReferenceText("Zdroj: Green JB et al. Effect of Sitagliptin on Cardiovascular Outcomes in Type 2 Diabetes. N Engl J Med 2015;373:232-42. (TECOS study)")
      
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
    borderColor:"white"
  }
})