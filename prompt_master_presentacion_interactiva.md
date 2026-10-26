# Master Prompt: Generador de Presentaciones Web Interactivas Premium (Habilidades Blandas y Marca Personal)

Copia y utiliza el siguiente prompt completo para generar la presentación web interactiva con la arquitectura, estética y contenido exacto de este proyecto.

---

```markdown
Actúa como un Diseñador UI/UX y Desarrollador Frontend Senior especializado en interfaces ejecutivas modernas, animaciones web e interactividad (Three.js, SVG animado con CSS puro y Tailwind CSS).

### 🎯 Objetivo del Proyecto
Crear una presentación web interactiva, moderna y visualmente deslumbrante (tipo Single Page Application / Deck interactivo ejecutivo) con el siguiente perfil:
- **Título de la Presentación:** La Importancia de las Habilidades Blandas y la Marca Personal en la Tecnología
- **Ponente:** Aldo Gutierrez
- **Audiencia / Contexto:** Estudiantes de tecnología, ingenieros, desarrolladores y profesionales técnicos en búsqueda de diferenciación profesional y crecimiento de carrera.
- **Paleta Cromática y Acento:** Azul tecnológico (Zafiro `#2563EB`, Índigo `#4F46E5` y Cian moderno `#06B6D4`) combinado con fondos translúcidos en Glassmorphism sobre fondos `bg-slate-900` / `bg-slate-950` con iluminación ambiental (`glow-bg`).

---

### 🧱 Arquitectura y Estructura de Archivos Requerida
El proyecto debe organizarse en una estructura modular y limpia:

```text
presentacion-habilidades-blandas/
├── index.html              # Archivo HTML principal con todas las diapositivas
├── assets/images/          # Recursos gráficos o logos
├── css/
│   ├── styles.css          # Tipografía (Google Fonts: Inter / Outfit), reset y scrollbars estilizadas
│   ├── presentation.css    # Estilos glassmorphism, responsive móvil y layout de slides
│   └── animations.css      # Keyframes CSS para animaciones SVG, brillos y pulsos
└── js/
    ├── main.js             # Controlador de slides, navegación por teclado, swipe móvil y controles
    └── background-3d.js    # Fondo 3D interactivo con Three.js (red de nodos y partículas dinámicas)
```

---

### 🎨 Diseño Visual, Estética y Experiencia de Usuario (UI/UX)
1. **Estilo Glassmorphism Ejecutivo:**
   - Tarjetas translúcidas con `backdrop-filter: blur(18px)`, fondo `rgba(15, 23, 42, 0.75)` (o versión clara translúcida según contraste), bordes sutiles semitransparentes `border-cyan-500/20` y sombras volumétricas.
   - Acentos temáticos vibrantes en gradiente: Azul zafiro a Cian neón.
   - Fondos ambientales dinámicos (`glow-bg`) con gradientes borrosos (*ambient light blurs*).
2. **Fondo 3D Interactivo con Three.js (`background-3d.js`):**
   - Red de nodos y partículas 3D en constante movimiento armónico unidas por líneas luminosas (simulando conexiones neuronales y de red profesional).
   - Reacción sutil al movimiento del cursor (*parallax effect*).
   - Función `triggerSlideParticlePulse()` que dispara un destello y aceleración al cambiar de diapositiva.
3. **Ilustraciones Vectoriales Animadas (SVG + CSS Keyframes):**
   - **REGLA FUNDAMENTAL:** Cada diapositiva DEBE contar con una ilustración vectorial SVG interactiva con animaciones continuas en bucle mediante CSS puro, conceptualmente alineada con el tema (ej. radar de talentos, escáner de portafolio, balanza de igualdad, interruptor de mentalidad, escudo anti-miedo, etc.).
4. **Navegación Fluida:**
   - Atajos de teclado: Flechas `Izquierda` / `Derecha`, `Barra Espaciadora`, `RePág` / `AvPág`, `Home` y `End`.
   - Controles flotantes inferiores con botones accesibles, botón de pantalla completa y botón de reinicio.
   - Puntos indicadores dinámicos en la barra superior (*dots indicator*) y contador visual adaptable (`Slide X / Total`).
   - Barra de estado activa (`● Modo Presentación Interactivo`).
