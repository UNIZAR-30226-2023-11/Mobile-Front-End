import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, Image } from 'react-native-elements';

//para exportarlo: import MonopolyCard from './components/MonopolyCard';

const styles = StyleSheet.create({
  cardContainer: {
    borderColor: 'red',
    borderWidth: 2,
  },
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
  textContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: 'gray',
  },
  description: {
    fontSize: 11,
    textAlign: 'left',
    marginTop: 10,
    whiteSpace: 'pre',
    justifyContent: 'center',
  },
  rectangleS: {
    backgroundColor: 'orange',
    height: 30,
    width: '100%',
  },
  rectangleB: {
    backgroundColor: 'blue',
    height: 30,
    width: '100%',
  },
  rectangleUno: {
    backgroundColor: '#e01a98',
    height: 30,
    width: '100%',
  },
  rectangleDos: {
    backgroundColor: '#8b4a9f',
    height: 30,
    width: '100%',
  },
  rectangleTres: {
    backgroundColor: '#4a34c5',
    height: 30,
    width: '100%',
  },
  rectangleCuatro: {
    backgroundColor: '#25a3e8',
    height: 30,
    width: '100%',
  },
  rectangleCinco: {
    backgroundColor: '#18ca0c',
    height: 30,
    width: '100%',
  },
  rectangleSeis: {
    backgroundColor: '#f6ee02',
    height: 30,
    width: '100%',
  },
  rectangleSiete: {
    backgroundColor: '#f06809',
    height: 30,
    width: '100%',
  },
  rectangleOcho: {
    backgroundColor: 'red',
    height: 30,
    width: '100%',
  },
});

const MonopolyCard = () => {
  return (
    <View style={styles.container}>
      <Card>
        
        <View style={styles.rectangle} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Propiedad</Text>
          <Text style={styles.subtitle}>Costo: $200</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eget mi commodo, eu tempor felis vestibulum.
          </Text>
        </View>
      </Card>
    </View>
  );
};


const Suerte = ({description, subtitle }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <View style={styles.rectangleS} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Suerte</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Card>
    </View>
  );
};

const Boletin = ({description }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <View style={styles.rectangleB} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Boletin informativo</Text>
          <Text style={styles.subtitle}>(juega esta carta inmediatamente)</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Card>
    </View>
  );
};

const Asignatura_1 = ({title, subtitle, description }) => {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.rectangleUno} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Card>
    </View>
  );
};
const Asignatura_2 = ({title, subtitle, description }) => {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.rectangleDos} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Card>
    </View>
  );
};
const Asignatura_3 = ({title, subtitle, description }) => {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.rectangleTres} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Card>
    </View>
  );
};
const Asignatura_4 = ({title, subtitle, description }) => {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.rectangleCuatro} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Card>
    </View>
  );
};
const Asignatura_5 = ({title, subtitle, description }) => {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.rectangleCinco} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Card>
    </View>
  );
};
const Asignatura_6 = ({title, subtitle, description }) => {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.rectangleSeis} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Card>
    </View>
  );
};
const Asignatura_7 = ({title, subtitle, description }) => {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.rectangleSiete} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Card>
    </View>
  );
};
const Asignatura_8 = ({title, subtitle, description }) => {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.rectangleOcho} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Card>
    </View>
  );
};

