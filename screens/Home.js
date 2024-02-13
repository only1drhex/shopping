import { View, Text, Switch, FlatList, StatusBar, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useEffect, useState} from 'react';
import { useColorScheme, NativeWindStyleSheet } from 'nativewind';
// import StatusBarComponent from '../components/tools/StatusBarComponent';
// import SwitchComponent from '../components/tools/SwitchComponent';
import { Avatar,  Nike, } from '../assets';
// import { COLORS } from '../assets/constants';
import { FontAwesome, AntDesign,  MaterialCommunityIcons } from '@expo/vector-icons';



NativeWindStyleSheet.setOutput({
  default: "native"
})

const Home = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
   const [selected, setSelected] = useState(1)


  
      const data = [
    { id: '1', title: 'All' },
    { id: '2', title: 'Mens' },
    { id: '3', title: 'Womens' },
    { id: '4', title: 'kids wear' },
  
  ];

  const BrandsData = [
  { id: '1', title: 'Zara',  },
  { id: '2', title: 'Gucci',  },
  { id: '3', title: 'H&M',  },
  { id: '4', title: 'Nike', },
]

   


renderItem = ({item}) => {
  const isSelected = selected == item.id;
  return (
    <TouchableOpacity
      onPress={() => setSelected(item.id)}
      className= {`h-10 px-2 mr-11 mt-4 rounded-[20px] ${isSelected? 'bg-[#648286]': 'bg-[#F5F5F5] dark:bg-[#1D2221]'} items-center justify-center`}>
      <Text className="whitespace-nowrap text-[16px] dark:text-white ">{item.title}</Text>
    </TouchableOpacity>
  )
}

renderBrandItem = ({item}) => {
  // const isSelected = selected === item.id;
  return (
    <TouchableOpacity
      // onPress={() => onclick(item.id)}
      className= "h-[50] w-[50] px- mr-11 mt-4 bg-black rounded-full items-center justify-center">
      <Text className="whitespace-nowrap text-[16px] dark:text-white ">{item.title}</Text>
    </TouchableOpacity>
  )
}
  
  return (
    <SafeAreaView className="flex-1 relative bg-#ffffff dark:bg-[#0f1414]">
      <ScrollView>
      {/* <StatusBarComponent /> */}
      {/* HEADER SECTION */}
      <View className="flex-row  px-4 mt-8 items-center space-x-2 justify-between">

      <Text className="text-black dark:text-white text-[18px] text-base"> hello! 👋</Text>

      <View className="w-12 h-12 bg-black rounded-full mt-8 items-center justify-center ">
      <Image source={Avatar} 
            className="w-full h-full rounded-full object-cover"
            />
      </View>
      </View>

      {/* SECOND SECTION */}

      <View className=" px-4 space-x-2"><Text className=" font-bold text-[50px] text-black dark:text-white ">Let's find your Exclusive Outfit</Text></View>
      


       {/* SEARCH BOX SECTION */}
      <View className="px-4 mt-4 flex-row">
      <View className="flex-row h-[50px] justify-start items-center w-[80%] bg-[#fafafa] dark:bg-[#161b1b] px-4 space-x-2 rounded-md border-[#dadada] shadow-lg"> 
      <AntDesign name="search1" size={26} color="#d7d7d7" />
          <TextInput 
            className="h-8 px-2 text-[19px]"
            placeholder='Search'
            placeholderTextColor="#d7d7d7"
            
          />
        </View>
        <TouchableOpacity className="h-[50] ml-2 rounded w-14 items-center justify-center bg-[#648286] ">
           <MaterialCommunityIcons name="tune-variant" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* category section */}
        <View className="mt-4 px-4">
          <Text className="font-bold text-[30px] dark:text-white">Top Categories</Text>
          <FlatList
    data={data}
    renderItem={renderItem}
    showsHorizontalScrollIndicator = {false}
    keyExtractor={item => item.id}
    horizontal={true}
    decelerationRate="fast"
   
  /></View>


{/* Tops Brands */}
<View className="mt-4 px-4">
          <Text className="font-bold text-[30px] dark:text-white">Top Brands</Text>
          <View className="flex-row items-center justify-between ">
            <View className="h-[60] w-[60] mt-4 rounded-full  items-center justify-center border-solid border-violet-700 border-2 "><Image className="w-full h-full object-cover  " source={Nike} /></View>
            <View className="h-[60] w-[60] mt-4 rounded-full  items-center justify-center border-solid border-violet-700 border-2"><Image className="w-full h-[15]  object-scale-down  " source={Nike} /></View>
            <View className="h-[60] w-[60] mt-4 rounded-full  items-center justify-center border-solid border-violet-700 border-2 "><Image className="w-full h-[15] object-cover  " source={Nike} /></View>
            <View className="h-[60] w-[60] mt-4 rounded-full  items-center justify-center border-solid border-violet-700 border-2 "><Image className="w-full h-[15] object-cover  " source={Nike} /></View>
          </View>
        </View>

        {/* popular products and  */}

        <View className="mt-4 px-4 flex-row justify-between">
          <Text className="font-bold text-[30px] dark:text-white">Popular products</Text>
            <TouchableOpacity className="mt-1 ml-12"><Text className="text-[#789295] font-bold text-[18px]">View all</Text></TouchableOpacity>
        </View>
        
        {/* card component */}

       <View className="flex-row px-4">
        <View className="w-40 h-60 bg-red-600 py-8 items-center  justify-center"><View className="w-full px-4 flex-col">
          <Image className="w-full h-20 px-2" source={Avatar} />
        </View>
        <View>
          
          <Text>Dennis Lingo</Text>
          <Text>Dennis Lingo</Text>
          <Text>Dennis Lingo</Text>

        </View>
        
        </View>
        <View className="w-40 h-60 bg-blue-600 py-8 ml-2 items-center justify-center "><View className="w-full px-4 flex-col">
          <Image className="w-full h-20" source={Avatar} />
        </View>
        <View>
          
          <Text>Dennis Lingo</Text>
          <Text>Dennis Lingo</Text>
          <Text>Dennis Lingo</Text>

        </View>
        
        </View>

        
        {/* <View className="w-30 h-30 bg-red-600 "><View></View><View><Text>Dennis Lingo</Text></View></View> */}

       </View>



      {/* <SwitchComponent /> */}
      </ScrollView>
    </SafeAreaView>
  );
}




export default Home;