5. **Regla de Estructura, Separadores y Carga Cognitiva:**
   - **Cantidad flexible de diapositivas:** No hay un número mínimo ni máximo preestablecido de diapositivas. Se crean cuantas sean necesarias para desglosar el contenido de forma natural y fluida.
   - **Diapositivas Separadoras Dedicadas (Title Slides de Tema):** Cada uno de los 7 temas principales cuenta con una **diapositiva previa dedicada exclusivamente a la presentación del título del tema** (estilo portada de sección ejecutiva con tipografía grande, badge temático y su ilustración conceptual animada).
   - **Regla estricta de contenido:** **Bajo ninguna circunstancia debe haber más de 4 subtemas o puntos clave en una misma diapositiva.** Cuando una sección contiene más de 4 puntos, se divide en partes consecutivas (*Parte 1*, *Parte 2*).
   - Formato de lectura ejecutiva: jerarquía visual clara (tarjetas internas o viñetas con micro-iconos), facilitando la comprensión y evitando sobrecargar a la audiencia.

---

### 📋 Estructura y Contenido de las Diapositivas
*(Nota de diseño: Incluye diapositivas separadoras dedicadas exclusivamente al nombre de cada tema, más el 100% de los puntos de `contenido_presentaci_n.md` sin omitir ninguno y respetando el límite de máximo 4 subtemas por slide).*

#### Slide 1: Portada y Presentación General
- **Badge superior:** Conferencia Magistral & Desarrollo de Carrera
- **Título principal:** La Importancia de las Habilidades Blandas y la Marca Personal en la Tecnología
- **Subtítulo:** Cómo destacar, conectar y proyectar tu valor profesional en la industria tecnológica.
- **Ponente:** Aldo Gutierrez
- **Ilustración SVG animada:** Núcleo central con nodos orbitales de habilidades blandas y duras en sincronía luminosa y rotación armónica.

---

#### Slide 2: Separador de Tema — 1. El Arte de Vender
- **Tipo de Slide:** Diapositiva dedicada únicamente al título de la sección (Presentación del Tema).
- **Badge:** Sección 01
- **Título en Gran Formato:** 1. El Arte de Vender
- **Ilustración SVG animada:** Símbolo minimalista y elegante de proyección de valor y visibilidad profesional.

#### Slide 3: 1. El Arte de Vender (Parte 1: Proyección de Valor)
- **Subtítulo / Contexto:** Reconocer el proceso de venta constante y superar la trampa técnica.
- **Puntos Clave incluidos:**
  1. **La vida es un proceso de venta constante:** Entrevistas, calificaciones, exámenes y evaluaciones.
  2. **Convencer al prójimo de tu valor real:** La importancia de comunicar con claridad lo que vales y aportas.
  3. **La trampa de la capacidad técnica:** Puedes tener toda la experiencia del mundo, pero si no sabes proyectarla ni venderte, nunca se tendrá éxito.
- **Ilustración SVG animada:** Haz de luz o reflector destacando la proyección y visibilidad de un perfil profesional frente a métricas técnicas.

#### Slide 4: 1. El Arte de Vender (Parte 2: Diferenciación y Resultados)
- **Subtítulo / Contexto:** Asegurar tu lugar en la toma de decisiones.
- **Puntos Clave incluidos:**
  1. **No te centres en ser el mejor, céntrate en ser único:** El objetivo principal es no pasar como un currículum más.
  2. **El objetivo clave:** Lograr que nuestro nombre esté sí o sí en la mesa de conversación cuando se decida a quién elegir.
  3. **Aceptar el resultado:** Que luego no nos escojan es otro problema, pero debemos asegurar estar entre las opciones reales.
- **Ilustración SVG animada:** Mesa de decisiones holográfica con tarjetas de candidatos donde una brilla con luz propia distintiva.

---

#### Slide 5: Separador de Tema — 2. Entrevistas
- **Tipo de Slide:** Diapositiva dedicada únicamente al título de la sección (Presentación del Tema).
- **Badge:** Sección 02
- **Título en Gran Formato:** 2. Entrevistas
- **Ilustración SVG animada:** Icono conceptual animado de sintonía y diálogo bidireccional.

