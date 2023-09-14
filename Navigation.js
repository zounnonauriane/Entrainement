import React, { useState } from 'react';
import { View, Text } from 'react-native';
import InscriptionModal from './InscriptionModal';
import LoginModal from './LoginModal';

function Navigation({ navigation }) {
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);

  const handleButtonPress = () => {
    setLoginModalVisible(true);
  };

  const handleLoginModalClose = () => {
    setLoginModalVisible(false);
  };

  return (
    <View>
      {/* Autre contenu de votre application */}
      <Text>Autre contenu de votre application</Text>

      <InscriptionModal
        visible={isLoginModalVisible}
        onClose={handleLoginModalClose}
        onLoginPress={handleButtonPress}
      />

      <LoginModal visible={isLoginModalVisible} onClose={handleLoginModalClose} />
    </View>
  );
}

export default Navigation;
