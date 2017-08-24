import React from 'react';

const basicInfo = [
    {
        field: {
            'ES': 'Nombre',
            'EN': 'Name',
            'FR': 'Nom'
        },
        value: 'Henry Angulo',
    },
    {
        field: {
            'ES': 'Fecha de nacimiento',
            'EN': 'Date of birth',
            'FR': 'Date de naissance',
        },
        value: '16/03/1994 (23)'
    },
    {
        field: {
            'ES': 'Número telefonico',
            'EN': 'Phone number',
            'FR': 'Numéro de téléphone',
        },
        value: '+56 9 72318699'
    },
    {
        field: {
            'ES': 'Correo electronico',
            'EN': 'Email',
            'FR': 'E-mail',
        },
        value: 'Hmac1994@gmail.com'
    }
]

const skillInfo = {
    'ES': [
        {
            title: 'FRONT-END',
            content: <div><p><b>Lenguajes</b></p>
                    <ul>
                        <li>Javascript(ES6)</li>
                        <li>HTML & CSS</li>
                    </ul>
                    <p><b>Frameworks & Librerias</b></p>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Angular</li>
                        <li>Jquery</li>
                        <li>Bootstrap</li>
                        <li>Foundation</li>
                        <li>Materialize CSS</li>
                    </ul>
                    <p><b>Preprocesadores</b></p>
                    <ul>
                        <li>Sass</li>
                        <li>Less</li>
                        <li>HAML</li>
                        <li>Jade</li>
                        <li>Handlebars.js</li>
                    </ul>
                    <p><b>Otros</b></p>
                    <ul>
                        <li>GIT & Github</li>
                        <li>Wordpress</li>
                        <li>Npm</li>
                        <li>Webpack</li>
                        <li>Gulp</li>
                    </ul></div>
        },
        {
            title: 'BACK-END',
            content: <div><p><b>Lenguajes</b></p>
                    <ul>
                        <li>Javascript(NodeJS)</li>
                        <li>Python</li>
                    </ul>
                    <p><b>Frameworks & Librerias</b></p>
                    <ul>
                        <li>Express.js</li>
                        <li>Loopback</li>
                        <li>Mongoose</li>
                    </ul>
                    <p><b>Bases de datos</b></p>
                    <ul>
                        <li>MongoDB</li>
                        <li>Redis</li>
                        <li>SQL(MySQL & SQLite)</li>
                    </ul>
                    <p><b>Otros</b></p>
                    <ul>
                        <li>JSON Web Token (JWT), </li>
                        <li>OAuth</li>
                        <li>Socket.io</li>
                        <li>GraphQL</li>
                        <li>REST</li>
                    </ul></div>
        },
        {
            title: 'MOBILE',
            content: <div><p><b>Lenguajes</b></p>
                    <ul>
                        <li>Javascript</li>
                    </ul>
                    <p><b>Frameworks & Librerias</b></p>
                    <ul>
                        <li>Ionic</li>
                        <li>Cordova</li>
                        <li>React Native</li>
                    </ul></div>
        },
        {
            title: 'MISCELÁNEO',
            content: <div><p><b>Idiomas</b></p>
                    <ul>
                        <li>Español: Nativo.</li>
                        <li>Inglés: Avanzado.</li>
                        <li>Francés: Medio-Avanzado.</li>
                    </ul>
                    <p><b>Diseño</b></p>
                    <ul>
                        <li>Photoshop: Basico-Intermedio.</li>
                        <li>Illustrator: Basico-Intermedio</li>
                    </ul>
                    <p><b>Interpersonales</b></p>
                    <ul>
                        <li>Responsable.</li>
                        <li>Creativo.</li>
                        <li>Proactivo.</li>
                        <li>Excelentes habilidades de comunicación orales y escritas.</li>
                        <li>Trabajo en equipo y bajo presión.</li>
                        <li>Apasionado por seguir aprendiendo.</li>
                    </ul></div>
        },
    ],
    'EN': [
        {
            title: 'FRONT-END',
            content: <div><p><b>Languages</b></p>
                    <ul>
                        <li>Javascript(ES6)</li>
                        <li>HTML & CSS</li>
                    </ul>
                    <p><b>Frameworks & Libraries</b></p>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Angular</li>
                        <li>Jquery</li>
                        <li>Bootstrap</li>
                        <li>Foundation</li>
                        <li>Materialize CSS</li>
                    </ul>
                    <p><b>Preprocessors</b></p>
                    <ul>
                        <li>Sass</li>
                        <li>Less</li>
                        <li>HAML</li>
                        <li>Jade</li>
                        <li>Handlebars.js</li>
                    </ul>
                    <p><b>Others</b></p>
                    <ul>
                        <li>GIT & Github</li>
                        <li>Wordpress</li>
                        <li>Npm</li>
                        <li>Webpack</li>
                        <li>Gulp</li>
                    </ul></div>
        },
        {
            title: 'BACK-END',
            content: <div><p><b>Languages</b></p>
                    <ul>
                        <li>Javascript(NodeJS)</li>
                        <li>Python</li>
                    </ul>
                    <p><b>Frameworks & Libraries</b></p>
                    <ul>
                        <li>Express.js</li>
                        <li>Loopback</li>
                        <li>Mongoose</li>
                    </ul>
                    <p><b>Databases</b></p>
                    <ul>
                        <li>MongoDB</li>
                        <li>Redis</li>
                        <li>SQL(MySQL & SQLite)</li>
                    </ul>
                    <p><b>Others</b></p>
                    <ul>
                        <li>JSON Web Token (JWT), </li>
                        <li>OAuth</li>
                        <li>Socket.io</li>
                        <li>GraphQL</li>
                        <li>REST</li>
                    </ul></div>
        },
        {
            title: 'MOBILE',
            content: <div><p><b>Languages</b></p>
                    <ul>
                        <li>Javascript</li>
                    </ul>
                    <p><b>Frameworks & Libraries</b></p>
                    <ul>
                        <li>Ionic</li>
                        <li>Cordova</li>
                        <li>React Native</li>
                    </ul></div>
        },
        {
            title: 'MISCELLANEOUS',
            content: <div><p><b>Languages</b></p>
                    <ul>
                        <li>Spanish: Native.</li>
                        <li>English: Advanced.</li>
                        <li>French: Intermediate-Advanced.</li>
                    </ul>
                    <p><b>Design</b></p>
                    <ul>
                        <li>Photoshop: Basic-Intermediate.</li>
                        <li>Illustrator: Basic-Intermediate</li>
                    </ul>
                    <p><b>Interpersonal</b></p>
                    <ul>
                        <li>Responsible.</li>
                        <li>Creative.</li>
                        <li>Proactive.</li>
                        <li>Great comunnication skills, both oral and written.</li>
                        <li>Team work and work under pressure.</li>
                        <li>Passionate for contimious learning.</li>
                    </ul></div>
        },
    ],
    'FR': [
        {
            title: 'FRONT-END',
            content: <div><p><b>Langages</b></p>
                    <ul>
                        <li>Javascript(ES6)</li>
                        <li>HTML & CSS</li>
                    </ul>
                    <p><b>Frameworks & Librairies</b></p>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Angular</li>
                        <li>Jquery</li>
                        <li>Bootstrap</li>
                        <li>Foundation</li>
                        <li>Materialize CSS</li>
                    </ul>
                    <p><b>Préprocesseurs</b></p>
                    <ul>
                        <li>Sass</li>
                        <li>Less</li>
                        <li>HAML</li>
                        <li>Jade</li>
                        <li>Handlebars.js</li>
                    </ul>
                    <p><b>Autres</b></p>
                    <ul>
                        <li>GIT & Github</li>
                        <li>Wordpress</li>
                        <li>Npm</li>
                        <li>Webpack</li>
                        <li>Gulp</li>
                    </ul></div>
        },
        {
            title: 'BACK-END',
            content: <div><p><b>Langages</b></p>
                    <ul>
                        <li>Javascript(NodeJS)</li>
                        <li>Python</li>
                    </ul>
                    <p><b>Frameworks & Librairies</b></p>
                    <ul>
                        <li>Express.js</li>
                        <li>Loopback</li>
                        <li>Mongoose</li>
                    </ul>
                    <p><b>Bases de données</b></p>
                    <ul>
                        <li>MongoDB</li>
                        <li>Redis</li>
                        <li>SQL(MySQL & SQLite)</li>
                    </ul>
                    <p><b>Autres</b></p>
                    <ul>
                        <li>JSON Web Token (JWT), </li>
                        <li>OAuth</li>
                        <li>Socket.io</li>
                        <li>GraphQL</li>
                        <li>REST</li>
                    </ul></div>
        },
        {
            title: 'MOBILE',
            content: <div><p><b>Langages</b></p>
                    <ul>
                        <li>Javascript</li>
                    </ul>
                    <p><b>Frameworks & Librairies</b></p>
                    <ul>
                        <li>Ionic</li>
                        <li>Cordova</li>
                        <li>React Native</li>
                    </ul></div>
        },
        {
            title: 'DIVERS',
            content: <div><p><b>Langues</b></p>
                    <ul>
                        <li>Español: Natif.</li>
                        <li>Inglés: Avancé.</li>
                        <li>Francés: Intermédiaire-Avancé.</li>
                    </ul>
                    <p><b>Design</b></p>
                    <ul>
                        <li>Photoshop: De base-Intermédiaire.</li>
                        <li>Illustrator: De base-Intermédiaire</li>
                    </ul>
                    <p><b>Interpersonnelles</b></p>
                    <ul>
                        <li>Responsable.</li>
                        <li>Creatif.</li>
                        <li>Proactif.</li>
                        <li>D'excellentes compétences de communication, orales et écrites.</li>
                        <li>Travail en équipe et sous pression.</li>
                        <li>Passionné de continuer à apprendre.</li>
                    </ul></div>
        },
    ]
}

