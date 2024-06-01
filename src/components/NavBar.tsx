import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {spacing} from '../constants/theme/spacing';
import {palette} from '../constants/theme/palette';
import {fontSize} from '../constants/theme/fontSize';
import {fontWeight} from '../constants/theme/fontWeight';

interface NavBarProps {
  navDetails: {
    title: string;
    active: string;
  };
  onChangeNav: (text: string) => void;
}

const nav: any = {
  home: {
    title: '',
    value: 'home',
    pill: ['All', 'Music', 'Podcasts'],
    // icon: [''],
  },
  search: {
    title: 'Search',
    value: 'search',
    // pill: [''],
    icon: ['camera-outline'],
  },
  library: {
    title: 'Your Library',
    value: 'library',
    pill: ['Artist', 'Playlist'],
    icon: ['magnify', 'plus'],
  },
};

export default function NavBar({
  navDetails,
  onChangeNav,
}: NavBarProps): React.JSX.Element {
  console.log(nav?.[navDetails?.title]?.icon?.length);
  return (
    <View style={[styles?.navBarContainer]}>
      <View style={[styles?.titleSection]}>
        <TouchableOpacity style={[styles?.profile]}>
          <Text style={styles?.profileText}>S</Text>
        </TouchableOpacity>
        {nav?.[navDetails?.title]?.title && (
          <Text style={styles?.navTitle}>
            {nav?.[navDetails?.title]?.title}
          </Text>
        )}
        <View style={[styles?.navPillSection]}>
          {nav?.[navDetails?.title]?.pill?.length &&
            nav?.[navDetails?.title]?.pill?.map(
              (item: string, index: number) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles?.navPill,
                    navDetails?.active === item && styles?.activePill,
                  ]}
                  onPress={() => {
                    onChangeNav(item);
                  }}>
                  <Text
                    style={[
                      styles?.pillText,
                      navDetails?.active === item && styles?.activePillText,
                    ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ),
            )}
        </View>
      </View>
      {nav?.[navDetails?.title]?.icon?.length && (
        <View
          style={[
            nav?.[navDetails?.title]?.value === 'library' &&
              styles?.libraryIcon,
          ]}>
          <FlatList
            data={nav?.[navDetails?.title]?.icon}
            horizontal={true}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Icon name={item} size={28} color={palette?.cF5F5F5} />
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  navBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navTitle: {
    color: palette?.cF5F5F5,
    fontSize: fontSize?.fs22,
    fontWeight: fontWeight.extraBold,
  },
  profile: {
    height: 35,
    width: 35,
    backgroundColor: palette?.c4caded,
    borderRadius: 17,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    fontSize: fontSize?.fs16,
    fontWeight: fontWeight?.bold,
  },
  navPillSection: {
    // display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    // justifyContent: 'space-around',
  },
  navPill: {
    // alignItems: 'center',
    backgroundColor: palette?.c1B1A1C,
    paddingVertical: 6,
    marginHorizontal: spacing?.sp2,
    paddingHorizontal: spacing?.sp14,
    borderRadius: spacing?.sp14,
  },
  activePill: {
    backgroundColor: palette?.c1ED760,
  },
  pillText: {
    color: palette?.cF5F5F5,
    fontSize: fontSize?.fs14,
    fontWeight: fontWeight?.normal,
  },
  activePillText: {
    color: palette?.c000000,
  },
  libraryIcon: {
    marginTop: spacing?.sp14,
    marginHorizontal: spacing?.sp8,
  },
});
