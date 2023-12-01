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

import {styles} from './Clima.style'
import {CommonActions} from '@react-navigation/native'

export function Clima({navigation}){
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
                        Clima
                    </Text>
                </View>
                <View style={styles.container}>
                    <View>
                        <Image 
                        source={require('../../assets/images/clima.png')}
                        style={styles.images}
                        />
                        <Text style={styles.screenName}>
                            Clima
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}