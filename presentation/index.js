// Import React
import React from 'react'

import 'prismjs'
import 'prismjs/themes/prism-solarizedlight.css'

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Link,
  Quote,
  Slide,
  Text
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'


// Require CSS
// require('normalize.css')
const code = (file) => require(`raw-loader!../assets/code/${file}`)

const codigo = {
  fp1: code('funciones_puras.1'),
  curry1: code('curry.2'),
  curry2: code('curry.3'),
  curry3: code('curry.4'),
  curry4: code('dragones.5'),
  curry5: code('curry.6'),
  composicion1: code('composicion.1'),
  composicion2: code('composicion.2'),
  recursion1: code('recursion.1'),
  recursion2: code('recursion.2'),
  sort1: code('sort.1'),
  sort2: code('sort.2'),
  tail1: code('tail.1'),
  tail2: code('tail.2'),
  pokemon1: code('pokemon.1'),
  pokemon2: code('pokemon.2'),
  pokemon3: code('pokemon.3')
}

// images
const images = {
  yo: require('../assets/img/foto_presentacion.jpg').replace('/', ''),
  soHot: require('../assets/img/soHot.jpg').replace('/', ''),
  sw: require('../assets/img/sw.jpg').replace('/', ''),
  mic: require('../assets/img/dropTheMic.gif').replace('/', '')
}

