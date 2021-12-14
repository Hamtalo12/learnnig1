import React from "react";
import { View, Text, Image} from "react-native";

export default function App3(){
    return(
        <View>
            <View>
                <Text>I</Text>
            </View>
              <Image source={require('./assets/หัวใจ.jpg.png')}
               Style={{width:50, height:50,}}/>
              <View>
                  <Text>YOU</Text>
              </View>
        </View>
    )
}