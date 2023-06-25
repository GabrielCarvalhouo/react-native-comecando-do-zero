import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import Texto from './Texto';

export default function Botao({ children }) {

    return (
    <TouchableOpacity style={styles.botao} onPress={() => {}}>
      <Texto style={styles.textoBotao}>{ children }</Texto>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,
      },
      textoBotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
      },
    })
