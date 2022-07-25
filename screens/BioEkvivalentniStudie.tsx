import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import Layout from '../components/Layout'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const BioEkvivalentniStudie = () => {
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
       <Text style={[styles.nadpis,{width:w/4}]}> <AntDesign style={{textAlign:"center"}} name="book" size={17} color="black" /> Bioekvivalentní studie</Text>
       <View style={styles.platno}>
       <TouchableOpacity onPress={()=>{setSwitchStudy(!switchStudy)}}>
            {!switchStudy&&<Image source={require("../assets/bio_studie.png")} resizeMode="contain" style={{width:600, height:500}}/>}
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{setSwitchStudy(!switchStudy)}}>
            {switchStudy&&<Image source={require("../assets/bio_studie_2.png")} resizeMode="contain" style={{width:600, height:500}}/>}
        </TouchableOpacity>
        <Text style={{width:w/1.3}}>Zdroj: A Pivotal, Randomized, Open-Label, Two-Way Crossover, Bioequivalence Study of Sitagliptin 100 mg Film-Coated Tablets (Gedeon Richter Plc.) and Januvia® 100 mg Film-Coated Tablets (Merck Sharp & Dohme Ltd.) in Healthy, Male and Non-Pregnant Female Volunteers under Fasting Conditions, 2019
</Text>
       </View>
    </Layout>
  )
}

export default BioEkvivalentniStudie

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