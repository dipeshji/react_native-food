import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () => {

    const [search, setSearch] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultByPrice = (price) =>{
        //price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        })
    }

    return <View style={styles.main_view}>
        <SearchBar
            search={search}
            //onSearchChange is a Callback to get data from childcomponent(SearachBar)
            onSearchChange={newSearch => setSearch(newSearch)}
            onSearchSubmit={() => searchApi(search)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        {results.length
            ? <Text> We have found {results.length} results</Text>
            : null
        }
        <ResultList results={filterResultByPrice('$')} title="Cost Effective" />
        <ResultList results={filterResultByPrice('$$')} title="Bit Pricier" />
        <ResultList results={filterResultByPrice('$$$')} title="Big Spender" />
    </View>
}

const styles = StyleSheet.create({
});

export default SearchScreen;