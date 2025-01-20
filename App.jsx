import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import DetailsScreen from './screens/DetailsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.tvmaze.com/search/shows?q=all`
        );
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []); 

  // Stack Navigator for Home screen with Details
  const HomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {() => <HomeScreen movies={movies} />}
        </Stack.Screen>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: { backgroundColor: '#000', borderTopWidth: 0 },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'; // Example icons
              return <AntDesign name={iconName} size={35} color={color} />;
            } else if (route.name === 'Search') {
              iconName = focused ? 'movie-search' : 'movie-search-outline'; // Example icons
              return <MaterialCommunityIcons name={iconName} size={35} color={color} />;
            }
          },
          tabBarActiveTintColor: '#ff6347', // Active tab color
          tabBarInactiveTintColor: '#fff', // Inactive tab color
          tabBarLabelStyle: { display: 'none' }, // Hides the tab labels
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SearchScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;







// import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import { createStackNavigator } from '@react-navigation/stack';
// import axios from 'axios';
// import HomeScreen from './screens/HomeScreen';
// import SearchScreen from './screens/SearchScreen';
// import DetailsScreen from './screens/DetailsScreen';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import AntDesign from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome'; 


// const Tab = createBottomTabNavigator();
// // const Stack = createStackNavigator();

// const App = () => {
//   const [movies, setMovies] = useState([]);
//   const [favoriteMovies, setFavoriteMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.tvmaze.com/search/shows?q=all`
//         );
//         setMovies(response.data);
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//       }
//     };

//     fetchMovies();
//   }, []);


    

//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           headerShown: false,
//           tabBarStyle: { backgroundColor: '#000', borderTopWidth: 0 },
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;

//             if (route.name === 'Home') {
//               iconName = focused ? 'home' : 'home-outline'; // Example icons
//               return <AntDesign name={iconName} size={35} color={color} />;
//             } else if (route.name === 'Search') {
//               iconName = focused ? 'movie-search' : 'movie-search-outline'; // Example icons
//               return <MaterialCommunityIcons name={iconName} size={35} color={color} />;
//             }

//           },
//           tabBarActiveTintColor: '#ff6347', // Active tab color
//           tabBarInactiveTintColor: '#fff', // Inactive tab color
//           tabBarLabelStyle: { display: 'none' }, // Hides the tab labels
//         })}
//       >
//         <Tab.Screen name="Home" options={{ tabBarLabel: () => null }}>
//           {() => <HomeScreen movies={movies} />}
//         </Tab.Screen>
        
//         <Tab.Screen name="Search" options={{ tabBarLabel: () => null }}>
//           {() => <SearchScreen />}
//         </Tab.Screen>

//         <Tab.Screen name="Details" options={{ tabBarLabel: () => null }}>
//           {() => <DetailsScreen />}
//         </Tab.Screen>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;