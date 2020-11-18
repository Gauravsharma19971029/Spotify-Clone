import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./style";
import { Album } from "../../types";
import { useNavigation } from "@react-navigation/native";

export type AlbumProps = {
  album: Album;
};

const AlbumComponent = (props: AlbumProps) => {
  console.log("Props", props.album);

  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate('Album',{id:props.album.id })
  }

  return (
    <TouchableWithoutFeedback onPress = {handlePress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: props.album.imageUri }}
        ></Image>
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AlbumComponent;
