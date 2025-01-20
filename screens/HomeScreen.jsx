import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ movies }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Movies</Text>
      {movies ? (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.show.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', { movie: item })}
              style={styles.movieItem}
            >
              <Image
                source={{
                  uri: item.show.image
                    ? item.show.image.medium
                    : 'https://via.placeholder.com/100x150?text=No+Image',
                }}
                style={styles.movieImage}
              />
              <View style={styles.movieDetails}>
                <Text style={styles.movieTitle}>{item.show.name}</Text>
                <Text style={styles.summary} numberOfLines={3}>
                  {item.show.summary?.replace(/<\/?[^>]+(>|$)/g, '') || 'No summary available'}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View style={styles.work}>
          <Text style={styles.works}>Fetching Data...</Text>
          <Text style={styles.works}>Work in Progress</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  movieItem: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
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
    color: '#fff',
    marginBottom: 5,
  },
  summary: {
    fontSize: 14,
    color: '#bbb',
    marginBottom: 10,
  },
  work: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  works: {
    color: 'white',
    fontSize: 24,
  },
});

export default HomeScreen;
