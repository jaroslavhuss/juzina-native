import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import Layout from '../components/Layout'
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const SnizeniVahy = () => {
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
       <Text style={[styles.nadpis,{width:w/3}]}> <MaterialIcons style={{textAlign:"center"}} name="pregnant-woman" size={17} color="black" /> Bez váhového přírůstku

</Text>
       <View style={styles.platno}>
       <TouchableOpacity onPress={()=>{setSwitchStudy(!switchStudy)}}>
            {!switchStudy&&<Image source={require("../assets/bez_vahy.png")} resizeMode="contain" style={{width:600, height:500}}/>}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setSwitchStudy(!switchStudy)}}>
            {switchStudy&&<Image source={require("../assets/bez_vahy_2.png")} resizeMode="contain" style={{width:600, height:500}}/>}
        </TouchableOpacity>
        <Text style={{width:w/1.3}}>Zdroj: Arechavaleta R et al. Efficacy and safety of treatment with sitagliptin or glimepiride in patients with type 2 diabetes inadequately controlled on metformin monotherapy: a randomized, double-blind, non-inferiority trial. Diabetes, Obesity and Metabolism 13: 160–168, 2011.

</Text>
       </View>
    </Layout>
  )
}

export default SnizeniVahy

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