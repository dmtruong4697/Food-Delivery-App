import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import { useNavigation } from '@react-navigation/native';

const slides = [
    {
      key: 'slide1',
      title: 'All your favorites',
      text: 'Get all your loved foods in one once place, you just place the orer we do the rest',
      image: require('../../../assets/welcome/welcome1.png'),
    },
    {
      key: 'slide2',
      title: 'Order from choosen chef',
      text: 'Get all your loved foods in one once place, you just place the orer we do the rest',
      image: require('../../../assets/welcome/welcome2.png'),
    },
    {
        key: 'slide3',
        title: 'Free delivery offers',
        text: 'Get all your loved foods in one once place, you just place the orer we do the rest',
        image: require('../../../assets/welcome/welcome3.png'),
    },
  ];

  const RenderSlide = ({ item }) => {
    return (
      <View style={styles.slideContainer}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
        {/* <Button title="Get Started" /> */}
      </View>
    );
  };

const WelcomeScreen = () => {

    const navigation = useNavigation();

    const RenderNextButton = () => {
        return (
            <View
                style={{
                    width: 306,
                    height: 66,
                    borderRadius: 12,
                    backgroundColor: '#FFCA28',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginBottom: 15,
                }}
            >
                <Text style={[styles.buttonText, {color: '#FFFFFF', fontWeight: '700'}]}>NEXT</Text>
            </View>
        );
      }
    
    const RenderSkipButton = () => {
        return (
            <View
                style={{
                    width: 306,
                    height: 66,
                    borderRadius: 12,
                    backgroundColor: null,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginBottom: 15,
                }}
                onPress={() => {
                    navigation.navigate({name: 'SignIn'})
                }}
            >
                <Text style={[styles.buttonText, {color: '#000000', fontWeight: '400'}]}>Skip</Text>
            </View>
        );
    }

    const RenderDoneButton = () => {

        return (
            <TouchableOpacity
                style={{
                    width: 306,
                    height: 66,
                    borderRadius: 12,
                    backgroundColor: '#FFCA28',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginBottom: 15,
                }}
                onPress={() => {
                    navigation.navigate({name: 'SignIn'})
                }}
            >
                <Text style={[styles.buttonText, {color: '#FFFFFF', fontWeight: '700'}]}>DONE</Text>
            </TouchableOpacity>
        );
      }

  return (
    <AppIntroSlider
      data={slides}
      renderItem={RenderSlide}
      showNextButton={true}
      showDoneButton={true}
      bottomButton={true}
      showSkipButton={true}
      renderNextButton={RenderNextButton}
      renderSkipButton={RenderSkipButton}
      renderDoneButton={RenderDoneButton}
      dotStyle={{
        backgroundColor: '#FFCDD2',
        width: 8,
        height:8,
      }}
      activeDotStyle={{
        backgroundColor: '#EF5350',
        width: 8,
        height:8,
      }}
      
    />
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    slideContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 262,
      height: 304,
      marginTop: -180,
    },
    title: {
      fontSize: 24,
      marginTop: 16,
      fontWeight: '700',
      color: '#000000',
    },
    text: {
      width: '95%',
      textAlignVertical: 'center',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500',
      color: '#646982',
      marginTop: 8,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
    }
  });