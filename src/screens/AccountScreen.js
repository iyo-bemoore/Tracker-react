import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { Context as AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-elements';
import Spacer from '../components/Spacer';
const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text> Account Screen </Text>
      <Spacer>
        <Button title="Sing Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default AccountScreen;