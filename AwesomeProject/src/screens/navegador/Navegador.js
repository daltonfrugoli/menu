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

import {styles} from './Navegador.style'
import {CommonActions} from '@react-navigation/native'

export function Navegador({navigation}){
    return(
        <SafeAreaView style={styles.background}>
            <View style={styles.header}>
                <TouchableOpacity
                  onPress={()=>{
                    navigation.dispatch(CommonActions.goBack())
                }}
                >
                    <Text style={styles.voltar}>
                        {'<'}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.title}>
                    Navegador
                </Text>
            </View>
            <View style={styles.container}>
                <View>
                    <Image 
                    source={require('../../assets/images/navegador.png')}
                    style={styles.images}
                    />
                    <Text style={styles.screenName}>
                        Navegador
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}