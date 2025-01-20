import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: movie.show.image
            ? movie.show.image.original
            : 'https://via.placeholder.com/300x450?text=No+Image',
        }}
        style={styles.movieImage}
      />
      <Text style={styles.title}>{movie.show.name}</Text>
      <Text style={styles.summary}>
        {movie.show.summary?.replace(/<\/?[^>]+(>|$)/g, '') || 'No summary available'}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#121212',
  },
  movieImage: {
    width: '100%',
    height: 400,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  summary: {
    fontSize: 16,
    color: '#bbb',
    lineHeight: 22,
  },
});

export default DetailsScreen;