const expInfo = {
    'ES' : [
        {
            title: 'Desarrollador web freelance',
            subtitle: 'Agosto 2016 - Actualidad',
            content: <div><p>Desarrollador front-end para diversas agencias internacionales, trabajando junto con sus equipos de diseño para entregar soluciones web a sus clientes(ver portafolio).Las mencionadas agencias son:</p>
                    <ul>
                    <li>
                        <a href="http://www.cru1z.com/">Cru1z</a> (Perú)
                    </li>
                    <li>
                        <a href="http://dstorymachine.com/">DstoryMachine</a> (EEUU)
                    </li>
                    <li>
                        <a href="https://www.fusionet.es/">FusioNET</a> (España)
                    </li>
                    </ul></div>
        },
        {
            title: 'Analista de ambiente y permisiones.',
            subtitle: 'Alimentos Super-S. Septiembre 2015 - Febrero 2016',
            content: <div><p>Responsabilidaes:</p>
                    <ul>
                        <li>Supervisión de que la planta cumpla con las normativas legales y ambientales vigentes.</li>
                        <li>Coordinación con el personal de limpieza para el mantenimiento de la misma. </li>
                        <li>Proyectos de mejoras en el área ambiental. </li>
                    </ul></div>
        },
        {
            title: 'Pasante mantenimiento mecanico.',
            subtitle: 'Protinal Proagro. Abril 2015 - Septiembre 2015',
            content: <div><p>Responsabilidaes:</p>
                    <ul>
                        <li>Levantamiento de información técnica y propuesta de proyecto de mejoras en manejo de materiales.</li>
                        <li>Realización de los planos correspondientes.  </li>
                        <li>Apoyo en emisión de solicitudes de pedido y manejo de inventarios de repuestos mecánicos.</li>
                    </ul></div>
        },

    ],
    'EN' : [
        {
            title: 'Freelance web developer',
            subtitle: 'Agoust 2016 - Present',
            content: <div><p>Front-End developer for various international agencies, working together with their design teams to deliver web solutions to their customers (see portfolio). The aforementioned agencies are:</p>
                    <ul>
                    <li>
                        <a href="http://www.cru1z.com/">Cru1z</a> (Peru)
                    </li>
                    <li>
                        <a href="http://dstorymachine.com/">DstoryMachine</a> (EEUU)
                    </li>
                    <li>
                        <a href="https://www.fusionet.es/">FusioNET</a> (Spain)
                    </li>
                    </ul></div>
        },
        {
            title: 'Environment and permisions analyst .',
            subtitle: 'Alimentos Super-S. September 2015 - February 2016',
            content: <div><p>Responsabilities:</p>
                    <ul>
                        <li>Supervision that the plant complies with current legal and environmental regulations.</li>
                        <li>Coordination with the cleaning staff for the maintenance of the facility.</li>
                        <li>Improvement projects in the environmental area. </li>
                    </ul></div>
        },
        {
            title: 'Pasante mantenimiento mecanico.',
            subtitle: 'Protinal Proagro. April 2015 - September 2015',
            content: <div><p>Responsabilities:</p>
                    <ul>
                        <li>Technical information and project proposal for improvements in material handling.</li>
                        <li>Realization of the corresponding blueprints.</li>
                        <li>Support in issuing requests for orders and management of inventories of mechanical spare parts.</li>
                    </ul></div>
        },

    ],
    'FR' : [
        {
            title: 'Développeur web freelance',
            subtitle: 'Août 2016 - Present',
            content: <div><p>Développeur fron-end pour divers agences internationelles, en collaboration avec leurs équipes de design pour offrir des solutions Web à leurs clients (voir portfolio). Les agences susmentionnées sont:</p>
                    <ul>
                    <li>
                        <a href="http://www.cru1z.com/">Cru1z</a> (Pérou)
                    </li>
                    <li>
                        <a href="http://dstorymachine.com/">DstoryMachine</a> (EEUU)
                    </li>
                    <li>
                        <a href="https://www.fusionet.es/">FusioNET</a> (Espagne)
                    </li>
                    </ul></div>
        },
        {
            title: "Analyste de l'environnement et des permis",
            subtitle: 'Alimentos Super-S. Septembre 2015 - Fevrier 2016',
            content: <div><p>Responsabilités:</p>
                    <ul>
                        <li>Surveillance que l'usine respecte les réglementations légales et environnementales en vigueur.</li>
                        <li>Coordination avec le personnel de nettoyage pour le maintien de la même.</li>
                        <li>Projets d'amélioration dans le domaine environnemental. </li>
                    </ul></div>
        },
        {
            title: 'Stagiaire en maintenance mécanique.',
            subtitle: 'Protinal Proagro. Avril 2015 - Septembre 2015',
            content: <div><p>Responsabilités:</p>
                    <ul>
                        <li>Information technique et proposition de projet d'amélioration de la manutention des matériaux.</li>
                        <li>Réalisation des plans correspondants.</li>
                        <li>Soutien à la délivrance de demandes d'ordonnances et de gestion d'inventaires de pièces détachées mécaniques.</li>
                    </ul></div>
        },

    ],

}

