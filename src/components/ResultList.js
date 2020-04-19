import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import ResultDetail from './ResultsDetail';

const ResultList = ({ title, results }) => {
    return <View>
        <Text style={style.title}>{title}</Text>
        <FlatList
            horizontal
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return <ResultDetail result={item} />
            }}
        />
    </View>
};

const style = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: 'bold'
    }
});

export default ResultList;