const Asignatura_11 = () => {
  return (
    <Asignatura_1
      title="Programacion I"
      subtitle="Coste: 200€"
      description={`ALQUILERES 3\n
    1 CRÉDITO ..............13 \n
    2 CRÉDITOS ...........40 \n
    3 CRÉDITOS .........120 \n
    4 CRÉDITOS .........213 \n
    HOTEL .................333 \n
HIPOTECA 40 \n
      PRECIO CRÉDITO............67 \n
      PRECIO HOTEL.................67 \n
      `}
    />
  );
};
const Asignatura_12 = () => {
  return (
    <Asignatura_1
      title="Introducción a los Computadores"
      subtitle="Coste: 200€"
      description="Hipotecas..."
    />
  );
};
const Asignatura_21 = () => {
  return (
    <Asignatura_2
      title="Programacion II"
      subtitle="Coste: 200€"
      description="Hipotecas..."
    />
  );
};
const Asignatura_22 = () => {
  return (
    <Asignatura_2
      title="Física y electrónica"
      subtitle="Coste: 200€"
      description="Hipotecas..."
    />
  );
};
const Asignatura_23 = () => {
  return (
    <Asignatura_2
      title="Arquitectura y Organización de Computadores I" 
      subtitle="Coste: 200€"
      description="Hipotecas..."
    />
  );
};
const Asignatura_31 = () => {
  return (
    <Asignatura_3
      title="Sistemas operativos" 
      subtitle="Coste: 200€"
      description="Hipotecas..."
    />
  );
};
const Asignatura_32 = () => {
  return (
    <Asignatura_3
      title="Estructuras de datos y algoritmos" 
      subtitle="Coste: 200€"
      description="Hipotecas..."
    />
  );
};
const Asignatura_33 = () => {
  return (
    <Asignatura_3
      title="Redes de computadores" 
      subtitle="Coste: 200€"
      description="Hipotecas..."
    />
  );
};
const Asignatura_41 = () => {
  return (
    <Asignatura_4
      title="Tecnología de la Programación" 
      subtitle="Coste: 200€"
      description="Hipotecas..."
    />
  );
};
const Asignatura_42 = () => {
  return (
    <Asignatura_4
      title="Interacción Persona Ordenador" 
      subtitle="Coste: 200€"
      description="Hipotecas..."
    />
  );
};
const Asignatura_43 = () => {
  return (
    <Asignatura_4
      title="Arquitectura y Organización de Computadores II"  
      subtitle="Coste: 200€"
      description="Hipotecas..."
    />
  );
};
const Asignatura_51 = () => {
  return (
    <Asignatura_5
      title="Inteliencia Artificial"  
      subtitle="Coste: 200€"
      description="Hipotecas..."
    />
  );
};
const Asignatura_52 = () => {
  return (
    <Asignatura_5
      title="Sistemas Distribuidos"  
      subtitle="Coste: 200€"
      description="Hipotecas..."
    />
  );
};
const Asignatura_53 = () => {
  return (
    <Asignatura_5
      title="Proyecto Hardware"  
      subtitle="Coste: 200€"
      description="Hipotecas..."
    />
  );
};
const Asignatura_61 = () => {
  return (
    <Asignatura_6
      title="Sistemas de Información II"    
      subtitle="Coste: 200€"
      description="Hipotecas..."
    />
  );
};
const Asignatura_62 = () => {
  return (
    <Asignatura_6
      title="Procesadores del Lenguaje"  
      subtitle="Coste: 200€"
      description="Hipotecas..."
    />
  );
};
const Asignatura_63 = () => {
  return (
    <Asignatura_6
      title="Proyecto Software"  
      subtitle="Coste: 200€"
      description="Hipotecas..."
    />
  );
};
const Asignatura_71 = () => {
  return (
    <Asignatura_7
      title="Robótica"  
      subtitle="Coste: 200€"
      description="Hipotecas..."
    />
  );
};
const Asignatura_72 = () => {
  return (
    <Asignatura_7
      title="Sistemas y Tecnologías Web"     
      subtitle="Coste: 200€"
      description="Hipotecas..."
    />
  );
};
const Asignatura_73 = () => {
  return (
    <Asignatura_7
      title="Seguridad Informática"  
      subtitle="Coste: 200€"
      description="Hipotecas..."
    />
  );
};
const Asignatura_81 = () => {
  return (
    <Asignatura_8
      title="Prácticas en Empresa"  
      subtitle="Coste: 200€"
      description="Hipotecas..."
    />
  );
};
const Asignatura_82 = () => {
  return (
    <Asignatura_8
      title="TFG"  
      subtitle="Coste: 200€"
      description="Hipotecas..."
    />
  );
};


const Boletin_1 = () => {
  return (
    <Boletin
      description="Has ido a la cafetería, paga 30 euros, has invitado a almorzar a tus amigos."
    />
  );
};
const Boletin_2 = () => {
  return (
    <Boletin
      description="Te toca comer en la cafetería, paga 10 euros por el menú."
    />
  );
};
const Boletin_3 = () => {
  return (
    <Boletin
      description="Vuestro equipo de proyecto software no habéis dormido bien esta noche, paga 10 euros por una ronda de café de avellanas. "
    />
  );
};
const Boletin_4 = () => {
  return (
    <Boletin
      description="Tienes apetito de chocobombs y colacao, paga 5 euros en la máquina."
    />
  );
};
const Boletin_5 = () => {
  return (
    <Boletin
      description="Paga 30 euros por el seguro universitario."
    />
  );
};
const Boletin_6 = () => {
  return (
    <Boletin
      description="En tu cumpleaños recibes 10 euros de cada jugador."
    />
  );
};
const Boletin_7 = () => {
  return (
    <Boletin
      description="Ve a septiembre. ve directamente sin pasar por la casilla de salida y sin cobrar los 200 euros."
    />
  );
};
const Boletin_8 = () => {
  return (
    <Boletin
      description="La universidad te devuelve 100 euros por un error en los cobros."
    />
  );
};
const Boletin_9 = () => {
  return (
    <Boletin
      description="Pagas 400 euros por obtener el título del grado."
    />
  );
};
const Boletin_10 = () => {
  return (
    <Boletin
      description="Has ido a revisión y te han aprobado, por lo que te libras de septiembre. Guarda esta carta y úsala cuando quieras escapar de septiembre."
    />
  );
};
const Boletin_11 = () => {
  return (
    <Boletin
      description="Te han dado la beca, cobra 1000 euros. "
    />
  );
};
const Boletin_12 = () => {
  return (
    <Boletin
      description="Te has dejado las luces del coche encendidas en el parking y te has quedado sin batería. Paga 20 euros para llamar a un taxi para que te encienda el coche."
    />
  );
};
const Boletin_13 = () => {
  return (
    <Boletin
      description="Es tu paso de ecuador, paga 75 euros por asistir al evento."
    />
  );
};
const Boletin_14 = () => {
  return (
    <Boletin
      description="Has ganado el hackaton, cobra 300 euros."
    />
  );
};
const Boletin_15 = () => {
  return (
    <Boletin
      description="Colocate en la casilla de salida."
    />
  );
};
const Boletin_16 = () => {
  return (
    <Boletin
      description="Paga 50 euros o saca una tarjeta de suerte."
    />
  );
};

