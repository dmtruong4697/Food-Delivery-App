import { Button, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type SlideData = {
  id: number;
  key: string;
  title: string;
  text: string;
  image: ImageSourcePropType;
}

const slides: SlideData[] = [
    {
      id: 1,
      key: 'slide1',
      title: 'All your favorites',
      text: 'Get all your loved foods in one once place, you just place the orer we do the rest',
      image: require('../../../assets/welcome/welcome1.png'),
    },
    {
      id: 2,
      key: 'slide2',
      title: 'Order from choosen chef',
      text: 'Get all your loved foods in one once place, you just place the orer we do the rest',
      image: require('../../../assets/welcome/welcome2.png'),
    },
    {
        id: 3,
        key: 'slide3',
        title: 'Free delivery offers',
        text: 'Get all your loved foods in one once place, you just place the orer we do the rest',
        image: require('../../../assets/welcome/welcome3.png'),
    },
  ];

  const renderSlide = ({item}: {item: SlideData}) => {
    // console.log('log', item)
    return (
      <View style={styles.slideContainer}>
        <Image source={item?.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
        {/* <Button title="Get Started" /> */}
      </View>
    );
  };

const WelcomeScreen: FC = () => {

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

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
            <TouchableOpacity
                style={styles.btnSkip}
                onPress={() => {
                  navigation.navigate('SignIn')
                }}
            >
                <Text style={[styles.buttonText, {color: '#000000', fontWeight: '400'}]}>Skip</Text>
            </TouchableOpacity>
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
                    navigation.navigate('SignIn')
                }}
            >
                <Text style={[styles.buttonText, {color: '#FFFFFF', fontWeight: '700'}]}>DONE</Text>
            </TouchableOpacity>
        );
      }

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderSlide

      }
       
    
      showNextButton={true}
      showDoneButton={true}
      bottomButton={true}
      showSkipButton={true}
      renderNextButton={RenderNextButton}
      renderSkipButton={RenderSkipButton}
      renderDoneButton={RenderDoneButton}
      // keyExtractor={item => item.id}
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