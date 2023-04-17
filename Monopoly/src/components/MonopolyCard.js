import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Text, Image } from 'react-native-elements';

//para importarlo: import MonopolyCard from './components/MonopolyCard';

//TODOS LOS PRECIOS HABRA QUE SACARLOS DE LA BASE DE DATOS

const styles = StyleSheet.create({
  cardContainer: {
    borderColor: 'red',
    borderWidth: 2,
  },
  container: {
    flex: 1,
    height:'40%',
    width:'150%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  image: {
    height: 130,
    width: 130,
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
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
          <Text style={styles.subtitle}>Coste: $200</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor lorem eget mi commodo, eu tempor felis vestibulum.
          </Text>
        </View>
      </Card>
    </View>
  );
};
export const Evento = ({title, coste, description, imageSource }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <View style={styles.imageView} >
        <Image source={imageSource} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Coste: {coste}€</Text>
          <Text style={styles.description}>{description}</Text>
          </View>
      </Card>
    </View>
  );
};
export const Recurso = ({title, coste, description, imageSource }) => {
  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <View style={styles.imageView}>
          <Image source={imageSource} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Coste: {coste}€</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Card>
    </View>
  );
};
const Carta_8_0 = () => {
  return (
    <Recurso
      title={`Ahorro energético\n calefacción`}
      description={`Si posees una carta de compañías 
de servicio público, el alquiler es 10\nveces el número salido en los dados\n
Si posees dos cartas de compañías 
de servicio público, el alquiler es 10\nveces el número salido en los dados\n
        Valor de la Hipoteca 100€ \n`}
    imageSource={require('../../assets/calefaccion.png')}
    />
  );
};
const Carta_0_8 = () => {
  return (
    <Recurso
      title={`Ahorro energético\n enchufes`}
      description={`Si posees una carta de compañías 
de servicio público, el alquiler es 10\nveces el número salido en los dados\n
Si posees dos cartas de compañías 
de servicio público, el alquiler es 10\nveces el número salido en los dados\n
        Valor de la Hipoteca 100€ \n`}
    imageSource={require('../../assets/enchufe.png')}
    />
  );
};
//-------------------------------------------------------------
const Carta_5_10 = () => {
  return (
    <Evento
      title="San Braulio"
      description={`ALQUILER 3€\n
    SI TIENES 2 EVENTOS......20€ \n
    SI TIENES 3 EVENTOS......30 € \n
    SI TIENES 4 EVENTOS......60 € \n`}
    imageSource={require('../../assets/bob.png')}
    />
  );
};
const Carta_0_5 = () => {
  return (
    <Evento
      title="Paso de Ecuador"
      description={`ALQUILER 3€\n
    SI TIENES 2 EVENTOS......20€ \n
    SI TIENES 3 EVENTOS......30 € \n
    SI TIENES 4 EVENTOS......60 € \n`}
    imageSource={require('../../assets/bob.png')}
    />
  );
};
const Carta_5_0 = () => {
  return (
    <Evento
      title="San Pepe"
      description={`ALQUILER 3€\n
    SI TIENES 2 EVENTOS......20€ \n
    SI TIENES 3 EVENTOS......30 € \n
    SI TIENES 4 EVENTOS......60 € \n`}
    imageSource={require('../../assets/bob.png')}
    />
  );
};
const Carta_10_5 = () => {
  return (
    <Evento
      title="Fin de Carrera"
      description={`ALQUILER 3€\n
    SI TIENES 2 EVENTOS......20€ \n
    SI TIENES 3 EVENTOS......30 € \n
    SI TIENES 4 EVENTOS......60 € \n`}
    imageSource={require('../../assets/bob.png')}
    />
  );
};
//--------------------------------------------------------------
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
export const Asignatura_1 = ({title, coste, description }) => {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.rectangleUno} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Coste: {coste}€</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Card>
    </View>
  );
};

export const Asignatura_2 = ({title, coste, description }) => {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.rectangleDos} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Coste: {coste}€</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Card>
    </View>
  );
};

export const Asignatura_3 = ({title, coste, description }) => {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.rectangleTres} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Coste: {coste}€</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Card>
    </View>
  );
};

export const Asignatura_4 = ({title, coste, description }) => {
  return (
    <View style={styles.container}>
      <Card >
        <View style={styles.rectangleCuatro} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Coste: {coste}€</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Card>
    </View>
  );
};

