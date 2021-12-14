import React from "react";
import { View, Text, Image } from "react-native";
import App from "./App";
export default function App2() {
    return(
        <View>
            <View>
              <Text>Mr.Punthon</Text>
            </View>
                <Image Source={require=('./assets/แมนยู.jpg.jpg')} 
                Style={{width:100 , height:100}} />
        </View>

    )
}