#### Slide 6: 2. Entrevistas (Parte 1: Valoración y Mentalidad)
- **Subtítulo / Contexto:** Cambiar la perspectiva en los procesos de selección.
- **Puntos Clave incluidos:**
  1. **Valoración actual:** Se están valorando más que nunca las habilidades blandas (*soft skills*).
  2. **Saberse vender con autenticidad:** Proyectar quién eres de manera genuina y profesional.
  3. **Mentalidad correcta (Cambiar el chip):** No solo nosotros deseamos el trabajo; las empresas también nos desean a nosotros. Por eso invierten tantos recursos (energía, tiempo y dinero) en encontrar nuestro talento.
- **Ilustración SVG animada:** Escáner bidireccional mostrando ondas de búsqueda de talento interactuando con un nodo de talento auténtico.

#### Slide 7: 2. Entrevistas (Parte 2: Conexión Humana)
- **Subtítulo / Contexto:** Trascender el papel y marcar presencia.
- **Puntos Clave incluidos:**
  1. **Acción diferenciadora:** Visitar presencialmente las oficinas.
  2. **Conversar y conectar más allá del papel:** Crear vínculos reales de conversación y empatía que superen una simple postulación digital.
- **Ilustración SVG animada:** Representación estilizada de interacción presencial conectando un currículum con una conversación activa cara a cara.

---

#### Slide 8: Separador de Tema — 3. Empieza Ya con un Pie Dentro del Trabajo
- **Tipo de Slide:** Diapositiva dedicada únicamente al título de la sección (Presentación del Tema).
- **Badge:** Sección 03
- **Título en Gran Formato:** 3. Empieza Ya con un Pie Dentro del Trabajo
- **Ilustración SVG animada:** Llave maestra holográfica abriendo un umbral tecnológico hacia adelante.

#### Slide 9: 3. Empieza Ya con un Pie Dentro del Trabajo (Demostración de Valor y Proactividad)
- **Subtítulo / Contexto:** Demostración de valor tangible y proactividad especializada.
- **Puntos Clave incluidos:**
  1. **Marcar diferencia:** No basta con decir que tienes todo lo que piden en la vacante.
  2. **Demostrar el valor:** Mostrarlo a través de un portafolio sólido.
  3. **Aportar valor de forma especializada:**
     - *Diseñador Web:* Presentar la *home* de su web ya optimizada y rediseñada.
     - *Analista de Datos:* Traer la solución a un problema concreto de su industria.
  4. **Proactividad:** Es una iniciativa ya hecha; solo queda verbalizarla.
- **Ilustración SVG animada:** Interfaz de portafolio interactivo desplegando una propuesta de valor antes de cruzar la puerta de entrada.

---

#### Slide 10: Separador de Tema — 4. Capital Profesional
- **Tipo de Slide:** Diapositiva dedicada únicamente al título de la sección (Presentación del Tema).
- **Badge:** Sección 04
- **Título en Gran Formato:** 4. Capital Profesional
- **Ilustración SVG animada:** Emblema geométrico de bóveda de valor y competencias técnicas en rotación.

#### Slide 11: 4. Capital Profesional (Pilares y Credenciales)
- **Subtítulo / Contexto:** Construcción y respaldo de tu patrimonio de competencias.
- **Puntos Clave incluidos:**
  1. **Definición:** Conjunto de habilidades, talentos, cualidades personales, profesionales, técnicas y académicas que te hacen destacar de la mayoría.
  2. **Dimensión General:** La capacidad de saber aprender (aprendizaje continuo).
  3. **Dimensión Particular:** Habilidades específicas de tu nicho.
  4. **Desarrollar credenciales:** Ir más allá del título universitario; respaldarte con los proyectos prácticos con los que vas acumulando experiencia.
- **Ilustración SVG animada:** Estructura modular de bloques de capital profesional (engranaje de aprendizaje + insignia de nicho + proyectos prácticos acumulados).

---

#### Slide 12: Separador de Tema — 5. Mindset
- **Tipo de Slide:** Diapositiva dedicada únicamente al título de la sección (Presentación del Tema).
- **Badge:** Sección 05
- **Título en Gran Formato:** 5. Mindset
- **Ilustración SVG animada:** Interruptor mental estilizado pulsando con destellos de confianza y enfoque.

