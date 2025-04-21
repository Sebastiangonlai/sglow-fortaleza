const test3Data = [
  { // 61
    PREG: 'Ante la proximidad de vehículos de emergencia, despejar rápidamente la calzada permaneciendo donde no moleste',
    OP1: 'Verdadero',
    OP2: 'Falso'
  },
  { // 62
    PREG: 'En las calles de doble sentido los vehículos que circulen en sentido opuesto al cruzarse',
    OP1: 'Deberán encender las luces bajas',
    OP2: 'Deberán circular por el eje de la calzada demarcada o imaginaria',
    OP3: 'No pasarán el eje de la calzada demarcada o imaginaria',
    OP4: 'Hacer un destello de luces'
  },
  { // 63
    PREG: 'Por norma general Ud debe circular por la mitad derecha de la calzada:',
    OP1: 'Verdadero',
    OP2: 'Falso'
  },
  { // 64
    PREG: 'Un conductor al enfrentar una señal de "Ceda el Paso" deberá:',
    OP1: 'Detenerse siempre',
    OP2: 'Seguir la marcha a la misma velocidad',
    OP3: 'Reducir la velocidad y detenerse siempre si es necesario',
    OP4: 'Acelerar'
  },
  { // 65
    PREG: 'Nunca debe adelantarse aun vehículo que esta dando paso a peatones',
    OP1: 'Verdadero',
    OP2: 'Falso'
  },
  { // 66
    PREG: 'La vereda es el tramo de vía publica preferentemente destinado a:',
    OP1: 'El uso de peatones',
    OP2: 'El uso de los vehículos automotores',
    OP3: 'Otros usos',
    OP4: 'Ninguna de las anteriores es correcta'
  },
  { // 67
    PREG: 'En el cruce cuyos semáforos se encuentran apagados o descompuestos la preferencia será de:',
    OP1: 'Los que circulan por una avenida',
    OP2: 'Los vehículos que aparecen por la derecha',
    OP3: 'Los que llegan primero al cruce',
    OP4: 'Los vehículos que aparecen por la izquierda'
  },
  { // 68
    PREG: 'Siempre se debe prestar atención a la luz del semáforo que está frente a uno:',
    OP1: 'Verdadero',
    OP2: 'Falso'
  },
  { // 69
    PREG: 'Al conducir en carretera su fatiga aumentará si:',
    OP1: 'Escucha música',
    OP2: 'Si fuma con las ventanas cerradas',
    OP3: 'Si el paisaje es monótono',
    OP4: 'Solo b y c son correctas'
  },
  { // 70
    PREG: 'Cuando se trata de evitar un choque de frente en carretera Ud deberá:',
    OP1: 'Frenar',
    OP2: 'Rebajar los cambios',
    OP3: 'Desviarse hacia la banquina',
    OP4: 'Encender las luces largas'
  },
  { // 71
    PREG: 'Debe prestar atención de no encandilar a los que vienen en sentido contrario usando las luces cortas',
    OP1: 'Verdadero',
    OP2: 'Falso'
  },
  { // 72
    PREG: 'Usted puede circular sin espejo retrovisor cuando el vehículo sea de transporte de carga',
    OP1: 'Verdadero',
    OP2: 'Falso'
  },
  { // 73
    PREG: 'En pavimento mojado nunca se debe circular el vehículo en punto muerto',
    OP1: 'Verdadero',
    OP2: 'Falso'
  },
  { // 74
    PREG: '¿Que debe hacer un conductor al indicar el giro a la derecha?',
    OP1: 'Acercarse a la izquierda lo mas posible y prender el señalero',
    OP2: 'Mantenerse en el eje de la calzada y prender el señalero',
    OP3: 'Acercarse lo más a la derecha posible y prender el señalero',
    OP4: 'Ninguna de las anteriores es correcta'
  },
  { // 75
    PREG: 'La velocidad adecuada de circulación frente a escuelas en horarios de entrada o salida:',
    OP1: '30 km/h',
    OP2: '15 km/h',
    OP3: 'A paso de peaton',
    OP4: '25 km/h'
  },
  { // 76
    PREG: 'Si Ud debe estacionar en bajada',
    OP1: 'Deja derecho el auto y aplica freno de mano',
    OP2: 'Deja derecho el auto y le pone cambio',
    OP3: 'Aplica el freno de mano y gira las ruedas hacia el cordón de la vereda',
    OP4: 'Aplica el freno de mano y gira las ruedas contrario al cordón de la vereda'
  },
  { // 77
    PREG: 'Si mientras va circulando revienta un neumático ¿Que hace?',
    OP1: 'Frena bruscamente',
    OP2: 'Quita el pie del acelerador y gira por el lado que revento el neumatico',
    OP3: 'Frena suavemente, arrimando el auto derecho hasta detenerse',
    OP4: 'Apaga el motor'
  },
  { // 112
    PREG: 'Ante irregularidades en la documentación o estado del vehículo, este puede ser detenido por funcionario de tránsito, igual que la documentación (del conductor y del vehículo) previa entrega del recibo pertinente',
    OP1: 'Verdadero',
    OP2: 'Falso'
  },
  { // 113
    PREG: 'Al reventarse un neumático se debe:',
    OP1: 'Tomar fuertemente el volante y frenar tan suavemente como le sea posible',
    OP2: 'Frenar bruscamente',
    OP3: 'Quitar el pie del acelerador y girar para el lado que reventó el neumático',
    OP4: 'Frenar suavemente, arrimando el auto al borde derecho hasta detenerse',
    OP5: 'Apagar el motor'
  },
  { // 114
    PREG: 'El peatón, ¿tiene preferencia de cruce en cualquier lugar de la calzada?',
    OP1: 'Verdadero',
    OP2: 'Falso'
  },
  { // 115
    PREG: 'Cruce peatonal es:',
    OP1: 'Parte de la calzada habilitada para ser atravesada por peatones',
    OP2: 'La senda de seguridad formada por la prolongación(imaginaria o demarcaddel eje de la calzada',
    OP3: 'Parte de la vereda donde se debe esperar para poder cruzar',
    OP4: 'Los llamados "lomos de burro"',
    OP5: 'Las señalizadas con franjas blancas paralelas'
  },
  { // 116
    PREG: 'Ante la proximidad de un vehículo de emergencia usted:',
    OP1: 'Aumenta la velocidad',
    OP2: 'Despeja rápidamente la calzada permaneciendo detenido donde no moleste',
    OP3: 'Hace cambio de luces y toca la bocina para avisar al resto de los conductores',
    OP4: 'Ninguna es correcta'
  },
  { // 117
    PREG: '¿Que luces deben llevar encendidas un vehículo durante la noche en las áreas urbanas?:',
    OP1: 'Luces altas o bajas de acuerdo a la situación del transito',
    OP2: 'Cualquiera indistintamente',
    OP3: 'Luces de posición',
    OP4: 'Solo a y c son correctas'
  },
  { // 118
    PREG: 'Cuando va detrás de un vehículo durante la noche deben usarse las luces cortas:',
    OP1: 'En ningún momento',
    OP2: 'Cuando la distancia haga innecesaria las luces largas',
    OP3: 'Cuando la visibilidad sea muy buena',
    OP4: 'Ninguna de las anteriores es correcta'
  },
  { // 119
    PREG: '¿Cual es la edad mínima para poder viajar en el asiento delantero del vehículo?:',
    OP1: '1 año',
    OP2: '6 años',
    OP3: '12 años',
    OP4: 'Ninguna es correcta'
  },
  { // 120
    PREG: 'La preferencia de paso del vehículo de la derecha no regirá:',
    OP1: 'En los cruces regulados por semáforos o agentes de tránsito',
    OP2: 'En las vías de doble tránsito',
    OP3: 'En los cruces no regulados'
  },
  { // 121
    PREG: 'Un conductor al enfrentar una señal de PARE debe:',
    OP1: 'Seguir su marcha a la misma velocidad',
    OP2: 'Reducir un poco la velocidad y continuar',
    OP3: 'Detener totalmente la marcha',
    OP4: 'Reducir la velocidad y detenerse si fuera necesario'
  },
  { // 122
    PREG: 'Un cruce regulado:',
    OP1: 'Es aquel en que existen semáforos funcionando regularmente, un inspector o agente de tránsito',
    OP2: 'En el que existe cualquier tipo de señal vertical u horizontal',
    OP3: 'Ninguna es correcta'
  },
  { // 123
    PREG: 'Se puede adelantar a un vehículo que esta doblando a la derecha:',
    OP1: 'Verdadero',
    OP2: 'Falso'
  },
  { // 124
    PREG: 'Cuando usted dobla a la derecha:',
    OP1: 'Debe acercar su vehículo a la izquierda, encender el señalero y doblar con precaución',
    OP2: 'Debe encender el señalero derecho',
    OP3: 'Debe mirar por el espejo retrovisor, encender el señalero y acercarse al cordón derecho'
  },
]

export default test3Data