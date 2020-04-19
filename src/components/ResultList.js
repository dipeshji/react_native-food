//child of SearchScreen.js
import React from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultDetail from './ResultsDetail';

const ResultList = ({ title, results, navigation }) => {

    if(!results.length){
        return null;
    }

    return <View style={style.container}>
        <Text style={style.title}>{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={()=> navigation.navigate('ResultShow',{ id:item.id })}>
                        <ResultDetail result={item} />
                    </TouchableOpacity>
                )
            }}
        />
    </View>
};

const style = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginLeft: 15,
        marginVertical: 10
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultList);