import { SafeAreaView, View } from "react-native";

const AppContainer = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.pad}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container:{
    backgroundColor: "#fff",
    flex:1,
  },
  pad:{
    paddingHorizontal:10,
    flex:1,

  }
}

export default AppContainer;
