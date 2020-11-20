import React, { useEffect, useState } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import styles from "./style";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";

const song = {
  id: "1",
  imageUri:
    "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
  title: "High on You",
  artist: "Helen",
};
const PlayerWidget = () => {
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number>(0);

  const playbackStatusUpdate = (status: any) => {
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  };

  const getProgress = () => {
    if (sound === null || duration === null || position === 0) {
      return 0;
    }
    else
    {
      return (position/duration)*100 
    }
    
  };

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Sound.createAsync(
      { uri: song.imageUri },
      { shouldPlay: isPlaying },
      playbackStatusUpdate
    );

    setSound(newSound);
  };

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };

  useEffect(() => {
    playCurrentSong();
  }, []);

  return (
    <View style={styles.container}>
      <View style={[styles.progress, {width:`${getProgress()}%`}]}></View> 
      <View style={styles.row}>
      
     
      <Image source={{ uri: song.imageUri }} style={styles.image}></Image>
      <View style={styles.rightContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
        <View style={styles.iconsContainer}>
          <AntDesign name="hearto" size={30} color="white"></AntDesign>
          <TouchableOpacity onPress={onPlayPausePress}>
            {isPlaying ? (
              <FontAwesome name="pause" size={30} color="white"></FontAwesome>
            ) : (
              <FontAwesome name="play" size={30} color="white"></FontAwesome>
            )}
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
