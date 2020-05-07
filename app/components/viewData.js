import React from 'react';
import { FlatList, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { viewSingleObject } from '../actions';

const ViewData = () => {
    const state = useSelector(state => state);
    const dispact = useDispatch();

    getSingleObject = () => {
        const result = state.filter((o) => {
            return o.title == titleRec;
        })
        return result;
    }
    return <View>
        <Text>Hello</Text>
        <Text>{getSingleObject}</Text>
    </View>
}
export default ViewData();