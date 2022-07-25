import React,{useState, useEffect} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Menu = () => {
    const {navigate}:{navigate:any} = useNavigation()
    const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false)
    const [isUcinnostOpened, setIsUcinnostOpened] = useState<boolean>(false)
    const [isLoaded] = useState<boolean>(false)
    const [w, setW] = useState<number>(Dimensions.get("screen").width/3)
    const [h, setH] = useState<number>(Dimensions.get("screen").height)

    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
          setH(screen.height)
          setW(screen.width)
        });
        return () => subscription?.remove();
      });

      useFocusEffect(
        React.useCallback(() => {
          return () => {
        setIsMenuOpened(false)
        setIsUcinnostOpened(false)
          };
        }, [isLoaded])
      );
  return (
    <>
   {
    isMenuOpened&&
    <View style={[{width:w, height:h}, styles.rightMenu]}>
        <Text></Text>
        <Text></Text>
    <ImageBackground resizeMode='cover' style={{flex:1, justifyContent:"center"}} source={require("../assets/violin_bg_menu.png")}>
        <TouchableOpacity style={[styles.menuItemOpacity,{flexDirection:"row", alignItems:"center"}]} onPress={()=>{
            navigate("bioekvivalentni-studie")
        }}>
            <View style={{backgroundColor:"#f0c736", flex:2,padding:5}}>
                <AntDesign style={{textAlign:"center"}} name="book" size={30} color="black" />
            </View>
            <Text style={styles.menuItemText}>Bioekvivalentní studie</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItemOpacity,{flexDirection:"row", alignItems:"center"}, isUcinnostOpened?{marginBottom:3}:{marginBottom:30}]} onPress={()=>{setIsUcinnostOpened(!isUcinnostOpened)}}>
        <View style={{backgroundColor:"#f0c736", flex:2,padding:5}}>
                <AntDesign style={{textAlign:"center"}} name="barschart" size={30} color="black" />
            </View>
            <Text style={styles.menuItemText}>Účinnost{"                         "}<AntDesign name={isUcinnostOpened?"down":"right"} size={14} color="white" /></Text> 
        </TouchableOpacity>
        {
            isUcinnostOpened&&
            <>
            <TouchableOpacity style={[styles.menuItemOpacity,{flexDirection:"row", alignItems:"center", marginBottom:3}]} onPress={()=>{navigate("ctyri-procentni-body")}}>
            <View style={{backgroundColor:"transparent", flex:2,padding:5}}></View>                  
                <Text style={[styles.menuItemText,{backgroundColor:"#b80b8b"}]}>Snížení o 4% body HbA1c</Text> 
            </TouchableOpacity>

            <TouchableOpacity style={[styles.menuItemOpacity,{flexDirection:"row", alignItems:"center", marginBottom:3}]} onPress={()=>{navigate("sitagliptin")}}>
            <View style={{backgroundColor:"transparent", flex:2,padding:5}}></View>
               <Text style={[styles.menuItemText,{backgroundColor:"#b80b8b"}]}>Kombinace sitagliptin + SU ± metformin</Text> 
            </TouchableOpacity>


            <TouchableOpacity style={[styles.menuItemOpacity,{flexDirection:"row", alignItems:"center"}]} onPress={()=>{navigate("zpomaleni-progrese")}}>
            <View style={{backgroundColor:"transparent", flex:2,padding:5}}></View>
            <Text style={[styles.menuItemText,{backgroundColor:"#b80b8b", marginBottom:4}]}>Zpomalení progrese na inzulín</Text> 
            </TouchableOpacity>
            </>
        }
        <TouchableOpacity style={[styles.menuItemOpacity,{flexDirection:"row", alignItems:"center"}]} onPress={()=>{navigate("bez-vahoveho-prirustku")}}>
        <View style={{backgroundColor:"#f0c736", flex:2,padding:5}}>
                <MaterialIcons style={{textAlign:"center"}} name="pregnant-woman" size={30} color="black" />
            </View>
            <Text style={styles.menuItemText}>Bez váhového přírůstku</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItemOpacity,{flexDirection:"row", alignItems:"center"}]} onPress={()=>{navigate("kv-bezpecnost")}}>
        <View style={{backgroundColor:"#f0c736", flex:2,padding:5}}>
        <Entypo style={{textAlign:"center"}} name="shield" size={30} color="black" />
            </View>
            <Text style={styles.menuItemText}>KV bezpečnost</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItemOpacity,{flexDirection:"row", alignItems:"center"}]} onPress={()=>{navigate("renalni-bezpecnost")}}>
        <View style={{backgroundColor:"#f0c736", flex:2,padding:5}}>
        <Entypo style={{textAlign:"center"}} name="shield" size={30} color="black" />
            </View>
            <Text style={styles.menuItemText}>Renální bezpečnost</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItemOpacity,{flexDirection:"row", alignItems:"center"}]} onPress={()=>{navigate("srovnani-antidiabetik")}}>
        <View style={{backgroundColor:"#f0c736", flex:2,padding:5}}>
        <AntDesign style={{textAlign:"center"}} name="swap" size={30} color="black" />
            </View>
            <Text style={styles.menuItemText}>Srovnání antidiabetik</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItemOpacity,{flexDirection:"row", alignItems:"center"}]} onPress={()=>{navigate("dostupnost")}}>
        <View style={{backgroundColor:"#f0c736", flex:2,padding:5}}>
        <FontAwesome style={{textAlign:"center"}} name="money" size={30} color="black" />
            </View>
            <Text style={styles.menuItemText}>Dostupnost</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.menuItemOpacity,{flexDirection:"row", alignItems:"center"}]} onPress={()=>{
            navigate("spc")
        }}>
        <View style={{backgroundColor:"#f0c736", flex:2,padding:5}}>
        <AntDesign style={{textAlign:"center"}} name="pdffile1" size={30} color="black" />
            </View>
            <Text style={styles.menuItemText}>SPC</Text>
        </TouchableOpacity>
        </ImageBackground>
        <TouchableOpacity style={[styles.menuItemOpacity,{flexDirection:"row", alignItems:"center"}]} onPress={()=>{setIsMenuOpened(false)}}>
        <View style={{backgroundColor:"transparent", flex:1}}>
        <AntDesign style={{textAlign:"center"}} name="closecircleo" size={50} color="black" />
            </View>
        </TouchableOpacity>
    </View>
   }
    

    <TouchableOpacity style={styles.thePosition} onPress={()=>{setIsMenuOpened(!isMenuOpened)}}>
      <MaterialCommunityIcons style={{opacity:0.8, 
  color: isMenuOpened?"#09236f":"#83276b", 
  borderRadius:10,
  borderWidth: 2,
  borderColor: isMenuOpened?"#83276b":"#eec21e",
  overflow: "hidden",
  transform:isMenuOpened?[{rotate:"90deg"}]:[{rotate:"0deg"}]
  }} name="violin" size={60} color="#83276b" />
    </TouchableOpacity>
    </>
  )
}

export default Menu

const styles = StyleSheet.create({
    menuItemOpacity:{
        marginBottom:30,
        borderRadius:7,
    },
    menuItemText:{
        fontSize:16,
        fontWeight:"bold",
        color:"white",
        flex:10,
        padding:10,
        backgroundColor:"#83276b"
    },
    rightMenu:{
        backgroundColor:"white",
        position:"absolute",
        right:0,
        top:0,
        opacity:0.9,
        borderWidth:2,
        borderColor:"white",
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
padding:10
    },
    thePosition:{
        position:"absolute",
        bottom:0,
        left:0,
        marginBottom:80,
        zIndex:200,
        marginLeft:20
    }
})