const theme = createTheme({
  primary: 'white',
  secondary: '#1F2022',
  tertiary: '#03A9FC',
  quaternary: '#CECECE'
}, {
  primary: 'Montserrat',
  secondary: 'Helvetica'
})

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">Programación Funcional</Heading>
        </Slide>

        <Slide bgColor="black">
          <Heading size={1} caps textColor="primary" textFont="primary">Quién soy?</Heading>
          <Layout>
            <Fill>
              <List textColor="primary">
                <Appear><ListItem textColor="primary">Juan Manuel Cruz</ListItem></Appear>
                <Appear><ListItem textColor="primary">Estudiante</ListItem></Appear>
                <Appear><ListItem textColor="primary">Desarrollador</ListItem></Appear>
                <Appear><ListItem textColor="primary">Autodidacta</ListItem></Appear>
                <Appear><ListItem textColor="primary">Hacker</ListItem></Appear>
              </List>
            </Fill>
            <Fill>
              <Image src={images.yo} height="45vh" />
            </Fill>
          </Layout>

          <Appear>
            <Text textColor="tertiary"><i className="fab fa-twitter fa-lg"/> wroughtbywind</Text>
          </Appear>
          <Appear>
            <Text textColor="primary"><i className="fab fa-github fa-lg"/> Malows</Text>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">¿Qué es?</Heading>
          <Appear><Text textColor="tertiary">Un paradígma de programación</Text></Appear>
          <Appear><Text textColor="tertiary">Declarativo, no imperativo</Text></Appear>
          <Appear><Text textColor="tertiary">Fuerte base en teoremas matemáticos</Text></Appear>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Image src={images.soHot} />
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">¿Por qué?</Heading>
          <Appear><Text textColor="tertiary">Datos como un flujo</Text></Appear>
          <Appear><Text textColor="tertiary">Predecible</Text></Appear>
          <Appear><Text textColor="tertiary">Segura</Text></Appear>
          <Appear><Text textColor="tertiary">Fácil de evaluar y depurar</Text></Appear>
          <Appear><Text textColor="tertiary">Código fuente más claro</Text></Appear>
          <Appear><Text textColor="tertiary">Podemos aplicar matemáticas a nuestro flujo de trabajo</Text></Appear>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">Gerga</Heading>
          <Appear><Text textColor="tertiary">Monada</Text></Appear>
          <Appear><Text textColor="tertiary">Functor</Text></Appear>
          <Appear><Text textColor="tertiary">λ</Text></Appear>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">Lenguajes</Heading>
          <Appear>
            <div>
              <Text textColor="tertiary">Lisp</Text>
              <Text textColor="tertiary">Haskell</Text>
              <Text textColor="tertiary">OCaml</Text>
              <Text textColor="tertiary">F#</Text>
              <Text textColor="tertiary">ELM</Text>
              <Text textColor="tertiary">Scala</Text>
              <Text textColor="tertiary">Cloujure</Text>
            </div>
          </Appear>
          <Appear>
            <div>
              <Text textColor="tertiary">JavaScript</Text>
              <Text textColor="tertiary">Python</Text>
              <Text textColor="tertiary">Rust</Text>
            </div>
          </Appear>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">Pilares</Heading>
          <Appear><Text textColor="tertiary">Inmutabilidad</Text></Appear>
          <Appear><Text textColor="tertiary">Funciones puras</Text></Appear>
          <Appear><Text textColor="tertiary">Clausura</Text></Appear>
          <Appear><Text textColor="tertiary">Recursión</Text></Appear>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">Disclaimers</Heading>
          <Appear><Text textColor="tertiary">Mutable por defecto</Text></Appear>
          <Appear><Text textColor="tertiary">Evaluación ansiosa</Text></Appear>
          <Appear><Text textColor="tertiary">Basado en herencia prototipal</Text></Appear>
          <Appear><Text textColor="tertiary">Optimización precarizada</Text></Appear>
          <Appear><Text textColor="tertiary">Es genial!</Text></Appear>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">Inmutabilidad</Heading>
          <BlockQuote textColor="secondary">
            <Quote textSize="3rem" textColor="tertiary">
              Remplazar constantes<br/>
              antes que editar variables
            </Quote>
            <Cite>Malows</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">Inmutabilidad</Heading>
          <Code>Object.freeze</Code>
          <Text textColor="tertiary">inmmutable.js</Text>
          <Text textColor="tertiary">Mori</Text>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">Funciones puras</Heading>
          <CodePane lang="javascript" textSize="1.5rem" source={codigo.fp1} margin="5rem auto"/>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">Funciones puras</Heading>
          <Appear><Text textColor="tertiary">Facil de testear</Text></Appear>
          <Appear><Text textColor="tertiary">Resultado predecible</Text></Appear>
          <Appear><Text textColor="tertiary">Transparencia referencial</Text></Appear>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={3} caps lineHeight={1} textColor="secondary">Transparencia referencial?</Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="secondary">Funciones de orden superior</Heading>
          <Text>Funciones que reciben una función como argumento para expandir su funcionalidad</Text>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">Funciones de orden superior</Heading>
          <Layout>
            <Fill>
              <List>
                <ListItem>map</ListItem>
                <ListItem>filter</ListItem>
                <ListItem>reduce</ListItem>
              </List>
            </Fill>
            <Fill>
              <List>
                <ListItem>find</ListItem>
                <ListItem>findIndex</ListItem>
                <ListItem>every</ListItem>
                <ListItem>some</ListItem>
              </List>
            </Fill>
            <Fill>
              <List>
                <ListItem>forEach</ListItem>
                <ListItem>sort</ListItem>
              </List>
            </Fill>
          </Layout>

        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Text>map</Text>
          <CodePane lang="javascript" textSize="1.5rem" source="[ 🐮, 🍠, 🐔, 🌽 ].map(cocinar) // [ 🍔, 🍟, 🍗, 🍿 ]" margin="1rem 0 5rem"/>
          <Text>filter</Text>
          <CodePane lang="javascript" textSize="1.5rem" source="[ 🍔, 🍟, 🍗, 🍿 ].map(esVegetariano) // [ 🍟, 🍿 ]" margin="1rem 0 5rem"/>
          <Text>reduce</Text>
          <CodePane lang="javascript" textSize="1.5rem" source="[ 🍔, 🍟, 🍗, 🍿 ].map(comer) // 💩" margin="1rem 0 5rem"/>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Text>find</Text>
          <Text>findIndex</Text>
          <Text>every</Text>
          <Text>some</Text>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Text>forEach</Text>
          <Text>sort</Text>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <CodePane lang="javascript" textSize="1.5rem" source="const add2 = x => x + 2" margin="5rem auto"/>
          <Appear><CodePane lang="javascript" textSize="1.5rem" source="add2(2) + add2(3)  // 4 + 5 -> 9" margin="5rem auto"/></Appear>
          <Appear><CodePane lang="javascript" textSize="1.5rem" source="4 + 5  // 9" margin="5rem auto"/></Appear>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">Clausura</Heading>
          <Appear><Text>Una función evaluada en un entorno que contiene variables asociadas al entorno</Text></Appear>
          <Appear><Text textColor="tertiary">Composición y Currificación</Text></Appear>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">Currificación</Heading>
          <Appear><CodePane lang="javascript" textSize="1.5rem" source={codigo.fp1} margin="1rem auto"/></Appear>
          <Appear><CodePane lang="javascript" textSize="1.5rem" source={codigo.curry1} margin="1rem auto"/></Appear>
          <Appear><CodePane lang="javascript" textSize="1.5rem" source={codigo.curry2} margin="1rem auto"/></Appear>
          <Appear><CodePane lang="javascript" textSize="1.5rem" source={codigo.curry3} margin="1rem auto"/></Appear>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <CodePane lang="javascript" textSize="1.5rem" source={codigo.curry4} margin="1rem 0"/>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <CodePane lang="javascript" textSize="1.5rem" source={codigo.curry5} margin="1rem 0"/>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">Composición</Heading>
          <Text>Una o más funciones cuyos retornos son los argumentos de otra función</Text>
          <Appear><CodePane lang="javascript" textSize="1.5rem" source="funcion2( funcion1( input ) )" margin="5rem auto"/></Appear>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <CodePane lang="javascript" textSize="1rem" source={codigo.composicion1} margin="0 auto"/>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <CodePane lang="javascript" textSize="1rem" source={codigo.composicion2} margin="0 auto"/>
        </Slide>

        <Slide transition={['slide']} bgImage={images.sw} bgColor="secondary">
          <Heading size={1} caps lineHeight={1} textColor="primart">Recursión</Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">Recursión</Heading>
          <CodePane lang="javascript" textSize="1.5rem" source={codigo.recursion1} />
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <CodePane lang="javascript" textSize="1.5rem" source={codigo.sort1} margin="2rem auto"/>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <CodePane lang="javascript" textSize="1.5rem" source={codigo.sort2} margin="2rem auto"/>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">Tail Call Optimization</Heading>
          <Appear><CodePane lang="javascript" textSize="1.5rem" source={codigo.recursion2} margin="2rem auto"/></Appear>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">Tail Call Optimization</Heading>
          <Layout>
            <Fill>
              <Appear><CodePane lang="javascript" textSize="1.25rem" source={codigo.tail1} padding="2rem"/></Appear>
            </Fill>
            <Fill>
              <Appear><CodePane lang="javascript" textSize="1.25rem" source={codigo.tail2} padding="2rem"/></Appear>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">Gotta catch'em all</Heading>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <CodePane lang="javascript" textSize="1.25rem" source={codigo.pokemon1} padding="2rem"/>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <CodePane lang="javascript" textSize="1.25rem" source={codigo.pokemon2} padding="2rem"/>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <CodePane lang="javascript" textSize="1.25rem" source={codigo.pokemon3} padding="2rem"/>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">Reflexiones finales</Heading>
          <Heading size={4} caps textColor="secondary">Must read</Heading>
          <div>
            <Link textColor="tertiary" href="https://drboolean.gitbooks.io/mostly-adequate-guide-old/content/">Professor frisby's most adequate guide to functional programming</Link>
          </div>
          <div>
            <Link textColor="tertiary" href="https://github.com/getify/Functional-Light-JS">Functional-Light</Link>
          </div>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">Preguntas?</Heading>
        </Slide>

        <Slide transition={['slide']} bgImage={images.mic} bgColor="primary"/>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            Gracias!
          </Heading>
        </Slide>
      </Deck>
    )
  }
}
