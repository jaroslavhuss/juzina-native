import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
const DostupnostTabulka = () => {
  const { navigate }: { navigate: any } = useNavigation();
  const { width, height }: { width: number; height: number } =
    Dimensions.get("screen");
  const [w, setWidth] = useState<number>(width);
  const [h, setHeight] = useState<number>(height);

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setHeight(screen.height);
        setWidth(screen.width);
      }
    );
    return () => subscription?.remove();
  });
  return (
    <Layout>
      {
        //generate table of 4 columns and 4 rows
      }
      <View
        style={{
          paddingRight:20,
          paddingLeft:100,
          width: w,
          height: h,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, margin: 1 }}>
            <Text style={styles.center}></Text>
          </View>
          <View style={[styles.card,{ flex: 1, margin: 1, alignItems:"center", justifyContent:"center" }]}>
          <Image style={{width:140, height:50, resizeMode:"contain"}} source={require("../assets/juzina.png")} />
            <Text style={[styles.center, { fontWeight: "bold", textAlign:"center" }]}>
         
              sitagliptin MONO{"\n"}(generika)
            </Text>
          </View>
          <View style={[styles.card,{ flex: 1, margin: 1,justifyContent:"center", alignItems:"center" }]}>
         
            <Text style={[styles.center, { fontWeight: "bold",justifyContent:"center", textAlign:"center" }]}>
              sitagliptin MONO{"\n"}(originál){"\n"}
              od 1.2.2023
            </Text>
          </View>
          <View style={[styles.card,{ flex: 1, margin: 1,justifyContent:"center", alignItems:"center" }]}>
          <Image style={{width:180, height:60, resizeMode:"contain"}} source={require("../assets/juzimette.png")} />
            <Text style={[styles.center, { fontWeight: "bold", textAlign:"center" }]}>
              sitagliptin COMBI{"\n"}(generika + originál)
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginBottom:2 }}>
        <View style={[styles.card,{ flex: 1, margin: 1,justifyContent:"center", alignItems:"center", height:500 }]}>
            <Text style={[styles.center,{fontWeight:"bold"}]}>Indikační omezení úhrady</Text>
          </View>
         
          <View
            style={{
              justifyContent: "center",
              flexDirection: "column",
              flex: 1,
              margin: 1,
            }}
          >
            <View style={[styles.card,{ flex: 1, margin: 1,justifyContent:"center", alignItems:"center" }]}>
              <Text
                style={[
                  styles.center,
                  { alignSelf: "center", justifyContent: "center" },
                ]}
              >
                V kombinaci s metforminem a/nebo DSU nebo v kombinaci TZD u
                pacientů, u nichcž použití maximálních tolerovaných dávek
                zmíněnývh léčiv po dobu alespoň 3 měsíců společně s režimovým
                opatřením nevedlo k uspokojivé kompenzaci diabetu definované
                jako hladina <Text style={{fontWeight:"bold"}}>HbA1c</Text> nižší než <Text style={{fontWeight:"bold"}}>60 mmol/mol</Text>.
              </Text>
            </View>
            <View style={[styles.card,{ flex: 1, margin: 1,justifyContent:"center", alignItems:"center" }]}>
              <Text style={[styles.center]}>
                Nedojde-li k prokazatelnému zlepšení <Text style={{fontWeight:"bold"}}>kompenzace diabetu o 7 %</Text> či
                vyššímu poklesu hladiny <Text style={{fontWeight:"bold"}}>HbA1c</Text> při kontrole po 6 měsících léčby,
                sitagliptin není dále hrazen.
              </Text>
            </View>
          </View>

          <View
            style={{
              justifyContent: "center",
              flexDirection: "column",
              flex: 1,
              margin: 1,
            }}
          >
            <View style={[styles.card,{ flex: 1, margin: 1,justifyContent:"center", alignItems:"center" }]}>
              <Text
                style={[
                  styles.center,
                  { alignSelf: "center", justifyContent: "center" },
                ]}
              >
               V kombinaci s metforminem a/nebo DSU nebo v kombinaci TZD u pacientů, u nichcž použití maximálních tolerovaných dávek zmíněnývh léčiv po dobu alespoň 3 měsíců společně s režimovým opatřením nevedlo k uspokojivé kompenzaci diabetu definované jako hladina <Text style={{fontWeight:"bold"}}>HbA1c</Text> nižší než <Text style={{fontWeight:"bold"}}>53 mmol/mol</Text>.
              </Text>
            </View>
            <View style={[styles.card,{ flex: 1, margin: 1,justifyContent:"center", alignItems:"center" }]}>
              <Text style={[styles.center]}>
              Nedojde-li k prokazatelnému zlepšení <Text style={{fontWeight:"bold"}}>kompenzace diabetu o 7 %</Text> či vyššímu poklesu hladiny <Text style={{fontWeight:"bold"}}><Text style={{fontWeight:"bold"}}>HbA1c</Text></Text> při kontrole po 6 měsících léčby, sitagliptin není dále hrazen.
              </Text>
            </View>
          </View>


          <View
            style={{
              justifyContent: "center",
              flexDirection: "column",
              flex: 1,
              margin: 1,
            }}
          >
             <View style={[styles.card,{ flex: 1, margin: 1,justifyContent:"center", alignItems:"center" }]}>
              <Text
                style={[
                  styles.center,
                  { alignSelf: "center", justifyContent: "center" },
                ]}
              >
              ▪ Samostatně nebo v kombinaci s DSU u pacientů, u nichž použití maximálních tolerovaných dávek metforminu samotného nebo metforminu v kombinaci s DSU po dobu alespoň 3 měsíců společně s režimovými opatřeními nevedlo k uspokojivé kompenzaci diabetu definované hladinou <Text style={{fontWeight:"bold"}}>HbA1c</Text> nižší než <Text style={{fontWeight:"bold"}}>60 mmol/mol</Text>. {"\n"}
              ▪ Jako náhrada terapie souběžně podávanými monokomponentními léčivými přípravky s obsahem metforminu a sitagliptinu.
              </Text>
            </View>
            <View style={[styles.card,{ flex: 1, margin: 1,justifyContent:"center", alignItems:"center" }]}>
              <Text style={[styles.center]}>
              Nedojde-li k prokazatelnému zlepšení <Text style={{fontWeight:"bold"}}>kompenzace diabetu o 7 %</Text> či vyššímu poklesu hladiny <Text style={{fontWeight:"bold"}}>HbA1c</Text> při kontrole po 6 měsících léčby, sitagliptin není dále hrazen.
              </Text>
            </View>
          </View>
        </View>


        <View style={{ flexDirection: "row" }}>
           <View style={[styles.card,{ flex: 1, margin: 1,justifyContent:"center", alignItems:"center" }]}>
            <Text style={[styles.center,{ fontWeight: "bold" }]}>Specializace předepisujícího lékaře </Text>
          </View>
           <View style={[styles.card,{ flex: 1, margin: 1,justifyContent:"center", alignItems:"center" }]}>
            <Text style={[styles.center]}>
            vnitřní lékařství{"\n"}
