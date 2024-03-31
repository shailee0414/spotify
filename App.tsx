/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import { demoFirst } from './src/Api/demo';

// theme integration dark light and system theme support
// internalization (multiple language support )
// state management tools 
// debounce throttle use cases in app 
// react native vector icons
// fonts integration
// lottie or rive support 
// 


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {


  const getData = async () => {
    try {
      const data = await demoFirst()
      console.log(data)

    } catch (err) {
      console.log("ERROR::", err)

    }
  }

  useEffect(() => {
    console.log("Loaded")
    // const userData = {
    //   username: 'exampleuser',
    //   email: 'user@example.com'
    // };
    // fetch('http://localhost:3000/api/demo/demoFirst', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(userData),
    // }).then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error("ppppp", error));


    // getData()
    // fetch('http://localhost:3000/getData')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error(error));

    //   fetch('http://localhost:3000/gt')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error(error));
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const demo = [
    { name: "user1", key:1 },
    { name: "user1", key:2 },
    { name: "user1", key:3 },
    { name: "user1", key:4 },
    { name: "user1", key:5 },
    { name: "user1", key:6 },
    { name: "user1", key:7 },
    { name: "user1", key:8 },
    { name: "user1", key:9 },
    { name: "user1", key:10 },
  ]

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FlatList 
        data={demo}
        renderItem={({ item }) => {
          return <Text style={styles?.sectionContainer}>{item?.name}</Text>
        }}

      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    height:40,
    backgroundColor:"aqua",
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    width:100,
    padding:20

  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
