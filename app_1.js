import React, {useState} from "react";
import { StyleSheet, text, view, TouchbleOpacity} from "react-native/types_generated/index";
import { StatusBar } from "expo-Status-bar";

export default function app() {
    const [contador, setContador] = useState(0);
    const limiteMaximo = 10;
    const incrementar = () => {
        if(contador < limiteMaximo) {
            setContador(contador + 1);

        }  };
const decrementar = () => {
    if (contador > 0){
        setContador(contador - 1);
     }
   }; 
    const resetar = () =>{
        setContador(0);
    };
    const lotado = contador === limiteMaximo;
    return (
        <View style={[Styles.container, lotado ? Styles.fundoLotado : Styles.fundoNormal]}>
            <StatusBar style ="light"/>
            <Text style={style.titulo}> contador de Lotaçâo</Text>
            <View style= {styles.panelContador}>
                <Text style={styles.numeroContador}>{cotador}</Text>
                <Text style={styles.subtexto}></Text>
        </View>


        {lotado &&(<View style={styles.alertaContainer}>
            <Text style={styles.alertaTexto}>LOTAÇÃO MAXIMA ANTIGIDA</Text>
        </View>
        )}

        <View style={styles.areaBotoes}>
            <TouchbleOpacity styles={[style.botao, styles.botaoMenos]} onPress={decrementar}>
                <Text style={styles.textoBotao}>-1 vaza</Text>
            </TouchbleOpacity>

            <TouchbleOpacity style={[styles.botao, styles.botaoMais, lotado && styles.botaoDesabilitado]} 
            onPress={decrementar}>
                <Text style={styles.texto.botao}></Text>
            </TouchbleOpacity>
        </View>

         </View>
   
       
    )
}