#### Slide 13: 5. Mindset (Paridad Profesional y Desapego)
- **Subtítulo / Contexto:** Postura profesional de valor y relación de igualdad.
- **Puntos Clave incluidos:**
  1. **Errores comunes:** Malbaratar el propio trabajo y pensar que somos menos de lo que realmente somos.
  2. **Trabajar el desapego profesional:** Desvincular el valor propio de las respuestas externas.
  3. **Cambio de enfoque:** Nosotros somos la solución a sus problemas.
  4. **Relación de igualdad:** Tratar con la empresa desde la igualdad y no desde la inferioridad ("yo necesito el trabajo").
- **Ilustración SVG animada:** Balanza perfectamente nivelada entre dos entidades de igual magnitud, con pulso de energía simétrico.

---

#### Slide 14: Separador de Tema — 6. Miedo
- **Tipo de Slide:** Diapositiva dedicada únicamente al título de la sección (Presentación del Tema).
- **Badge:** Sección 06
- **Título en Gran Formato:** 6. Miedo
- **Ilustración SVG animada:** Escudo protector dinámico disolviendo bruma o ruido de inseguridad.

#### Slide 15: 6. Miedo (Desaprender y Empoderar)
- **Subtítulo / Contexto:** Desaprender el miedo y empoderar la voz propia.
- **Puntos Clave incluidos:**
  1. **La naturaleza del miedo:** El miedo es aprendido (excepto el miedo a la muerte y a lo desconocido).
  2. **Quitar el miedo en los jóvenes:** Fomentar la seguridad técnica y personal.
  3. **Empoderamiento:** Tener la capacidad de hablar y decir cuando ven algo mal o cuando pueden aportar valor a una idea.
- **Ilustración SVG animada:** Ondas de interferencia que se disuelven al pasar por un nodo de seguridad personal y voz asertiva.

---

#### Slide 16: Separador de Tema — 7. Organizar Competencias con Empresas (Hackathons)
- **Tipo de Slide:** Diapositiva dedicada únicamente al título de la sección (Presentación del Tema).
- **Badge:** Sección 07
- **Título en Gran Formato:** 7. Organizar Competencias con Empresas (Hackathons)
- **Ilustración SVG animada:** Reloj de arena / cronómetro digital de arena luminosa con engranajes en marcha.

#### Slide 17: 7. Organizar Competencias con Empresas (Hackathons) (Impacto y Entrenamiento Real)
- **Subtítulo / Contexto:** El impacto integral de los entornos competitivos reales.
- **Puntos Clave incluidos:**
  1. **Desarrollo simultáneo:** Desarrolla simultáneamente habilidades duras (*hard skills*) y habilidades blandas (*soft skills*).
  2. **Posicionamiento estratégico:** Ayuda al posicionamiento estratégico de la universidad y sus facultades.
  3. **Valor tangible:** Agrega valor directo y tangible al portafolio.
  4. **Entrenamiento bajo presión:** Entrena para el trabajo bajo presión y estrés en escenarios reales.
- **Ilustración SVG animada:** Cronómetro de hackathon con líneas de datos veloces, colaboración en equipo y un trofeo de logro profesional.

---

#### Slide 18: Cierre y Preguntas
- **Mensaje de Cierre:** El valor no solo reside en lo que sabes construir, sino en cómo lo comunicas y defiendes.
- **Agradecimiento:** ¡Muchas gracias!
- **Ponente:** Aldo Gutierrez
- **Interacciones:** Botón interactivo `Reiniciar Presentación`, indicadores de redes profesionales y espacio abierto a preguntas y debate.
- **Ilustración SVG animada:** Emblema dinámico con estela de partículas y botón circular con rotación suave para reiniciar el recorrido.

---

### 🚀 Entregable Requerido
Genera el código completo, probado y sin omisiones para los siguientes archivos:
1. `css/styles.css`
2. `css/presentation.css`
3. `css/animations.css` (con todos los `@keyframes` para los SVG de cada diapositiva generada)
4. `js/background-3d.js` (Three.js con red de partículas zafiro/cian, interacción de mouse y pulso en cambio de slide)
5. `js/main.js` (Controlador de teclado, gestos touch, botones flotantes, progreso y reinicio dinámico según el total de slides)
6. `index.html` (Estructura completa de todas las diapositivas requeridas vinculando Tailwind CSS vía CDN, Three.js y Lucide Icons)
```