const Suerte_1 = () => {
  return (
    <Suerte
      description="Has ido a revisión y te han aprobado, por lo que te libras de septiembre. Guarda esta carta y úsala cuando quieras escapar de septiembre."
    />
  );
};
const Suerte_2 = () => {
  return (
    <Suerte
      description="La inspección de créditos te obliga a pagar matrículas, paga 40 euros por aumento de 2 créditos y paga 115 por cada aumento de 14 créditos."
    />
  );
};
const Suerte_3 = () => {
  return (
    <Suerte
      description="Avanza hasta la casilla de Proyecto Software. Si pasas por la casilla de salida cobra 200 euros."
    />
  );
};
const Suerte_4 = () => {
  return (
    <Suerte
      description="Es san pepe, ve a la casilla correspondiente. Si pasas por la salida cobra 200 euros."
    />
  );
};
const Suerte_5 = () => {
  return (
    <Suerte
      description="Ve al TFG."         
    />
  );
};
const Suerte_6 = () => {
  return (
    <Suerte
      description="Colocate en la casilla de salida. Cobra 200 euros."         
    />
  );
};
const Suerte_7 = () => {
  return (
    <Suerte
      description="Retrocede 3 casillas."         
    />
  );
};
const Suerte_8 = () => {
  return (
    <Suerte
      description="Has sacado matrícula de honor. Cobra 100 euros."         
    />
  );
};
const Suerte_9 = () => {
  return (
    <Suerte
      description="Has entregado el proyecto dos días tarde. Paga 20 euros."         
    />
  );
};
const Suerte_10 = () => {
  return (
    <Suerte
      description=" La universidad recompensa tu esfuerzo con 50 euros."         
    />
  );
};
const Suerte_11 = () => {
  return (
    <Suerte
      description=" El conserje te ha pillado usando un ladrón, paga 100 euros a la universidad."         
    />
  );
};
const Suerte_12 = () => {
  return (
    <Suerte
      description="Te han detectado plagio, pierdes tu convocatoria, ve a Recuperaciones sin cobrar por pasar por la casilla de salida."         
    />
  );
};
const Suerte_13 = () => {
  return (
    <Suerte
      description=" Avanza hasta la casilla de salida. Cobra 200 euros."         
    />
  );
};
const Suerte_14 = () => {
  return (
    <Suerte
      description="Retrocede hasta la casilla de ahorro de enchufes. Si pasas por la casilla de salida, cobra 200 euros."         
    />
  );
};
const Suerte_15 = () => {
  return (
    <Suerte
      description="Es tu cumpleaños. Todos los jugadores te dan 10 euros."         
    />
  );
};
const Suerte_16 = () => {
  return (
    <Suerte
      description="Has ganado un sorteo del paso de Ecuador. Cobra 100 euros."         
    />
  );
};


export {MonopolyCard, Boletin_1, Boletin_2, Boletin_3, Boletin_4, Boletin_5, Boletin_6, Boletin_7, Boletin_8,
  Boletin_9, Boletin_10, Boletin_11, Boletin_12, Boletin_13, Boletin_14, Boletin_15, Boletin_16,
  Suerte_1, Suerte_2, Suerte_3, Suerte_4, Suerte_5, Suerte_6, Suerte_7, 
  Suerte_8, Suerte_9, Suerte_10, Suerte_11, Suerte_12, Suerte_13, Suerte_14, Suerte_15, Suerte_16,
  Asignatura_11, Asignatura_12, Asignatura_21, Asignatura_22, Asignatura_23, Asignatura_31, Asignatura_32, Asignatura_33,
  Asignatura_41, Asignatura_42, Asignatura_43, Asignatura_51, Asignatura_52, Asignatura_53, Asignatura_61, Asignatura_62, 
  Asignatura_63, Asignatura_71, Asignatura_72, Asignatura_73, Asignatura_81, Asignatura_82 };
