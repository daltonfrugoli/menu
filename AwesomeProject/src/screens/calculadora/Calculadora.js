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

import {styles} from './Calculadora.style'
import {CommonActions} from '@react-navigation/native'

export function Calculadora({navigation}){
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
                    Calculadora
                </Text>
            </View>
            <View style={styles.container}>
                <View>
                    <Image 
                    source={require('../../assets/images/calculadora.png')}
                    style={styles.images}
                    />
                    <Text style={styles.screenName}>
                        Calculadora
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}