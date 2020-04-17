import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ search, onSearchChange, onSearchSubmit }) => {
    return <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder="Search"
            value={search}
            //onSearchChange is a Callback to send data to parent component(SearchScreen)
            onChangeText={newSearch => onSearchChange(newSearch)}
            onEndEditing = {() => onSearchSubmit()}
        />
    </View>
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        marginTop: 20,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 2
    },
    inputStyle: {
        flex: 1,
        fontSize: 20
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;