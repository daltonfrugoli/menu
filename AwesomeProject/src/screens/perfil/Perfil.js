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

import {styles} from './Perfil.style'
import {CommonActions} from '@react-navigation/native'

export function Perfil({navigation}){
    return(
        <SafeAreaView style={styles.background}>
            <ScrollView>
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
                        Perfil
                    </Text>
                </View>
                <View style={styles.container}>
                    <View>
                        <Image 
                        source={require('../../assets/images/perfil.png')}
                        style={styles.images}
                        />
                        <Text style={styles.screenName}>
                            Perfil
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}