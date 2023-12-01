import React, {useState} from "react";

import {
    View,
    Text,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';

import {styles} from './Menu.style'


export function Menu({navigation}){

    const [menu, setMenu] = useState([
        {
          id: 1,
          name: 'Clima',
          image: require('../../assets/images/clima.png'),
        },
        {
          id: 2,
          name: 'Calculadora',
          image: require('../../assets/images/calculadora.png'),
        },
        {
          id: 3,
          name: 'Navegador',
          image: require('../../assets/images/navegador.png'),
        },
        {
          id: 4,
          name: 'Noticias',
          image: require('../../assets/images/noticias.png'),
        },
        {
          id: 5,
          name: 'Perfil',
          image: require('../../assets/images/perfil.png'),
        },
        {
          id: 6,
          name: 'Log',
          image: require('../../assets/images/log.png'),
        },
      ]);

      const renderItem = ({item, index})=>{
        return(
            <TouchableOpacity 
            style={styles.buttonMenu}
            onPress={()=>{navigation.navigate(item.name)}}
            >
                <Image 
                source={item.image}

                //source={{uri:"link da internet"}}
                resizeMode="contain"
                style={styles.images}
                />
                <Text style={styles.buttonNames}>{item.name}</Text>
            </TouchableOpacity>    
        )
      }

    return(
        <SafeAreaView style={styles.background}>
            <ScrollView>
                <View style={styles.container}>

                    {/* Conteúdo header*/}
                    <View style={styles.header}>
                        <View>
                            <Text style={styles.title}>Bem vindo,</Text>
                            <Text style={[styles.title, {fontWeight: 'bold', fontSize: 25}]}>Dalton Frugoli</Text>
                        </View>
                        <TouchableOpacity
                        style={styles.buttonInfo}
                        title='info'>
                            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>i</Text>
                        </TouchableOpacity>
                    </View>

                    {/*Conteúdo menu*/}
                    <View>
                        <FlatList
                        data={menu}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        columnWrapperStyle={{flexWrap: 'wrap', justifyContent: 'space-evenly'}}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}