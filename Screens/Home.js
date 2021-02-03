import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'; 

const Home = ({ navigation }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getApiData = async () => {
      try {
        let response = await fetch("https://mindicador.cl/api");
        let json = await response.json();
        setData(json);
      } catch (error) {
        console.log("there is an error getting the API information!", error);
      }
    };
    // fetching API information
    getApiData();
  }, []);

  console.log("props ", navigation);
  console.log("data: ", data);

  const generateListItems = () => {
    console.log("anyshit");
    console.log("data", data);

    let indicatorsData = [];
    for (const indicator in data) {
      console.log(indicator);
      indicatorsData.push(data[indicator]);
    }
    console.log(indicatorsData.slice(3));
    return indicatorsData.slice(3);
  };

  const ListItem = ({ title, currency }) => (
    <View styles={styles.itemContainer}>
      <View styles={styles.left}>
        <Text>{title}</Text>
        <Text>{currency}</Text>
      </View>
      <View styles={styles.right}>
        <Ionicons name="information-circle-outline" size={24} color="blue" />
        <AntDesign name="right" size={18} color="grey" />
      </View>
    </View>
  );

  return (
    <View>
      {data ? (
        <FlatList
          data={generateListItems()}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <ListItem title={item.nombre} currency={item.unidad_medida} />
            );
          }}
          keyExtractor={(item) => item.codigo}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    itemContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center'
    },
    left: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    right: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
