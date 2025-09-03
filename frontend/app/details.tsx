import { ScrollView, Image, Text, StyleSheet, View } from "react-native";
import { fetchShowById, Episode } from "../lib/api";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const showId = Number(id);

  const { data: info } = useQuery({
    queryKey: ["show-detail", showId],
    queryFn: () => fetchShowById(showId),
    enabled: !!showId,
  });

  return (
    <ScrollView style={{ backgroundColor: "#121212" }}>
      {info && (
        <View>
          <Image
            source={{ uri: info?.poster_url }}
            style={{ width: "100%", height: 300 }}
          />
          <View style={styles.container}>
            <Text style={styles.title}>{info.title}</Text>
            <Text style={styles.synopsis}>{info.synopsis}</Text>
          </View>
        </View>
      )}

      <View style={styles.container}>
        <Text style={styles.episodeTitle}>Capítulos</Text>
        {info?.episodes?.map((episode: Episode) => (
          <Text key={episode.id} style={styles.synopsis}>
            {episode.title}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  synopsis: {
    fontSize: 16,
    fontWeight: "normal",
    color: "white",
    marginBottom: 6,
  },
  episodeTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    marginBottom: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 6,
  },
});
