import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';
 import {Picker} from '@react-native-picker/picker';
 import Navigation from  './Navigation';
 import LoginModal from './LoginModal';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



function InscriptionModal({ visible, onClose, onLoginPress }) {

 

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
   const [selectedColor, setSelectedColor] = useState(''); // Définissez initialement le texte du placeholder

  const [defaultText, setDefaultText] = useState('Je veux');

  const handleColorChange = (itemValue) => {
    setSelectedColor(itemValue);
    setDefaultText(itemValue); // Mettez à jour le texte par défaut avec la valeur sélectionnée
  };

    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Mot de passe:', password);
        // Gérez la logique de connexion ici
        // Vous pouvez utiliser les valeurs de 'email' et 'password' pour effectuer l'authentification
    };

  

     

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={styles.container}>
                <View style={styles.modalContent}>
                    <Text style={styles.title}>Inscription</Text>
                  
  <View style={styles.pickerContainer}>
    
      <Picker
        selectedValue={selectedColor}
        onValueChange={handleColorChange}
        style={styles.picker}
        itemStyle={styles.pickerItem} // Style pour les éléments de la liste déroulante
         dropdownIconColor='#2597A2' // Coul
      >
        <Picker.Item label="Vous êtes?" value="" />
        <Picker.Item label="Chauffeur" value="Chauffeur" />
        <Picker.Item label="Particulier" value="Particulier" />
       
        {/* Ajoutez d'autres options de couleurs ici */}
      </Picker>
  
    </View>
                   
    <Text> </Text>
                    
     <View style={styles.centeredButtonContainer}>               
    <TouchableOpacity
     style={styles.actionsButton} onPress={handleLogin} >
      <Text style={styles.buttonLabel}>Suivant</Text>
    </TouchableOpacity>

    <View style={styles.align}>
    <Text style={styles.actions}> Vous avez deja un compte? </Text>
    
    <TouchableOpacity
     style={styles.actionsButton1} onPress={onLoginPress} >
      <Text style={styles.buttonLabel1}>Connectez-vous</Text>
      <LoginModal visible={isLoginModalVisible} onClose={handleLoginModalClose} />
    </TouchableOpacity>
    </View>
    </View>

    
  </View>
  
</View>
</Modal>
 );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fond semi-transparent pour couvrir l'écran principal
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        width: windowWidth - 40, // Largeur du modal (10 de marge de chaque côté)
        maxHeight: windowHeight - 80, // Hauteur maximale du modal (40 de marge en haut et en bas)
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center', // Pour centrer le texte horizontalement
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'blue', // Couleur de la bordure bleue
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        borderRadius: 5, // Arrondir les bords

    },
    buttonLabel3: {
        color: 'white', // Couleur du texte du bouton
        fontSize: 16, // Taille de police du texte du bouton
      },
      button2: {
        backgroundColor: '#2597A2', // Couleur de fond du bouton
        borderRadius: 10, // Bordures arrondies du bouton
        paddingVertical: 10, // Espacement vertical à l'intérieur du bouton
        alignItems: 'center', // Centrer le contenu horizontalement
        justifyContent: 'center', // Centrer le contenu verticalement
      },

      styleens: {
        flexDirection:'row'
      },

     actionsButton: {
    width:100,
    alignItems: 'center', // Centrer le contenu horizontalement
    borderColor:  '#2597A2',
    backgroundColor: '#2597A2', // Couleur de la bordure rouge
    borderWidth: 1, // Largeur de la bordure
    borderRadius: 5, // Arrondir les bords
     
  },

  actions:{
   color:'black',
  },

  actionsButto:{
    width: 100 ,
    backgroundColor: '#2597A2', 
    alignItems: 'center', // Centrer le contenu horizontalement
    marginTop:0,

  },
  centeredButtonContainer: {
  alignItems: 'center',
 // Vous pouvez ajuster la marge supérieure selon vos besoins
},

  buttonLabel:{
    color:'white',
     alignItems: 'center', // Centrer le contenu horizontalement
margin: 10,
  },

 pickerContainer: {
    borderColor: '#2597A2', // Couleur de la bordure rouge
    borderWidth: 1, // Largeur de la bordure
    borderRadius: 5, // Arrondir les bords
    marginBottom: 10, // Marge en bas pour l'espacement
  },
  picker: {
    color:'#2597A2',
    height: 40, // Hauteur de la liste déroulante
    width: '100%', // Largeur de la liste déroulante
  },
 pickerItem: {
    color: 'black', // Couleur du texte des éléments de la liste déroulante
  },
picker1:{
  color:'black',
},

buttonLabel1:{
    color:'#2597A2',
    
  },

  align:{
flexDirection: 'row',
},

actionsButton1: {
    width:100,
    alignItems: 'center', // Centrer le contenu horizontalement
        
  },

});

export default InscriptionModal;
