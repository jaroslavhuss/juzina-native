import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import Layout from '../components/Layout'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const ZpomaleniProgrese = () => {
    const {navigate}:{navigate:any} = useNavigation()
    const {width,height}:{width:number, height:number} = Dimensions.get("screen");
    const [w, setWidth] = useState<number>(width);
    const [h, setHeight] = useState<number>(height)
    const [switchStudy, setSwitchStudy] = useState<boolean>(false);
    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
          setHeight(screen.height)
          setWidth(screen.width)
        });
        return () => subscription?.remove();
      });
  return (
    <Layout>
        <TouchableOpacity style={{width:600, height:100}} onPress={()=>{navigate("hlavni-stranka")}}>

        </TouchableOpacity>
        <Text></Text>
        <Text></Text>
       <Text style={[styles.nadpis,{width:w/3}]}> <MaterialIcons name="slow-motion-video" size={17} color="black" /> Zpomalení progrese na inzulin
</Text>
       <View style={styles.platno}>
       <TouchableOpacity onPress={()=>{setSwitchStudy(!switchStudy)}}>
            {!switchStudy&&<Image source={require("../assets/zpomaleni_progrese.png")} resizeMode="contain" style={{width:600, height:500}}/>}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setSwitchStudy(!switchStudy)}}>
            {switchStudy&&<Image source={require("../assets/zpomaleni_progrese_2.png")} resizeMode="contain" style={{width:600, height:500}}/>}
        </TouchableOpacity>
        <Text style={{width:w/1.3}}>Zdroj: Green JB et al. Effect of Sitagliptin on Cardiovascular Outcomes in Type 2 Diabetes. N Engl J Med 2015;373:232-42. (TECOS study){"\n"}
        Trial Evaluating Cardiovascular Outcomes with Sitagliptin (TECOS)
</Text>
       </View>
    </Layout>
  )
}

export default ZpomaleniProgrese

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