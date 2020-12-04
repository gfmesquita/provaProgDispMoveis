import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return ( 
	<View style={{flex: 1}}>
      <View style={{
        backgroundColor: '#a503fc',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
        }}>
        <Text style={styles.nome}>Gabriel Fungache Mesquita - RA: 18306112</Text>
      </View>
      <View style={{
        backgroundColor: '#fff',
        flex: 7,
        justifyContent: 'center',
        }}>
        <View style={styles.bodyContainer}>
          <View>
            <Text style={styles.titulo}>Itens do pedido:</Text>
            <View style={styles.item}>
              <Text style={styles.textoItens}>1x Pizza 4 kejo</Text>
              <Text style={styles.textoItens}>1x Coca 2L</Text>
            </View>
          </View>
          <View>
            <Text style={styles.titulo}>Dados do pagamento:</Text>
              <View style={styles.item}>
                <Text style={styles.textoItens}>Cartão de Crédito</Text>
                <Text style={styles.textoItens}>Valor do pedido: R$ 67,00</Text>
                <Text style={styles.textoItens}>Taxa de entrega: R$ 13,00</Text>
              <Text style={styles.textoItens}>Valor Total: R$ 80,00</Text>
          </View>
          <View>
            <Text style={styles.titulo}>Endereço:</Text>
            <View style={styles.entrega}>
              <Text style={styles.textoItens}>Rua Teste n° 10</Text>
              <Text style={styles.textoItens}>Tempo de entrega: 1h</Text>
              <Text style={styles.textoItens}>Tipo de entrega: MotoBoy</Text>
             </View>
           </View>
          </View>
        </View>
      </View>
    </View>
    );
}

const styles = StyleSheet.create({
    item: {
      padding: 10,
      margin: 10,
      borderRadius: 10,
    },
    entrega: {
      padding: 10,
      margin: 10,
      borderRadius: 10,
    },
  
    titulo: {
      color: '#000',
      fontSize: 20,
      marginLeft: 10,
      marginTop: 5,
    },
    bodyContainer: {
      flex: 1,
    },
    nome: {
      color: '#fff',
      fontSize: 15,
    },
    textoItens: {
      color: '#000',
      fontSize: 17,
    },
    textoCorpo: {
      color: '#000',
      fontSize: 17,
    }
   });