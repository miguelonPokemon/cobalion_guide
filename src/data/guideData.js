export const GUIDE_DATA = {
    turns: [
        {
            turn: 1,
            badge: null,
            p1: { sprite: 'typhlosion', moves: [{ name: 'Estallido', type: 'fire' }] },
            p2: { sprite: 'whimsicott', moves: [{ name: 'Encanto', type: 'fairy' }] },
            p3: { sprite: 'ninetales', moves: [{ name: 'Fuego fatuo', type: 'fire' }] },
            p4: { sprite: 'jirachi', moves: [{ name: 'Pantalla luz', type: 'psychic' }] }
        },
        {
            turn: 2,
            badge: null,
            p1: { sprite: 'typhlosion', moves: [{ name: 'Estallido', type: 'fire' }] },
            p2: { sprite: 'whimsicott', moves: [{ name: 'Viento afín', type: 'flying' }] },
            p3: { sprite: 'heatran', moves: [{ name: 'Estallido', type: 'fire' }] },
            p4: { sprite: 'jirachi', moves: [{ name: 'Reflejo', type: 'psychic' }] }
        },
        {
            turn: 3,
            badge: null,
            p1: { sprite: 'rotom-wash', moves: [{ name: 'Chispazo', type: 'electric' }] },
            p2: { sprite: 'typhlosion', moves: [{ name: 'Estallido', type: 'fire' }] },
            p3: { sprite: 'heatran', moves: [{ name: 'Lanzallamas', type: 'fire' }] },
            p4: { sprite: 'jirachi', moves: [{ name: 'Conjuro', type: 'normal' }] }
        },
        {
            turn: 4,
            badge: null,
            p1: { sprite: 'rotom-wash', moves: [{ name: 'Hidrobomba', type: 'water' }] },
            p2: { sprite: 'nidoking', moves: [{ name: 'Tierra viva', type: 'ground' }] },
            p3: { sprite: 'heatran', moves: [{ name: 'Gravedad', type: 'psychic' }] },
            p4: { sprite: 'jirachi', moves: [{ name: 'Truco', type: 'psychic' }] }
        },
        {
            turn: 5,
            badge: null,
            p1: { sprite: 'reuniclus', moves: [{ name: 'Espacio raro', type: 'psychic' }] },
            p2: { sprite: 'nidoking', moves: [{ name: 'Onda certera', type: 'fighting' }] },
            p3: { sprite: 'ampharos', moves: [{ name: 'Trueno', type: 'electric' }] },
            p4: { sprite: 'jirachi', moves: [{ name: 'Último lugar', type: 'special' }] }
        },
        {
            turn: 6,
            badge: null,
            p1: { sprite: 'ampharos', moves: [{ name: 'Onda certera', type: 'fighting' }] },
            p2: { sprite: 'nidoking', moves: [{ name: 'Onda certera', type: 'fighting' }] },
            p3: { sprite: 'ampharos', moves: [{ name: 'Onda certera', type: 'fighting' }] },
            p4: { sprite: 'reuniclus', moves: [{ name: 'Onda certera', type: 'fighting' }] }
        },
        {
            turn: 7,
            badge: null,
            p1: { sprite: 'ampharos', moves: [{ name: 'Onda certera', type: 'fighting' }] },
            p2: { sprite: 'lucario', moves: [{ name: 'Onda certera', type: 'fighting' }] },
            p3: { sprite: 'nidoking', moves: [{ name: 'Tierra viva', type: 'ground' }] },
            p4: { sprite: 'reuniclus', moves: [{ name: 'Tierra viva', type: 'ground' }] }
        },
        {
            turn: 8,
            badge: null,
            p1: { sprite: 'ampharos', moves: [{ name: 'Onda certera', type: 'fighting' }] },
            p2: { sprite: 'lucario', moves: [{ name: 'Onda certera', type: 'fighting' }] },
            p3: { sprite: 'lucario', moves: [{ name: 'Onda certera', type: 'fighting' }] },
            p4: { sprite: 'reuniclus', moves: [{ name: 'Onda certera', type: 'fighting' }] }
        },
        {
            turn: 9,
            badge: null,
            p1: { sprite: 'reuniclus', moves: [{ name: 'Gravedad', type: 'psychic' }] },
            p2: { sprite: 'lucario', moves: [{ name: 'Onda certera', type: 'fighting' }] },
            p3: { sprite: 'lucario', moves: [{ name: 'Onda certera', type: 'fighting' }] },
            p4: { sprite: 'reuniclus', moves: [{ name: 'Onda certera', type: 'fighting' }] }
        },
        {
            turn: 10,
            badge: null,
            p1: { sprite: 'lucario', moves: [{ name: 'Onda vacío', type: 'fighting' }] },
            p2: { stateType: 'ko', moves: [{ name: 'KO', type: 'ko' }] },
            p3: { stateType: 'ko', moves: [{ name: 'KO', type: 'ko' }] },
            p4: { sprite: 'lucario', moves: [{ name: 'Onda vacío', type: 'fighting' }] }
        }
    ],

    pokepastes: [
        {
            player: 'Player 1',
            slot: 'Posición 1º en combate',
            url: 'https://pokepast.es/681c2e0fc33809ab',
            accent: 'cobalt'
        },
        {
            player: 'Player 2',
            slot: 'Posición 4º en combate',
            url: 'https://pokepast.es/a42eabbfe4ba2ff5',
            accent: 'amber'
        },
        {
            player: 'Player 3',
            slot: 'Posición 2º en combate',
            url: 'https://pokepast.es/ea8eaa70f1407a8b',
            accent: 'purple'
        },
        {
            player: 'Player 4',
            slot: 'Posición 3º en combate',
            url: 'https://pokepast.es/8856e404f1cd5ec8',
            accent: 'teal'
        }
    ],

    buildNotes: [
        {
            title: 'Ampharos y Reuniclus',
            tag: 'Prioridad de Crianza (Bulk)',
            sprites: ['ampharos', 'reuniclus'],
            text: 'Deben criarse priorizando el aguante/durabilidad (<strong class="text-cobalt-600 dark:text-cobalt-400">bulk</strong>); <strong class="text-rose-600 dark:text-rose-400 uppercase">NO escatimes en esto</strong>.'
        },
        {
            title: 'Rotom-W (vs Jirachi)',
            tag: 'Control de Aggro / Velocidad',
            sprites: ['rotom-wash', 'jirachi'],
            text: 'Si no es lo suficientemente robusto (<strong class="text-cobalt-600 dark:text-cobalt-400">bulky</strong>) y lo atacan a él en lugar de a Jirachi, redúcele un poco la <strong>Velocidad</strong> a favor de la <strong>Defensa</strong> hasta que deje de ser el objetivo.'
        },
        {
            title: 'Ninetales',
            tag: 'Fragilidad & Fuego Fatuo',
            sprites: ['ninetales'],
            text: 'Necesita ser lo suficientemente frágil (<strong class="text-amber-600 dark:text-amber-400">squishy</strong>) como para caer derrotado de un solo <strong>Roca Afilada (Stone Edge)</strong>. Un Ninetales más lento puede funcionar con Pañuelo Elegido (Choice Scarf), pero fallará <strong>Fuego Fatuo (Will-O-Wisp)</strong>.'
        },
        {
            title: 'Nidoking (Acceso Raid)',
            tag: 'Surf / Ocarina / Battle Box',
            sprites: ['nidoking'],
            text: 'Puede aprender <strong>Surf</strong> para llegar a la guarida de la raid (raid den); el <strong>Jugador 1 (P1)</strong> necesitará la ocarina o tendrá que usar la nueva función de la <strong>Caja de Combate (Battle Box)</strong>.'
        }
    ],

    contingencies: [
        {
            severity: 'forfeit',
            badge: 'FORFEIT',
            condition: 'Fuego Fatuo (Will-O-Wisp) falla',
            action: 'ABANDONAR / RENUNCIAR (FORFEIT)',
            sprites: ['ninetales']
        },
        {
            severity: 'forfeit',
            badge: 'FORFEIT',
            condition: 'Whimsicott muere en el Turno 1 (T1)',
            action: 'ABANDONAR / RENUNCIAR (FORFEIT)',
            sprites: ['whimsicott']
        },
        {
            severity: 'forfeit',
            badge: 'FORFEIT',
            condition: 'El Heatran del Jugador 3 (P3) no recibe daño en el Turno 2 (T2)',
            action: 'ABANDONAR / RENUNCIAR (FORFEIT)',
            sprites: ['heatran']
        },
        {
            severity: 'forfeit',
            badge: 'FORFEIT',
            condition: 'El Heatran del Jugador 3 (P3) muere en el Turno 2 (T2)',
            action: 'ABANDONAR / RENUNCIAR (FORFEIT)',
            sprites: ['heatran']
        },
        {
            severity: 'adapt',
            badge: 'ADAPTAR',
            condition: 'Nidoking sobrevive al Turno 4 (T4)',
            action: 'Continuar de forma normal y guardar a Lucario para el final',
            sprites: ['nidoking', 'lucario']
        },
        {
            severity: 'adapt',
            badge: 'TURNO 8',
            condition: 'El Ampharos del Jugador 1 (P1) muere en el Turno 7 (T7)',
            action: 'Onda Certera (Focus Blast) con Lucario en el Turno 8 (T8)',
            sprites: ['ampharos', 'lucario']
        },
        {
            severity: 'adapt',
            badge: 'TURNO 9',
            condition: 'El Reuniclus del Jugador 4 (P4) muere en el Turno 8 (T8)',
            action: 'Onda Certera (Focus Blast) con Lucario en el Turno 9 (T9)',
            sprites: ['reuniclus', 'lucario']
        },
        {
            severity: 'warning',
            badge: 'REGLA DE ORO',
            condition: 'Daño insuficiente para debilitar / limpiar',
            action: 'NADA DE APOSTAR CON ONDA CERTERA (FOCUS BLAST) SIN GRAVEDAD (GRAVITY)',
            sprites: ['lucario', 'ampharos']
        }
    ]
};
