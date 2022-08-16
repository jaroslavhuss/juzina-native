import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, {useEffect, useState, useContext} from 'react'
import Layout from '../components/Layout'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { UserDispatchContext, UserContext } from '../context/GlobalContext';
const Hypoglykemie = () => {
    const {navigate}:{navigate:any} = useNavigation()
    const {width,height}:{width:number, height:number} = Dimensions.get("screen");
    const [w, setWidth] = useState<number>(width);
    const [h, setHeight] = useState<number>(height)
    const [switchStudy, setSwitchStudy] = useState<boolean>(false);
    const showRefWindow = useContext(UserContext);
    const setRefWindow = useContext(UserDispatchContext);
    
    const text = "Zdroj:\nSeck T et al. Int J Clin Pract. 2010;64:562–576"

    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
          setHeight(screen.height)
          setWidth(screen.width)
        });
        return () => subscription?.remove();
      });

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
    
        <View style={[styles.platno, {height:h-100}]}>
       <TouchableOpacity onPress={()=>{setSwitchStudy(!switchStudy)}}>
            {!switchStudy&&<Image source={require("../assets/hypo.png")} resizeMode="contain" style={{width:w<1180?700:720, height:w<1180?750:800}}/>}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setSwitchStudy(!switchStudy)}}>
            {switchStudy&&<Image source={require("../assets/hypo_studie.png")} resizeMode="contain" style={{width:w<1180?700:720, height:w<1180?750:800}}/>}
        </TouchableOpacity>
     
       </View>
    </Layout>
  )
}

export default Hypoglykemie

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