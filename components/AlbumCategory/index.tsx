import React from "react";
import { Text, View, FlatList } from "react-native";
import { Album } from "../../types";
import AlbumComponent from "../Album";
import styles from "./styles";

export type AlbumCategoryProps = {
  title: String;
  albums: [Album];
};

const AlbumCategory = (props: AlbumCategoryProps) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        data={props.albums}
        renderItem={({ item }) => (
          <AlbumComponent album={item}></AlbumComponent>
        )}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

export default AlbumCategory;
