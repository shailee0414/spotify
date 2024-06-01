import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import {palette} from '../constants/theme/palette';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontSize} from '../constants/theme/fontSize';
import {spacing} from '../constants/theme/spacing';

interface SearchBarProps {
  search?: string;
  setSearch: (text: string) => void;
}
export default function SearchBar({
  search,
  setSearch,
}: SearchBarProps): React.JSX.Element {
  return (
    <View style={styles?.SearchBox}>
      <View>
        <Icon name="magnify" size={25} color={palette?.c000000} />
      </View>
      <TextInput
        onChangeText={newText => {
          setSearch(newText);
        }}
        value={search}
        style={styles?.SearchInput}
        placeholder="Search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  SearchBox: {
    borderWidth: 2,
    height: 50,
    padding: spacing.sp8,
    backgroundColor: palette?.cF5F5F5,
    display: 'flex',
    flexDirection: 'row',
    gap: spacing?.sp8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: spacing.sp12,
  },
  SearchInput: {
    fontSize: fontSize?.fs16,
    color: palette?.c000000,
  },
});
