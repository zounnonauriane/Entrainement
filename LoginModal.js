import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet, Dimensions,TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function LoginModal({ visible, onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                    <Text style={styles.title}>Connexion</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email Personnel"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mot de passe"
                        secureTextEntry
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                    />
                                  
     <View style={styles.centeredButtonContainer}>               
    <TouchableOpacity 
     style={styles.actionsButton} onPress={handleLogin} >
      <Text style={styles.buttonLabel}>Connexion</Text>
    </TouchableOpacity >
    <View style={styles.align}>
    <Text style={styles.actions}> Vous n'aviez pas de compte? </Text>

    <TouchableOpacity
     style={styles.actionsButton1} onPress={handleLogin} >
      <Text style={styles.buttonLabel1}>Inscrivez-vous</Text>
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

     actionsButtons: {
    flexDirection: 'row',
        
    justifyContent: 'space-between',
  },

   centeredButtonContainer: {
  alignItems: 'center',
 // Vous pouvez ajuster la marge supérieure selon vos besoins
},

 actionsButton: {
    width:100,
    alignItems: 'center', // Centrer le contenu horizontalement
    borderColor:  '#2597A2',
    backgroundColor: '#2597A2', // Couleur de la bordure rouge
    borderWidth: 1, // Largeur de la bordure
    borderRadius: 5, // Arrondir les bords
     
  },

  actionsButton1: {
    width:100,
    alignItems: 'center', // Centrer le contenu horizontalement
    
     
  },

  buttonLabel:{
    color:'',
     alignItems: 'center', // Centrer le contenu horizontalement
margin: 10,
  },

buttonLabel1:{
    color:'#2597A2',
    
  },

  align:{
flexDirection: 'row',
},


  actions:{
   color:'black',
  },

});

export default LoginModal;
