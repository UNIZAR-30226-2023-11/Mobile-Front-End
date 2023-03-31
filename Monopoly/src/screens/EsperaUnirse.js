import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Select,NativeBaseProvider, ScrollView  } from "native-base";
import StyledText  from "../components/StyledText";
import StyledButton from "../components/StyledButton";

const styles = StyleSheet.create({
    titulo:{
        marginTop:'10%',
        marginLeft:'35%',
        flex:1,
    },
    boxjugadores: {
        flex:6,
        justifyContent:'flex-start',
        marginLeft:'10%',
        width: '80%',
        height: '50%',
        borderColor:'#000000',
        borderWidth: 1
    }
})

export default function CrearSalaScreen({ navigation }) {

    const [players, setPlayers] = React.useState("");
    const [money, setMoney] = React.useState("");
    return (
        <NativeBaseProvider>
        <View style={{flex:1, flexDirection:'column'}}>
            <StyledText style={styles.titulo} big bold>Partida #00001</StyledText>
            <View style={{marginTop:'8%', flex:1, flexDirection:'row', justifyContent: 'center'}}>
                <StyledText style={{justifyContent: 'center', marginLeft:'8%', marginTop:'3%'}}>Esperando a que el anfitrión inicie la partida.</StyledText>
                <View style={{marginLeft:'7%'}}>
                </View>

            </View>
            <StyledText style={styles.titulo} big bold>JUGADORES</StyledText>
            <View style={styles.boxjugadores}>
            <ScrollView>
            <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar sapien vel arcu feugiat, at rutrum libero varius. Aenean quis accumsan enim, eu auctor augue. Maecenas non purus non lacus tempor porttitor nec at mi. Nam mattis vitae leo eget iaculis. Aenean luctus tempor odio eget ultrices. Integer viverra luctus erat, ut lobortis nibh placerat ut. Duis ac orci rutrum, cursus dui suscipit, rhoncus lacus. In sed molestie mi. Donec ullamcorper commodo suscipit. In condimentum, magna non interdum luctus, sapien lacus pellentesque leo, sed luctus nibh ex sed neque. Quisque sed ex diam. Suspendisse potenti. Nullam quam neque, pellentesque eget tristique vitae, accumsan vitae massa. Proin viverra odio id justo pretium hendrerit. Nulla varius molestie ultricies. Donec vehicula ut orci eu imperdiet.

                Nullam metus enim, ultrices a eros viverra, dapibus tempor massa. Quisque sit amet suscipit enim. Sed consectetur nisl nec tellus volutpat dignissim. Suspendisse bibendum congue elit, ac elementum mi pretium ac. Sed pretium a nisl eu feugiat. Ut at erat ex. Vestibulum neque ligula, convallis quis condimentum elementum, blandit vel elit. Sed libero sapien, ultrices eget faucibus euismod, tincidunt vestibulum elit. Aliquam scelerisque tellus eu ligula feugiat, nec consectetur lacus egestas.

                Fusce dignissim vitae eros ac eleifend. Curabitur aliquam dignissim augue eget suscipit. Vestibulum et mi orci. Fusce venenatis ultricies aliquam. Quisque non dolor condimentum, lobortis enim vitae, aliquet nisl. Phasellus mollis urna sit amet justo viverra bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam sagittis tellus sed fringilla rutrum. Nullam in vehicula velit. Aenean non scelerisque velit.

                Aenean ultrices, mauris vel luctus aliquet, orci ex pretium est, et accumsan enim quam vel nibh. Sed in rhoncus magna, vel fringilla enim. Aenean eleifend volutpat ante, in varius lectus tempor lobortis. Ut enim nunc, auctor ut egestas ut, porttitor et libero. Sed quis nisi scelerisque, consectetur nisi eleifend, consectetur mi. Nulla quis elit pretium, pharetra erat accumsan, varius lectus. Maecenas quis ex vitae tellus dignissim egestas sit amet sit amet sapien. Nam condimentum nibh ac elit placerat faucibus.

                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum viverra nulla justo. Quisque dignissim nulla consectetur, aliquam nulla tristique, facilisis nibh. Etiam dignissim aliquam massa id pharetra. Duis rhoncus ligula nec dolor imperdiet, consequat tincidunt augue bibendum. Suspendisse non sagittis elit, dignissim interdum diam. Curabitur in porttitor sapien, in vulputate elit. Sed consectetur, ipsum id tincidunt volutpat, turpis mi volutpat mi, sed maximus mi odio vel erat. Ut hendrerit mi quis orci scelerisque, ac posuere turpis consectetur. Aenean euismod libero in congue scelerisque. Vivamus malesuada lorem at porta pulvinar.
            </Text>
            </ScrollView>
            </View>
            <View style={{flex:1}}></View>

        </View>
        </NativeBaseProvider>
    );
}
