import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    [data, setData] = useState(null); //when we expect state value as an object 
    //we provide null as default value

    const getRsult = async (_id) => {
        const response = await yelp.get(`/${_id}`);
        setData(response.data);

    }

    useEffect(() => {
        getRsult(id);
    }, [])

    if (!data) {
        return null;
    }

    return <View>
        <Text style={{alignSelf:'center'}}> {data.name} </Text>
        <FlatList
            data={data.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item})=>{
                return <Image style={styles.image} source={{uri:item}} />
            }}
        />
    </View>
};

const styles = StyleSheet.create({
    image:{
        width:300,
        height:250,
        alignSelf:'center',
        marginBottom:4
    }
});

export default ResultShowScreen;