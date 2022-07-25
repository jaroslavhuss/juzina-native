import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import Layout from '../components/Layout'
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const Dostupnost = () => {
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
       <Text style={[styles.nadpis,{width:w/3}]}> <Entypo style={{textAlign:"center"}} name="shield" size={17} color="black" /> KV Bezpečnost

</Text>
       <View style={styles.platno}>
      
<Text>Dostupnost -  zde chybí podklady</Text>
       </View>
    </Layout>
  )
}

export default Dostupnost

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