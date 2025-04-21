//// NUEVO

const test1Data = [
  { // 1
    PREG: "En condiciones de tránsito comunes, un vehículo podrá ser conducido marcha atrás sólo:",
    OP1: "50 mts",
    OP2: "35 mts",
    OP3: "En caso de necesidad para estacionar",
    OP4: "Ninguna de las anteriores es correcta"
  },
  { // 2
    PREG: "Ante la proximidad de vehículos de emergencia:",
    OP1: "Debe detener su vehículo",
    OP2: "Debe avisar con las luces al vehículo que le antecede",
    OP3: "Debe aumentar la velocidad",
    OP4: "Debe despejar rápidamente la calle, deteniendo su vehículo donde no moleste"
  },
  { // 3
    PREG: "Los inspectores de la IMM y/o policía de tránsito están facultados al retiro de la documentación del conductor y/o vehículo",
    OP1: "Verdadero",
    OP2: "Falso"
  },
  { // 4
    PREG: "Antes de empezar a pasar al vehículo que va adelante, ud deberá:",
    OP1: "Mirar espejo retrovisor y prender el señalero",
    OP2: "Tocar la bocina",
    OP3: "Hacer cambio de luces",
    OP4: "Ninguna de las anteriores es correcta",
    OP5: "Todas las anteriores son correctas"
  },
  { // 5
    PREG: "Si ud esta cruzando una calle, la luz amarilla de un semáforo indica:",
    OP1: "Atención, obligación a despejar el cruce ",
    OP2: "Derecho de paso ",
    OP3: "Detenerse ",
    OP4: "Despacio, escuela"
  },
  { // 6
    PREG: "En un repecho se puede adelantar a otro vehículo",
    OP1: "Si",
    OP2: "No",
    OP3: "Si, si el vehículo cede el paso",
    OP4: "Si, siempre que haga cambio de luces"
  },
  { // 7
    PREG: "Solo se puede adelantar a otro vehículo por la derecha si éste esta girando o se dispone a girar a la izquierda",
    OP1: "Verdadero",
    OP2: "Falso"
  },
  { // 8
    PREG: "Los funcionarios del cuerpo de inspectores de tránsito, están facultados para modificar las preferencias establecidas cuando las circunstancias lo requieran",
    OP1: "Verdadero",
    OP2: "Falso"
  },
  { // 9
    PREG: "Cuando los neumáticos tienen poca presión de aire, se ahora combustible",
    OP1: "Verdadero",
    OP2: "Falso"
  },
  { // 10
    PREG: "El uso del cinturón de seguridad es tan importante en la ciudad como en la carretera",
    OP1: "Verdadero",
    OP2: "Falso"
  },
  { // 11
    PREG: "Es necesario duplicar la distancia entre su vehículo y el que lo antecede en:",
    OP1: "Amanecer",
    OP2: "Atardecer",
    OP3: "Pavimento resbaloso",
    OP4: "Todas las anteriores son correctas"
  },
  { // 12
    PREG: "Para señalizar con el brazo un giro a la derecha; el brazo:",
    OP1: "Extendido horizontalmente",
    OP2: "En ángulo hacia arriba",
    OP3: "Hacia abajo",
    OP4: "Ninguna de las anteriores es correcta"
  },
  { // 13
    PREG: "En los días de lluvia se debe disminuir la velocidad aunque las condiciones del vehículo seanóptimas",
    OP1: "Verdadero",
    OP2: "Falso"
  },
  { // 14
    PREG: "Un disgusto (alteraciones, discusiones, depresión) afecta:",
    OP1: "La visión lateral",
    OP2: "La audición",
    OP3: "El tiempo de reacción ",
    OP4: "Ninguna de las anteriores es correcta"
  },
  { // 15
    PREG: "En una bajada pronunciada para mayor seguridad, poner el vehículo en punto muerto",
    OP1: "Verdadero",
    OP2: "Falso"
  },
  { // 16
    PREG: "La calle es el tramo de la vía pública destinado preferentemente a:",
    OP1: "La circulación de cualquier tipo de vehículos automotores",
    OP2: "Solamente la circulación de peatones",
    OP3: "Solamente a la circulación de vehículos livianos"
  },
  { // 17
    PREG: "Con el coche cargado las distancias para detenerse serán menores",
    OP1: "Verdadero",
    OP2: "Falso"
  },
  { // 18
    PREG: "Cuando se maneja por períodos de más de cuatro horas se deberá descansar por lo menos:",
    OP1: "10 minutos",
    OP2: "20 minutos",
    OP3: "50 minutos",
    OP4: "60 minutos"
  },
  { // 19
    PREG: "La distancia prudencial entre dos vehículos que circulan en la misma dirección, es aquellla que permite al conductor ver las ruedas traseras del vehículo que va delante",
    OP1: "Verdadero",
    OP2: "Falso"
  },
  { // 20
    PREG: "El tiempo de reacción del conductor se ve afectado por:",
    OP1: "El estado de la ruta",
    OP2: "La velocidad a la cual conduce",
    OP3: "El cansancio",
    OP4: "Los defectos mecánicos del vehículo"
  },
  { // 21
    PREG: "Los objetos duros y con puntas depositados en los estantes delanteros y traseros, se pueden convertir en royectiles peligrosos en una frenada brusca",
    OP1: "Verdadero",
    OP2: "Falso"
  },
  { // 22
    PREG: "Aun tomando descansos, no se deberá conducir por más de 9 horas contínuas",
    OP1: "Verdadero",
    OP2: "Falso"
  },
  { // 23
    PREG: "A partir de los 35 y 40 años de edad se va perdiendo la rapidez para reaccionar",
    OP1: "Verdadero",
    OP2: "Falso"
  },
  { // 24
    PREG: "La velocidad adecuada de circulación de un vehículo en caso de aglomeración de personas es:",
    OP1: "15 km/h",
    OP2: "A paso de peatón",
    OP3: "25 km/h",
    OP4: "Ninguna de las anteriores es correcta"
  },
  { // 25
    PREG: "Qué debe hacer un conductor al iniciar un giro a la izquierda desde una calle de doble mano:",
    OP1: "Aproximarse a la linea central o eje de la calle, señalizando con suficiente anticipación",
    OP2: "Ubicarse sobre el lado izquierdo del eje de la calzada",
    OP3: "Acercarse lo más a la derecha posible",
    OP4: "Ninguna de las anteriores es correcta"
  },
  { // 26
    PREG: "Los peatones que circulan por la vereda tienen preferencia de paso ante un vehículo que la atraviesa para entrar o salir de un garaje",
    OP1: "Verdadero",
    OP2: "Falso"
  },
  { // 27
    PREG: "Los vehículos que tengan sus neumáticos con bandas de rodamiento gastadas:",
    OP1: "Podrán circular solo de noche",
    OP2: "Podrán circular solo de dia",
    OP3: "No podrán circular"
  },
  { // 28
    PREG: "Si es encandilado por otro vehículo Ud. deberá:",
    OP1: "Hacer cambio de luces",
    OP2: "Colocar sus luces cortas",
    OP3: "Tirarse a la banquina si el choque es inevitable",
    OP4: "Solo a y c son correctas"
  },
  { // 29
    PREG: "¿Para quien es obligatorio el uso del cinturón de seguridad?",
    OP1: "Sólo para los ocupantes de los asientos traseros de los vehículos automotores",
    OP2: "Sólo para los ocupantes de los asientos delanteros de los vehículos automotores",
    OP3: "Ninguna de las anteriores",
    OP4: "Para todos los ocupantes del vehículo"
  },
  { // 30
    PREG: "Derecho preferente de paso es:",
    OP1: "La facultad de un peatón o conductor de un vehículo para proseguir la marcha",
    OP2: "La facultad del conductor de un vehículo para no detener la marcha al ingresar a una calle de preferencia",
    OP3: "La facultad del conductor de un vehículo para cambiar de dirección careciendo de preferencia",
    OP4: "Ninguna de las anteriores es correcta"
  }
]

export default test1Data