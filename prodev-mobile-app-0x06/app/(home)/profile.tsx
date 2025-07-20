import { View, Text, Image, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const Profile = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className=" flex-1 p-4">
        <Text className=" mb-6  text-4xl font-normal text-black">Profile</Text>
        <View className=" mb-10 h-[90px] flex-row items-center justify-between rounded-md bg-[#34967C] px-7">
          <View className="flex-row items-center gap-4">
            <Image source={require('@/assets/images/user-image.png')} />
            <View>
              <Text className=" text-xl font-semibold text-white">Cole Baidoo</Text>
              <Text className="text-sm font-thin text-white">@block_cs</Text>
            </View>
          </View>
          <Feather name="edit-3" size={24} color="white" />
        </View>

        <View className="mb-4 h-[350px] gap-3 rounded-md bg-white p-4">
          <Pressable className="mb-2 flex-row items-center justify-between">
            <View className="flex-row items-center gap-4">
              <View className="h-12 w-12 items-center justify-center rounded-full bg-[#0601B4]/10 ">
                <FontAwesome6 name="user" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className=" mb-2 text-lg font-semibold">My Account</Text>
                <Text className=" font-thin text-gray-700">Make Changes to your account</Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
          </Pressable>
          <Pressable className="mb-2 flex-row items-center justify-between">
            <View className="flex-row items-center gap-4">
              <View className="h-12 w-12 items-center justify-center rounded-full bg-[#0601B4]/10 ">
                <FontAwesome6 name="user" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className=" mb-2 text-lg font-normal">Saved Beneficiary</Text>
                <Text className=" font-thin text-gray-700">Manage your saved accounts</Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
          </Pressable>
          <Pressable className="mb-2 flex-row items-center justify-between">
            <View className="flex-row items-center gap-4">
              <View className="h-12 w-12 items-center justify-center rounded-full bg-[#0601B4]/10 ">
                <Ionicons name="lock-closed-outline" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className=" mb-2 text-lg font-normal">Face ID / Touch ID</Text>
                <Text className=" font-thin text-gray-700">Make Changes to your account</Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
          </Pressable>
          <Pressable className="mb-2 flex-row items-center justify-between">
            <View className="flex-row items-center gap-4">
              <View className="h-12 w-12 items-center justify-center rounded-full bg-[#0601B4]/10 ">
                <Ionicons name="shield-checkmark-outline" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className=" mb-2 text-lg font-normal">Two-Factor Authentication</Text>
                <Text className=" font-thin text-gray-700">
                  Further secure your account for safety
                </Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
          </Pressable>
          <Pressable className="mb-2 flex-row items-center justify-between">
            <View className="flex-row items-center gap-4">
              <View className="h-12 w-12 items-center justify-center rounded-full bg-[#0601B4]/10 ">
                <MaterialIcons name="logout" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className=" mb-2 text-lg font-normal">Log out</Text>
                <Text className=" font-thin text-gray-700">
                  Further secure your account for safety
                </Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
          </Pressable>
        </View>

        <Text className=" mb-6  text-xl font-normal text-black">More</Text>

        <View className="mb-4 h-[139px] gap-3 rounded-md bg-white p-4">
          <Pressable className="mb-2 flex-row items-center justify-between">
            <View className="flex-row items-center gap-4">
              <View className="h-12 w-12 items-center justify-center rounded-full bg-[#0601B4]/10 ">
                <FontAwesome6 name="user" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className=" mb-2 text-lg font-semibold">My Account</Text>
                <Text className=" font-thin text-gray-700">Make Changes to your account</Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
          </Pressable>
          <Pressable className="mb-2 flex-row items-center justify-between">
            <View className="flex-row items-center gap-4">
              <View className="h-12 w-12 items-center justify-center rounded-full bg-[#0601B4]/10 ">
                <FontAwesome6 name="user" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className=" mb-2 text-lg font-normal">Saved Beneficiary</Text>
                <Text className=" font-thin text-gray-700">Manage your saved accounts</Text>
              </View>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={34} color="black" />
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Profile;