endokrinologie{"\n"}
diabetologie
            </Text>
          </View>
          <View style={{ flex: 1, margin: 1 }}>
            <Text style={[styles.center, { fontWeight: "bold" }]}>
            
            </Text>
          </View>
          <View style={{ flex: 1, margin: 1 }}>
            <Text style={[styles.center, { fontWeight: "bold" }]}>
             
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
        <View style={[{ flex: 1, margin: 1,justifyContent:"center", alignItems:"center", marginTop:10 }]}>
            <Text style={[styles.center,{ }]}> <Text>DSU - deriváty sulfonylurey{"\n"} TZD - thiazolidindiony</Text></Text>
          </View>
          <View style={{ flex: 1, margin: 1,justifyContent:"center", alignItems:"center" }}>
            <Text style={[styles.center]}>
           
            </Text>
          </View>
          <View style={{ flex: 1, margin: 1 }}>
            <Text style={[styles.center, { fontWeight: "bold" }]}>
            
            </Text>
          </View>
          <View style={{ flex: 1, margin: 1 }}>
            <Text style={[styles.center, { fontWeight: "bold" }]}>
             
            </Text>
          </View>
        </View>




      </View>
      <View style={{position:"absolute", bottom:h/2-50, left:0, zIndex:0}}>
<TouchableOpacity  
       onPress={
          ()=>{
            navigate("dostupnost")
          }
       }
       >
     <Text>
      <AntDesign name="caretleft" size={100} color="grey" />
      </Text>
     
     </TouchableOpacity>
</View>
    </Layout>
  );
};

export default DostupnostTabulka;

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
    padding: 4,
  },
  card:{
    backgroundColor: "#fff",
    borderRadius:8,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 2.49,

elevation: 12,
  }
});
