import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SearchScreen = () => {
  const isFavorite = (movie) => favoriteMovies.some(fav => fav.id === movie.id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Movies</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#121212', // Dark background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // White text for title
  },
  centered: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  noFavorites: {
    fontSize: 18,
    color: '#bbb', // Lighter grey for no favorites text
    textAlign: 'center', // Centers text horizontally
  },
  movieItem: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e', // Slightly lighter black for movie items
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // For Android shadow
  },
  movieImage: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 15,
  },
  movieDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // White text for movie title
    marginBottom: 5,
  },
  releaseDate: {
    fontSize: 14,
    color: '#bbb', // Lighter grey for release date
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: '#bbb', // Lighter grey for rating
    marginBottom: 10,
  },
  favourite: {
    justifyContent: 'center',
  },
});

export default SearchScreen;