export const Asignatura_5 = ({title, coste, description }) => {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.rectangleCinco} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Coste: {coste}€</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Card>
    </View>
  );
};

export const Asignatura_6 = ({title, coste, description }) => {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.rectangleSeis} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Coste: {coste}€</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Card>
    </View>
  );
};

export const Asignatura_7 = ({title, coste, description }) => {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.rectangleSiete} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Coste: {coste}€</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Card>
    </View>
  );
};

export const Asignatura_8 = ({title, coste, description, grupo }) => {
  return (
    <View style={styles.container}>
      <Card>
        <View style={styles.rectangleOcho} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Coste: {coste}€</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </Card>
    </View>
  );
};
//---------------------------------------------------------------
const Carta_9_10 = () => {
  return (
    <Asignatura_1
      title="Programacion I"
      subtitle="Coste: 80€"
      description={`ALQUILERES 3€\n
    1 CRÉDITO ........................13€ \n
    2 CRÉDITOS .....................40€ \n
    3 CRÉDITOS ...................120€ \n
    4 CRÉDITOS ...................213€ \n
    HOTEL ............................333€ \n
    HIPOTECA ......................... 40€ \n
    PRECIO CRÉDITO..............67€ \n`}
    />
  );
};
const Carta_7_10 = () => {
  return (
    <Asignatura_1
      title={`Introducción a los\n Computadores`}
      coste={80}
      description={`ALQUILERES 5€\n
      1 CRÉDITO ........................27€ \n
      2 CRÉDITOS .....................80€ \n
      3 CRÉDITOS ...................240€ \n
      4 CRÉDITOS ...................427€ \n
      HOTEL ............................600€ \n
HIPOTECA 40€ \n
      PRECIO CRÉDITO..............67€ \n`}
    />
  );
};
const Carta_4_10 = () => {
  return (
    <Asignatura_2
      title="Programacion II"
      subtitle="Coste: 133€"
      description={`ALQUILERES 8€\n
      1 CRÉDITO ........................40€ \n
      2 CRÉDITOS .....................120€ \n
      3 CRÉDITOS ...................360€ \n
      4 CRÉDITOS ...................533€ \n
      HOTEL ............................533€ \n
HIPOTECA 40€ \n
      PRECIO CRÉDITO..............67€ \n`}
    />
  );
};
const Carta_2_10 = () => {
  return (
    <Asignatura_2
      title="Física y electrónica"
      subtitle="Coste: 133€"
      description={`ALQUILERES 8€\n
      1 CRÉDITO ........................40€ \n
      2 CRÉDITOS .....................120€ \n
      3 CRÉDITOS ...................360€ \n
      4 CRÉDITOS ...................533€ \n
      HOTEL ............................533€ \n
HIPOTECA 40€ \n
      PRECIO CRÉDITO..............67€ \n`}
    />
  );
};
const Carta_1_10 = () => {
  return (
    <Asignatura_2
      title={`Arquitectura y\n Organización de\n Computadores I`} 
      subtitle="Coste: 160€"
      description={`ALQUILERES 11€\n
      1 CRÉDITO ........................53€ \n
      2 CRÉDITOS .....................133€ \n
      3 CRÉDITOS ...................400€ \n
      4 CRÉDITOS ...................600€ \n
      HOTEL ............................800€ \n
  HIPOTECA 80€ \n
      PRECIO CRÉDITO..............67€ \n`}
    />
  );
};
const Carta_0_9 = () => {
  return (
    <Asignatura_3
      title="Sistemas operativos" 
      subtitle="Coste: 187€"
      description={`ALQUILERES 13€\n
      1 CRÉDITO ........................67€ \n
      2 CRÉDITOS .....................200€ \n
      3 CRÉDITOS ...................600€ \n
      4 CRÉDITOS ...................833€ \n
      HOTEL ............................1000€ \n
HIPOTECA 93€ \n
      PRECIO CRÉDITO..............133€ \n`}
    />
  );
};
const Carta_0_7 = () => {
  return (
    <Asignatura_3
      title={`Estructuras de datos\n y algoritmos`}
      subtitle="Coste: 187€"
      description={`ALQUILERES 13€\n
      1 CRÉDITO ........................67€ \n
      2 CRÉDITOS .....................200€ \n
      3 CRÉDITOS ...................600€ \n
      4 CRÉDITOS ...................833€ \n
      HOTEL ............................1000€ \n
HIPOTECA 93€ \n
      PRECIO CRÉDITO..............133€ \n`}
    />
  );
};
const Carta_0_6 = () => {
  return (
    <Asignatura_3
      title="Redes de computadores" 
      subtitle="Coste: 213€"
      description={`ALQUILERES 16€\n
      1 CRÉDITO ........................80€ \n
      2 CRÉDITOS .....................240€ \n
      3 CRÉDITOS ...................667€ \n
      4 CRÉDITOS ...................933€ \n
      HOTEL ............................1200€ \n
HIPOTECA 107€ \n
      PRECIO CRÉDITO..............133€ \n`}
    />
  );
};
const Carta_0_4 = () => {
  return (
    <Asignatura_4
      title={`Tecnología de la\n Programación ` }
      subtitle="Coste: 240€"
      description={`ALQUILERES 19€\n
      1 CRÉDITO ........................93€ \n
      2 CRÉDITOS .....................100€ \n
      3 CRÉDITOS ...................600€ \n
      4 CRÉDITOS ...................833€ \n
      HOTEL ............................1000€ \n
    HIPOTECA 93€ \n
    AUMENTO CRÉDITOS  133€ \n`}
    />
  );
};
const Carta_0_2 = () => {
  return (
    <Asignatura_4
      title={`Interacción Persona\n Ordenador`}
      subtitle="Coste: 200€"
      description={`ALQUILERES 19€\n
      1 CRÉDITO ........................93€ \n
      2 CRÉDITOS .....................100€ \n
      3 CRÉDITOS ...................600€ \n
      4 CRÉDITOS ...................833€ \n
      HOTEL ............................1000€ \n
HIPOTECA 93€ \n
      PRECIO CRÉDITO..............133€ \n`}
    />
  );
};
const Carta_0_1 = () => {
  return (
    <Asignatura_4
      title={`Arquitectura y\n Organización de\n Computadores II`}
      subtitle="Coste: 200€"
      description={`ALQUILERES 19€\n
      1 CRÉDITO ........................93€ \n
      2 CRÉDITOS .....................100€ \n
      3 CRÉDITOS ...................600€ \n
      4 CRÉDITOS ...................833€ \n
      HOTEL ............................1000€ \n
HIPOTECA 93€ \n
      PRECIO CRÉDITO..............133€ \n`}
    />
  );
};
const Carta_1_0 = () => {
  return (
    <Asignatura_5
      title="Inteliencia Artificial"  
      subtitle="Coste: 200€"
      description={`ALQUILERES 19€\n
      1 CRÉDITO ........................93€ \n
      2 CRÉDITOS .....................100€ \n
      3 CRÉDITOS ...................600€ \n
      4 CRÉDITOS ...................833€ \n
      HOTEL ............................1000€ \n
HIPOTECA 93€ \n
      PRECIO CRÉDITO..............133€ \n`}
    />
  );
};
const Carta_3_0 = () => {
  return (
    <Asignatura_5
      title="Sistemas Distribuidos"  
      subtitle="Coste: 200€"
      description={`ALQUILERES 19€\n
      1 CRÉDITO ........................93€ \n
      2 CRÉDITOS .....................100€ \n
      3 CRÉDITOS ...................600€ \n
      4 CRÉDITOS ...................833€ \n
      HOTEL ............................1000€ \n
HIPOTECA 93€ \n
      PRECIO CRÉDITO..............133€ \n`}
    />
  );
};
const Carta_4_0 = () => {
  return (
    <Asignatura_5
      title="Proyecto Hardware"  
      subtitle="Coste: 200€"
      description={`ALQUILERES 19€\n
      1 CRÉDITO ........................93€ \n
      2 CRÉDITOS .....................100€ \n
      3 CRÉDITOS ...................600€ \n
      4 CRÉDITOS ...................833€ \n
      HOTEL ............................1000€ \n
HIPOTECA 93€ \n
      PRECIO CRÉDITO..............133€ \n`}
    />
  );
};
const Carta_6_0 = () => {
  return (
    <Asignatura_6
      title={`Sistemas de\n Información II`} 
      subtitle="Coste: 200€"
      description={`ALQUILERES 19€\n
      1 CRÉDITO ........................93€ \n
      2 CRÉDITOS .....................100€ \n
      3 CRÉDITOS ...................600€ \n
      4 CRÉDITOS ...................833€ \n
      HOTEL ............................1000€ \n
HIPOTECA 93€ \n
      PRECIO CRÉDITO..............133€ \n`}
    />
  );
};
const Carta_7_0 = () => {
  return (
    <Asignatura_6
      title={`Procesadores del\n Lenguaje`}  
      subtitle="Coste: 200€"
      description={`ALQUILERES 19€\n
      1 CRÉDITO ........................93€ \n
      2 CRÉDITOS .....................100€ \n
      3 CRÉDITOS ...................600€ \n
      4 CRÉDITOS ...................833€ \n
      HOTEL ............................1000€ \n
HIPOTECA 93€ \n
      PRECIO CRÉDITO..............133€ \n`}
    />
  );
};
const Carta_9_0 = () => {
  return (
    <Asignatura_6
      title="Proyecto Software"  
      subtitle="Coste: 200€"
      description={`ALQUILERES 19€\n
      1 CRÉDITO ........................93€ \n
      2 CRÉDITOS .....................100€ \n
      3 CRÉDITOS ...................600€ \n
      4 CRÉDITOS ...................833€ \n
      HOTEL ............................1000€ \n
HIPOTECA 93€ \n
      PRECIO CRÉDITO..............133€ \n`}
    />
  );
};
const Carta_10_1 = () => {
  return (
    <Asignatura_7
      title="Robótica"  
      subtitle="Coste: 200€"
      description={`ALQUILERES 19€\n
      1 CRÉDITO ........................93€ \n
      2 CRÉDITOS .....................100€ \n
      3 CRÉDITOS ...................600€ \n
      4 CRÉDITOS ...................833€ \n
      HOTEL ............................1000€ \n
HIPOTECA 93€ \n
      PRECIO CRÉDITO..............133€ \n`}
    />
  );
};
const Carta_10_2 = () => {
  return (
    <Asignatura_7
      title={`Sistemas y\n Tecnologías Web `}    
      subtitle="Coste: 200€"
      description={`ALQUILERES 19€\n
      1 CRÉDITO ........................93€ \n
      2 CRÉDITOS .....................100€ \n
      3 CRÉDITOS ...................600€ \n
      4 CRÉDITOS ...................833€ \n
      HOTEL ............................1000€ \n
HIPOTECA 93€ \n
      PRECIO CRÉDITO..............133€ \n`}
    />
  );
};
const Carta_10_4 = () => {
  return (
    <Asignatura_7
      title="Seguridad Informática"  
      subtitle="Coste: 200€"
      description={`ALQUILERES 19€\n
      1 CRÉDITO ........................93€ \n
      2 CRÉDITOS .....................100€ \n
      3 CRÉDITOS ...................600€ \n
      4 CRÉDITOS ...................833€ \n
      HOTEL ............................1000€ \n
HIPOTECA 93€ \n
      PRECIO CRÉDITO..............133€ \n`}
    />
  );
};
const Carta_10_7 = () => {
  return (
    <Asignatura_8
      title="Prácticas en Empresa"  
      subtitle="Coste: 200€"
      description={`ALQUILERES 19€\n
      1 CRÉDITO ........................93€ \n
      2 CRÉDITOS .....................100€ \n
      3 CRÉDITOS ...................600€ \n
      4 CRÉDITOS ...................833€ \n
      HOTEL ............................1000€ \n
HIPOTECA 93€ \n
      PRECIO CRÉDITO..............133€ \n`}
    />
  );
};
const Carta_10_9 = () => {
  return (
    <Asignatura_8
      title="TFG"  
      subtitle="Coste: 200€"
      description={`ALQUILERES 19€\n
      1 CRÉDITO ........................93€ \n
      2 CRÉDITOS .....................100€ \n
      3 CRÉDITOS ...................600€ \n
      4 CRÉDITOS ...................833€ \n
      HOTEL ............................1000€ \n
HIPOTECA 93€ \n
      PRECIO CRÉDITO..............133€ \n`}
    />
  );
};
//-----------------------------------------------------------
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
//--------------------------------------------------------
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


