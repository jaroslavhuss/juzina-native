import React, { useEffect, useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import MainPage from './screens/MainPage';
import MainPageAltered from './screens/MainPageAltered';
import BioEkvivalentniStudie from './screens/BioEkvivalentniStudie';
import CtyriProcentniBody from './screens/CtyriProcentniBody';
import Sitagliptin from './screens/Sitagliptin';
import ZpomaleniProgrese from './screens/ZpomaleniProgrese';
import SnizeniVahy from './screens/SnizeniVahy';
import KVBezpecnost from './screens/KVBezpecnost';
import RenalniBezpecnost from './screens/RenalniBezpecnost';
import SrovnaniAntidiabetik from './screens/SrovnaniAntidiabetik';
import SPC from './screens/spc';
import Hypoglykemie from './screens/Hypoglykemie';
import Dostupnost from './screens/Dostupnost';
import {Image, Dimensions} from "react-native"
import { Asset } from 'expo-asset';

import { UserProvider } from './context/GlobalContext';
import * as ScreenOrientation from 'expo-screen-orientation';
export default function App() {
  const Drawer = createDrawerNavigator()

  useEffect(() => {
   cacheImages([
    require('./assets/bez_vahy_2.png'),
require('./assets/favicon.png'),
require('./assets/kv_bezpecnost_2.png'),
require('./assets/splash_altered.png'),
require('./assets/bg_altered.png'),
require('./assets/icon.png'),
require('./assets/kv_pdf.pdf'),
require('./assets/srovnani_pdf.pdf'),
require('./assets/bg_regular.png'),
require('./assets/juzina-spc.pdf'),
require('./assets/popznatek.png'),
require('./assets/violin_bg_menu.png'),
require('./assets/4_procena_2.png'),
require('./assets/bio_studie.png'),
require('./assets/kombinace.png'),
require('./assets/splash.png'),
require('./assets/zpomaleni_progrese.png'),
require('./assets/adaptive-icon.png'),
require('./assets/splash_2.png'),
require('./assets/zpomaleni_progrese_2.png'),
require('./assets/bez_vahy.png'),
require('./assets/ctyri_procenta.png'),
require('./assets/bio_studie_2.png'),
require('./assets/kv_bezpecnost.png'),
require('./assets/splash_2_altered.png'),
require('./assets/kombinace_2.png'),
   ])
  }, [])
  

  function cacheImages(images:string[]) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }
  const {width,height}:{width:number, height:number} = Dimensions.get("screen");
  const [w, setWidth] = useState<number>(width);
  const [h, setHeight] = useState<number>(height)
useEffect(()=>{
  const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
    setHeight(screen.height)
    setWidth(screen.width)
    lockIt()
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  });
  return () => subscription?.remove();
},[])

const lockIt = async() =>{
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
}
  return (
    
    <NavigationContainer>
      <UserProvider>
<Drawer.Navigator initialRouteName='Main' screenOptions={
        {
          drawerStyle: {
            width: 0
          },
          headerTransparent: true,
          headerShown: false,
        }
      }>
              <Drawer.Screen name="hlavni-stranka" component={MainPage} />
              <Drawer.Screen name="hlavni-stranka-sekundarni" component={MainPageAltered} />
              <Drawer.Screen name="bioekvivalentni-studie" component={BioEkvivalentniStudie} />
              <Drawer.Screen name="ctyri-procentni-body" component={CtyriProcentniBody} />
              <Drawer.Screen name="sitagliptin" component={Sitagliptin} />
              <Drawer.Screen name="zpomaleni-progrese" component={ZpomaleniProgrese} />
              <Drawer.Screen name="bez-vahoveho-prirustku" component={SnizeniVahy} />
              <Drawer.Screen name="kv-bezpecnost" component={KVBezpecnost} />
              <Drawer.Screen name="renalni-bezpecnost" component={RenalniBezpecnost} />
              <Drawer.Screen name="srovnani-antidiabetik" component={SrovnaniAntidiabetik} />
              <Drawer.Screen name="spc" component={SPC} />
              <Drawer.Screen name="dostupnost" component={Dostupnost} />
              <Drawer.Screen name="hypoglykemie" component={Hypoglykemie} />

           </Drawer.Navigator>
           <StatusBar style="auto" hidden={true}/>
           </UserProvider>
    </NavigationContainer>
  );
}

