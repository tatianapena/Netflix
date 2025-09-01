import React from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import Layout from "../components/Layout";
import { useQuery } from "@tanstack/react-query";
import { fetchShows, Show } from "../lib/api";
import { router } from "expo-router";

export default function HomeScreen() {
  const { data: shows } = useQuery({
    queryKey: ["shows"],
    queryFn: () => fetchShows(),
  });

  return (
    <Layout>
      <FlatList
        data={shows ?? []}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => <View style={{ height: 18 }} />}
        renderItem={({ item }) => (
          <View style={styles.categorySection}>
            <Text style={styles.categoryTitle}>{item.name}</Text>
            <FlatList
              data={item.shows}
              keyExtractor={(show) => show.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
              renderItem={({ item: show }) => (
                <TouchableOpacity
                  onPress={() => {
                    router.push({
                      pathname: "/details",
                      params: { show: JSON.stringify(show) },
                    });
                  }}
                  style={styles.posterWrapper}
                >
                  <Image
                    source={{ uri: show.poster_url }}
                    style={styles.poster}
                  />
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 8,
  },
  categorySection: {
    gap: 8,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 6,
  },
  posterWrapper: {
    borderRadius: 6,
    overflow: "hidden",
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 6,
  },
});
