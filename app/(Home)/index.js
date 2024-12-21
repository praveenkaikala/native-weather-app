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
  ScrollView,
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
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center",
          marginTop:200,
          flex:1
        }}>
          <Text style={{
            color:"white",
            fontWeight:"bold",
            fontSize:40
          }}>
            hello,
            <Text style={{
              marginLeft:10,
              fontSize:15,

            }}>
              bhimavaram
            </Text>
          </Text>
          <View style={
            {
              marginTop:40,
              flexDirection:"row",
              justifyContent:"center"
            }
          }>
            <Image source={require('../../assets/images/partlycloudy.png')} style={{
              height:150,
              width:150
            }}/>

          </View>
          <View style={{
            marginTop:30
          }}>
            <Text style={{
              color:"white",
              fontSize:35,
              textAlign:"center",
              fontWeight:"bold"
            }}>
              52.0 &#176;C
            </Text>
            <Text style={{
              color:"white",
              fontSize:20,
              fontWeight:"bold"
            }}>
             Party Cloudy
            </Text>
          </View>
          {/* stats */}
          <View style={{
            display:"flex",
            flexDirection:"row",
            width:"100%",
            alignItems:"flex-start",
           padding:20,
           marginTop:40,
            justifyContent:"space-between"
          }}>
          
            <View style={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center"
            }}>
              <Image source={require('../../assets/icons/wind.png')} style={{
                height:20,
                width:20
              }}/>
              <Text style={{
                color:"white",
                paddingLeft:5,
                fontWeight:"bold"
              }}>
                22km
              </Text>
            </View>
            <View style={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center"
            }}>
              <Image source={require('../../assets/icons/drop.png')} style={{
                height:20,
                width:20
              }}/>
              <Text style={{
                color:"white",
                paddingLeft:5,
                fontWeight:"bold"
              }}>
                22%
              </Text>
            </View>
            <View style={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center"
            }}>
              <Image source={require('../../assets/icons/sun.png')} style={{
                height:20,
                width:20
              }}/>
              <Text style={{
                color:"white",
                paddingLeft:5,
                fontWeight:"bold"
              }}>
                10.05 AMx
              </Text>
            </View>

          </View>
        </View>
        <View style={{
          
          marginVertical:5,
          width:"100%"
        }}>
          <View style={{
            flexDirection:"row",
            width:"100%",
            justifyContent:"flex-start",
            alignItems: "center",
            marginVertical:3,
            padding:10
          }}>
            <Text style={{
              color:"white",
              textAlign:"left"
            }}>
              Daily Forecast
            </Text>
          </View>
          <ScrollView
          horizontal
          contentContainerStyle={{paddingHorizontal:15}}
          showsHorizontalScrollIndicator={false }
          style={{
            marginBottom:20
          }}
          >
            <View style={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              width:100,
              borderRadius:30,
              paddingVertical:10,
              marginRight:10,
              backgroundColor:"white",
              opacity:0.15
            }}>
              <Image source={require("../../assets/images/heavyrain.png")} style={{
                height:50,
                width:50
              }}/>
              <Text style={{
                color:"white",
                
              }}>Monday</Text>
            </View>
            <View style={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              width:100,
              borderRadius:30,
              paddingVertical:10,
              marginRight:10,
              backgroundColor:"white",
              opacity:0.15
            }}>
              <Image source={require("../../assets/images/heavyrain.png")} style={{
                height:50,
                width:50
              }}/>
              <Text style={{
                color:"white",
                
              }}>Monday</Text>
            </View>
            <View style={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              width:100,
              borderRadius:30,
              paddingVertical:10,
              marginRight:10,
              backgroundColor:"white",
              opacity:0.15
            }}>
              <Image source={require("../../assets/images/heavyrain.png")} style={{
                height:50,
                width:50
              }}/>
              <Text style={{
                color:"white",
                
              }}>Monday</Text>
            </View>
            <View style={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              width:100,
              borderRadius:30,
              paddingVertical:10,
              marginRight:10,
              backgroundColor:"white",
              opacity:0.15
            }}>
              <Image source={require("../../assets/images/heavyrain.png")} style={{
                height:50,
                width:50
              }}/>
              <Text style={{
                color:"white",
                
              }}>Monday</Text>
            </View>
            <View style={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              width:100,
              borderRadius:30,
              paddingVertical:10,
              marginRight:10,
              backgroundColor:"white",
              opacity:0.15
            }}>
              <Image source={require("../../assets/images/heavyrain.png")} style={{
                height:50,
                width:50
              }}/>
              <Text style={{
                color:"white",
                
              }}>Monday</Text>
            </View>
            <View style={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              width:100,
              borderRadius:30,
              paddingVertical:10,
              marginRight:10,
              backgroundColor:"white",
              opacity:0.15
            }}>
              <Image source={require("../../assets/images/heavyrain.png")} style={{
                height:50,
                width:50
              }}/>
              <Text style={{
                color:"white",
                
              }}>Monday</Text>
            </View>
            <View style={{
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              width:100,
              borderRadius:30,
              paddingVertical:10,
              marginRight:10,
              backgroundColor:"white",
              opacity:0.15
            }}>
              <Image source={require("../../assets/images/heavyrain.png")} style={{
                height:50,
                width:50
              }}/>
              <Text style={{
                color:"white",
                
              }}>Monday</Text>
            </View>
          </ScrollView>
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