/*export {MonopolyCard, Boletin_1, Boletin_2, Boletin_3, Boletin_4, Boletin_5, Boletin_6, Boletin_7, Boletin_8,
  Boletin_9, Boletin_10, Boletin_11, Boletin_12, Boletin_13, Boletin_14, Boletin_15, Boletin_16,
  Suerte_1, Suerte_2, Suerte_3, Suerte_4, Suerte_5, Suerte_6, Suerte_7, 
  Suerte_8, Suerte_9, Suerte_10, Suerte_11, Suerte_12, Suerte_13, Suerte_14, Suerte_15, Suerte_16,
*/

// export default function Carta({casilla_horizontal, casilla_vertical}){
//   //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//   switch (casilla_horizontal){
//     case 0:
//       switch(casilla_vertical){
//         case 1:
//           //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return (
//             <Carta_0_1></Carta_0_1>
//           )
//         case 2:
//           //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return (
//             <Carta_0_2></Carta_0_2>
//           )
//         /*case 3:
//           return(
//             <Carta_0_3></Carta_0_3>
//           )*/
//         case 4:
//           //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return (
//             <Carta_0_4></Carta_0_4>
//           )
//         case 5:
//           //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return (
//             <Carta_0_5></Carta_0_5>
//           )
//         case 6:
//           //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return (
//             <Carta_0_6></Carta_0_6>
//           )
//         case 7:
//           //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return (
//             <Carta_0_7></Carta_0_7>
//           )
//         case 8:
//           //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return (
//             <Carta_0_8></Carta_0_8>
//           )
//         case 9:
//           //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return (
//             <Carta_0_9></Carta_0_9>
//           )
//       }
//       break;
//     case 1: // Carta_1_10, Carta_1_0,
//       switch (casilla_vertical){
//         case 10:
//           //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return(<Carta_1_10></Carta_1_10>)
//         case 0: 
//         //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return(<Carta_1_0></Carta_1_0>)
//       }
//     case 2: //Carta_2_10,
//       switch (casilla_vertical){
//         case 10:
//           //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return(<Carta_2_10></Carta_2_10>)
//         //case 0: 
//           //return(<Carta_2_0></Carta_2_0>)
//       }
//     case 3: //Carta_3_0,
//       switch (casilla_vertical){
//         //case 10:
//           //return(<Carta_3_10></Carta_3_10>)
//         case 0: 
//         //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return(<Carta_3_0></Carta_3_0>)
//       }
//     case 4: //Carta_4_10,Carta_4_0
//       switch (casilla_vertical){
//         case 10:
//           //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return(<Carta_4_10></Carta_4_10>)
//         case 0: 
//         //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return(<Carta_4_0></Carta_4_0>)
//       }
//     case 5: //Carta_5_0,Carta_5_10,
//       switch (casilla_vertical){
//         case 10:
//           //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return(<Carta_5_10></Carta_5_10>)
//         case 0: 
//         //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return(<Carta_5_0></Carta_5_0>)
//       }
//     case 6: //Carta_6_0,
//       switch (casilla_vertical){
//         //case 10:
//           //return(<Carta_6_10></Carta_6_10>)
//         case 0: 
//         //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return(<Carta_6_0></Carta_6_0>)
//       }
//     case 7: //Carta_7_0,Carta_7_10,
//       switch (casilla_vertical){
//         case 10:
//           //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return(<Carta_7_10></Carta_7_10>)
//         case 0: 
//         //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return(<Carta_7_0></Carta_7_0>)
//       }
//     case 8: //Carta_8_0
//       switch (casilla_vertical){
//         //case 10:
//           //return(<Carta_8_10></Carta_8_10>)
//         case 0: 
//         //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return(<Carta_8_0></Carta_8_0>)
//       }
//     case 9: //Carta_9_10,Carta_9_0
//       switch (casilla_vertical){
//         case 10:
//         //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return(<Carta_9_10></Carta_9_10>)
//         case 0: 
//         //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return(<Carta_9_0></Carta_9_0>)
//       }
//     case 10:
//       switch(casilla_vertical){
//         case 1:
//           //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return (
//             <Carta_10_1></Carta_10_1>
//           )
//         case 2:
//           //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return (
//             <Carta_10_2></Carta_10_2>
//           )
//         /*case 3:
//           return(
//             <Carta_10_3></Carta_10_3>
//           )*/
//         case 4:
//           //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return (
//             <Carta_10_4></Carta_10_4>
//           )
//         case 5:
//           //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return (
//             <Carta_10_5></Carta_10_5>
//           )
//         /*case 6:
//           //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return (
//             <Carta_10_6></Carta_10_6>
//           )*/
//         case 7:
//           //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return (
//             <Carta_10_7></Carta_10_7>
//           )
//         /*case 8:
//           //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return (
//             <Carta_10_8></Carta_10_8>
//           )*/
//         case 9:
//           //console.log("casilla:"+ casilla_horizontal +","+casilla_vertical);
//           return (
//             <Carta_10_9></Carta_10_9>
//           )
//       }
//}
//}
