import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
const { width, height } = Dimensions.get("window");

const Index = () => {
  const [locations, setLocations] = useState([1, 2, 3]);
  const [searchToggle,setSearchToggle] =useState(false)
  return (
    <View style={home.container}>
      <StatusBar style="dark" />
      <Image
        blurRadius={40}
        source={require("../../assets/images/bg.png")}
        style={home.image}
      />
      <SafeAreaView style={home.safeArea}>
        <View style={home.searchContainer}>
          <View style={home.inputWrapper}>
            <TextInput
              placeholder="Enter City"
              placeholderTextColor="gray"
              style={home.input}
            />
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                opacity: 0.7,
                width: 80,
                padding: 10,
                borderRadius: 40,
                marginRight: 2,

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "black",
                }}
              >
                Search
              </Text>
            </TouchableOpacity>
          </View>
          {locations.length > 0 ? (
            <View
              style={{
                position: "absolute",
                backgroundColor: "white",
                opacity:0.5,
                
                 top:45,
                 width:"95%",
                 alignSelf:"center",
                 padding:10,
                 marginLeft:10,
                borderRadius: 20,
              }}
            >
              {locations.map((loc, ind) => {
                return (
                  <TouchableOpacity key={ind} style={
                    {
                      padding:10,
                      opacity:0.9,
                     borderBottomColor:"black",
                      borderRadius:5
                    }
                  }>
                    <Text
                      style={{
                        color: "black",
                      }}
                    >
                      Bhimavaran
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
        <View style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          flex:1
        }}>
          <Text style={{
            color:"black"
          }}>
            hello
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Index;

const home = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#25292e",
  },
  image: {
    position: "absolute",
    width: width,
    height: height,
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchContainer: {
    width: "100%",
    paddingHorizontal: 10,
    position: "absolute",
    top: 20, // Adjust this value as needed for positioning
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "white",
    opacity: 0.8, // Improved opacity for better visibility
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    display: "flex",
    flexDirection: "row",
  },
  input: {
    color: "black",
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
});
