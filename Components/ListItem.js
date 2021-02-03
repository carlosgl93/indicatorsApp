import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const ListItem = (title, currency, navigation) => {
    return (
        <View>
            <Text onPress={() => navigation.navigate('IndicatorHistory')}>{title}</Text>
            <Text onPress={() => navigation.navigate('IndicatorHistory')}>{currency}</Text>
            <Ionicons onPress={() => navigation.navigate('IndicatorDetails')} name="information-circle-outline" size={24} color="blue" />
        </View>
    )
}

export default ListItem

const styles = StyleSheet.create({})
