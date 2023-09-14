import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';
import React, { useState } from 'react';
import LoginModal from './LoginModal';
import InscriptionModal from './InscriptionModal';
import image from './image.jpg';

const App = ({ navigation }) =>  {
 const [isLoginModalVisible, setLoginModalVisible] = useState(false);

  const handleButtonPress = () => {
    // Action lorsque le bouton est pressé
    // Afficher le modal de connexion lorsque le bouton est pressé
    setLoginModalVisible(true);
  };
  const handleLoginModalClose = () => {
    // Cacher le modal de connexion lorsque l'utilisateur ferme le modal
    setLoginModalVisible(false);
  };


  const [isInscriptionModalVisible, setInscriptionModalVisible] = useState(false);

  const handleButtonInscriptionPress = () => {
    // Action lorsque le bouton est pressé
    // Afficher le modal de connexion lorsque le bouton est pressé
    setInscriptionModalVisible(true);
  };
  const handleInscriptionModalClose = () => {
    // Cacher le modal de connexion lorsque l'utilisateur ferme le modal
    setInscriptionModalVisible(false);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        
      </Text>
      <Image style={styles.logo} source={require('./image.jpg')} />
     <View style={styles.texte}>
      <Text style={styles.texte1} > ECOZEM</Text>
      <Text style={styles.texte2} >Services de transport</Text>
      <View style={styles.ensemble}>
          <Text style={styles.texte3} >électrique </Text> 
          <Text style={styles.texte4}> non polluant </Text>
      </View> 

      <View style={styles.old}>
          <Text style={styles.texte5} >Réduisez votre impact sur l'environnement </Text> 
          <Text style={styles.texte5} >et profitez d'un mode de transport plus durable </Text> 
     </View> 
       <View style={styles.actionsButtons}>
        <TouchableOpacity
          style={styles.button1}
          onPress={handleButtonInscriptionPress}
        >
          <Text style={styles.buttonLabel1}>Inscription</Text>
           <InscriptionModal visible={isInscriptionModalVisible} onClose={handleInscriptionModalClose} />
        </TouchableOpacity>

        
        <TouchableOpacity
          style={styles.button2}
          onPress={handleButtonPress}
        >
          <Text style={styles.buttonLabel2}>Connexion</Text>
        </TouchableOpacity>
        <LoginModal visible={isLoginModalVisible} onClose={handleLoginModalClose} />
      </View>
    </View>
     

    </View>

     
  );

 
}

const styles = StyleSheet.create({
  container : {
    
    alignItems: 'center',
    justifyContent: 'center',
  
  },

buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

   webButtonContainer: {
    marginHorizontal: 20, // Augmenter la marge pour la version web
  },
  webSpacer: {
    width: 20,
  },

  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  logo: {
 // flex:1,
    width: '100%',
    height: 300
  },
  texte: {
     backgroundColor:'#2597A2',
     width: '100%',
     height: 700,
  },
  texte1:{
    color: 'white',
    fontSize:20,
    paddingLeft:20,
    fontWeight: 'bold',
    paddingTop:20,
  },
  texte2:{
    color: 'white',
    fontSize:20,
    paddingLeft:25,
    fontWeight: 'bold',
  },
   texte3:{
    color: 'yellow',
    fontSize:20,
    paddingLeft:25,
    fontWeight: 'bold',
  },

  texte4:{
    color: 'white',
    fontSize:20,
    fontWeight: 'bold',
    
  },

  ensemble:{
    flexDirection: 'row',
  },

old:{
  paddingTop: 50,
  paddingLeft:25,
  
},

texte5:{
  color: 'white',
},

button:{
  paddingLeft:5,
  paddingTop:50,
  borderRadius:10,
 justifyContent: "center",
 flexDirection: 'row',
 marginHorizontal: 10,
 paddingVertical: 10,
 paddingHorizontal: 20,
},

spaceBetween: {
    marginLeft: 20, // Espace à droite du deuxième bouton (ajustez selon vos besoins)
  },

actionsButtons: {
    flexDirection: 'row',
    marginTop: 100,// disposition vers le haut
    paddingBottom: 300,//remplissage
    justifyContent: 'space-between',


  },
  button1: {
    flex: 1, // Pour que le bouton occupe la moitié de l'espace disponible
    marginHorizontal: 15, // Espace horizontal entre les boutons
    backgroundColor: 'transparent', // Couleur de fond du bouton
    borderRadius: 10, // Bordures arrondies du bouton
    paddingVertical: 5, // Espacement vertical à l'intérieur du bouton
    alignItems: 'center', // Centrer le contenu horizontalement
    justifyContent: 'center', // Centrer le contenu verticalement
    borderColor: 'white',
    borderWidth: 2,
  },
  button2: {
    flex: 1, // Pour que le bouton occupe la moitié de l'espace disponible
    marginHorizontal: 15, // Espace horizontal entre les boutons
    backgroundColor: 'white', // Couleur de fond du bouton
    borderRadius: 10, // Bordures arrondies du bouton
    paddingVertical: 10, // Espacement vertical à l'intérieur du bouton
    alignItems: 'center', // Centrer le contenu horizontalement
    justifyContent: 'center', // Centrer le contenu verticalement
  },
  buttonLabel1: {
    color: 'white', // Couleur du texte du bouton
    fontSize: 16, // Taille de police du texte du bouton
  },
  buttonLabel2: {
    color: '#2597A2', // Couleur du texte du bouton
    fontSize: 16, // Taille de police du texte du bouton
  },

});

export default App;