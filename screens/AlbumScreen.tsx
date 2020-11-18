import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import albumDetails from "../data/albumDetails";
import SongListItem from "../components/SongListItem";
import AlbumHeader from '../components/AlbumHeader'

const AlbumScreen = () => {
  const route = useRoute();

  useEffect(() => {
    console.log(route);
    return () => {};
  }, []);

  return (
    <View>
        
      <FlatList
        data={albumDetails.songs}
        renderItem={({ item }) => (
          <SongListItem song={item}></SongListItem>
        )}
        keyExtractor = {(item) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={albumDetails}/>}
      ></FlatList>
    </View>
  );
};

export default AlbumScreen;
