import { Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { logout } from "../store/client/auth.service";

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <CustomButton text="LOGOUT" onPress={() => logout()}/>
    </View>
  );
};

export default Profile;
