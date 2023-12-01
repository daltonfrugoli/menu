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

import {styles} from './Noticias.style'
import {CommonActions} from '@react-navigation/native'

export function Noticias({navigation}){
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
                    Noticias
                </Text>
            </View>
            <View style={styles.container}>
                <View>
                    <Image 
                    source={require('../../assets/images/noticias.png')}
                    style={styles.images}
                    />
                    <Text style={styles.screenName}>
                        Noticias
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
}