import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native';
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {

    const [search, setSearch] = useState('');

    return <View style={styles.main_view}>
        <SearchBar
            search={search}
            //onSearchChange is a Callback to get data from childcomponent(SearachBar)
            onSearchChange={newSearch => setSearch(newSearch)}
            onSearchSubmit={()=>console.log('Submitted')}
        />
    </View>
}

const styles = StyleSheet.create({
});

export default SearchScreen;