const educInfo = {
    'ES': {
        title: 'Ingenieria Industrial',
        subtitle: 'Universidad Jose Antonio Paez. 2011-2016',
    },
    'EN': {
        title: 'Industrial Engineering',
        subtitle: 'University Jose Antonio Paez. 2011-2016',
    },
    'FR': {
        title: 'Ingénierie Industrielle',
        subtitle: 'Université Jose Antonio Paez. 2011-2016',
    },
}

const educComInfo = {
    'ES' : [
        {
            title: 'Idiomas: Inglés.',
            subtitle: 'Alpha Learning Institute. 2011-2013',
        },
        {
            title: 'Idiomas: Francés.',
            subtitle: 'Alliance Française. 2016-2017',
        },
        {
            title: 'Full Stack Web Development Certification.',
            subtitle: 'Free Code Camp. 2016-2017',
        },
        {
            title: 'Especialización: Full-Stack Web development.',
            subtitle: 'The Hong Kong University of Science and Technology. 2016-2017',
            content: <div><p>Especialización compuesta por 5 cursos divididos en 4 modulos de una semana de duración cada uno, obteniendo una puntuación final de 100%. Dichos cursos fueron (click para ver certificados):</p>
                        <ul>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/YVYZLGK46UN9">
                            HTML, CSS and JavaScript</a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/9HLWQGYMDKXH">Front-End Web UI Frameworks and Tools</a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/KB9ZUYMCJTBZ">Front-End JavaScript Frameworks: AngularJS</a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/WDVP2ZX4D5QF">Multiplatform Mobile App Development with Web Technologies</a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/QDLD8MGRAREH">Server-side Development with NodeJS</a>
                        </li>
                        </ul></div>
        },
        {
            title: 'Especialización: Python for everybody.',
            subtitle: 'University of Michigan. 2017',
            content: <div><p>Especialización compuesta por 4 cursos divididos en 6-7 modulos de una semana de duración cada uno, obteniendo una puntuación final de 100%. Dichos cursos fueron (click para ver certificados):</p>
                        <ul>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/B7LH66XHVTZY">Programming for Everybody (Getting Started with Python)</a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/X7AJYA7NSP8N">Python Data Structures</a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/FWBT9P6RXFAJ">Using Python to Access Web Data</a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/9KAF2T6QFD3Q">Using Databases with Python</a>
                        </li>
                        </ul></div>
        },
    ],
    'EN' : [
        {
            title: 'Languages: English.',
            subtitle: 'Alpha Learning Institute. 2011-2013',
        },
        {
            title: 'Languages: French.',
            subtitle: 'Alliance Française. 2016-2017',
        },
        {
            title: 'Full Stack Web Development Certification.',
            subtitle: 'Free Code Camp. 2016-2017',
        },
        {
            title: 'Specialization: Full-Stack Web development.',
            subtitle: 'The Hong Kong University of Science and Technology. 2016-2017',
            content: <div><p>Specialization composed of 5 courses divided into 4 one week long modules, obtaining a final score of 100%. These courses were (click to see Certificates):</p>
                        <ul>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/YVYZLGK46UN9">
                            HTML, CSS and JavaScript</a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/9HLWQGYMDKXH">Front-End Web UI Frameworks and Tools</a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/KB9ZUYMCJTBZ">Front-End JavaScript Frameworks: AngularJS</a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/WDVP2ZX4D5QF">Multiplatform Mobile App Development with Web Technologies</a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/QDLD8MGRAREH">Server-side Development with NodeJS</a>
                        </li>
                        </ul></div>
        },
        {
            title: 'Specialization: Python for everybody.',
            subtitle: 'University of Michigan. 2017',
            content: <div><p>Specialization composed of 4 courses divided into 6-7 one week long modules, obtaining a final score of 100%. These courses were (click to see Certificates):</p>
                        <ul>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/B7LH66XHVTZY">Programming for Everybody (Getting Started with Python)</a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/X7AJYA7NSP8N">Python Data Structures</a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/FWBT9P6RXFAJ">Using Python to Access Web Data</a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/9KAF2T6QFD3Q">Using Databases with Python</a>
                        </li>
                        </ul></div>
        },
    ],
    'FR' : [
        {
            title: 'Langues: Anglais.',
            subtitle: 'Alpha Learning Institute. 2011-2013',
        },
        {
            title: 'Langues: Français.',
            subtitle: 'Alliance Française. 2016-2017',
        },
        {
            title: 'Full Stack Web Development Certification.',
            subtitle: 'Free Code Camp. 2016-2017',
        },
        {
            title: 'Spécialisation: Full-Stack Web development.',
            subtitle: 'The Hong Kong University of Science and Technology. 2016-2017',
            content: <div><p>Spécialisation composée de 5 cours répartis en 4 modules d'une durée d'une semaine chacun, obtenant un score final de 100%. Ces cours ont été (cliquez-les pour voir les certificats):</p>
                        <ul>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/YVYZLGK46UN9">
                            HTML, CSS and JavaScript</a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/9HLWQGYMDKXH">Front-End Web UI Frameworks and Tools</a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/KB9ZUYMCJTBZ">Front-End JavaScript Frameworks: AngularJS</a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/WDVP2ZX4D5QF">Multiplatform Mobile App Development with Web Technologies</a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/QDLD8MGRAREH">Server-side Development with NodeJS</a>
                        </li>
                        </ul></div>
        },
        {
            title: 'Spécialisation: Python for everybody.',
            subtitle: 'University of Michigan. 2017',
            content: <div><p>Spécialisation composée de 5 cours répartis en 6-7 modules d'une durée d'une semaine chacun, obtenant un score final de 100%. Ces cours ont été (cliquez-les pour voir les certificats):</p>
                        <ul>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/B7LH66XHVTZY">Programming for Everybody (Getting Started with Python)</a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/X7AJYA7NSP8N">Python Data Structures</a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/FWBT9P6RXFAJ">Using Python to Access Web Data</a>
                        </li>
                        <li>
                            <a href="https://www.coursera.org/account/accomplishments/records/9KAF2T6QFD3Q">Using Databases with Python</a>
                        </li>
                        </ul></div>
        },
    ],
}

const titles = {
    'basicInfo' : {
        'ES':'Información basica',
        'EN':'Basic information',
        'FR':'Information de base' 
    },
    'skillInfo' : {
        'ES':'Habilidades',
        'EN':'Skills',
        'FR':'Compétences' 
    },
    'expInfo' : {
        'ES':'Experiencia Laboral',
        'EN':'Work experience',
        'FR':'Expérience de travail' 
    },
    'educInfo' : {
        'ES':'Educación superior',
        'EN':'Higher education',
        'FR':'Enseignement supérieur' 
    },
    'educComInfo' : {
        'ES':'Educación complementaria',
        'EN':'Complementary education',
        'FR':'Enseignement complémentaire' 
    },
}

export { basicInfo, skillInfo, expInfo, educInfo, educComInfo, titles };