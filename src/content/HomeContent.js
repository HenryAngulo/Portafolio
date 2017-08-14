import React from 'react' 

const headerSub = {
    'ES': 'Desarrollador Web Full-Stack',
    'EN': 'Full-Stack Web Developper',
    'FR': 'Full-Stack Développeur Web'
}

const introInfo ={
    'ES': <div><h3>Un poco sobre mí.</h3>
            <p>¡Hola! Bienvenido, mi nombre es Henry Angulo y soy un desarrollador web full stack. Soy un ingeniero industrial de profesión que se enamoró de lo que empezó como un hobbie: la programación. Me dedique de lleno al estudio de desarrollo web, y luego de algunos meses empecé a trabajar en proyectos en modalidad freelance. Actualmente, cuento con experiencia principalmente en tecnologías front-end. Además, de adolescente tuve un flechazo con el diseño gráfico, y esos años me dejaron diversas nociones básicas de diseño así como un dominio básico-intermedio de herramientas como Photoshop e Illustrator, un complemento valioso para cualquier desarrollador.<br/>
            A pesar de haber comenzado a incursionar en este grandioso mundo como front-end, tengo que confesar que mi pasión no acababa ahí: me daba mucha curiosidad cómo funcionaban las cosas en el “backstage”, quería aprender a crear las APIs, no solo interactuar con ellas. Fue un poco abrumador la cantidad de conocimientos y tecnologías que van ligados al back-end, y he descubierto que mientras más aprendes más te das cuenta de lo mucho que te falta (y eso, para mí, es emocionante). Por último, dado que los dispositivos móviles están ganando cada día más terreno, me adentré en el mundo del desarrollo de apps hibrido (para aprovechar mis conocimientos en Javascript). <br/>
            Ahora bien, fuera del mundo de la programación, soy un lector ávido de todo tipo de libros, me encantan las películas y las series (era de oro de la tv), me gustan los deportes (especialmente el futbol) y soy apasionado de aprender otros idiomas (van 3, hasta ahora).<br/>
            </p></div>,
    'EN': <div><h3>A little about me.</h3>
            <p>Hello! Welcome, my name is Henry Angulo and I am a full stack web developer. Even though i am an industrial engineer i fell in love with what started out as a hobby: programming.  I fully dedicated to study web development, and after a few months I started working on a few freelance projects. Currently, I have experience mainly in front-end technologies. In addition, as a teenager I had a crush on graphic design, and those years left me several basic notions of design as well as a basic-intermediate domain of tools such as Photoshop and Illustrator, a valuable complement to any developer.<br/>
            Despite having started to dabble in this great world as a front-end, I have to confess that my passion did not end there: I was very curious about how things worked in the backstage, and thus wanted to learn how to create APIs, not just interact with them. It was a bit overwhelming the amount of knowledge and technologies that are linked to the back end, and i then realized that the more you learn the more conscious you are of the long road ahead (and that, for me, is exciting). Finally, since mobile devices are gaining more ground every day, I went into the world of hybrid apps development (to leverage my knowledge in JavaScript). <br/> Now, when i am not programming, I am an avid reader of all kinds of books, I love movies and series (golden era of TV), I like sports (especially soocer) and I am passionate about learning other languages (i got 3 under my belt, so far). <br/> 
            </p></div>,
    'FR': <div><h3>Un peu sur moi.</h3>
            <p>Salut! Bienvenue, je m'apelle Henry Angulo et je suis un développeur Web Full-Stack. En tant qu'un nouveau diplomé d'ingénierie industrielle, je suis tombé en amour avec ce qui a commencé comme un passe-temps: la programmation. J'ai entièrement dédié à l'étude du développement Web, et après quelques mois, j'ai commencé à travailler sur quelques projets freelance. Actuellement, j'ai l'expérience principalement dans les technologies de front-end. En outre, comme un adolescent, j'ai eu un béguin pour le design graphique, et ces années m'a laissé plusieurs notions de base du design ainsi que d'un domaine de base-intermédiaire d'outils tels que Photoshop et Illustrator, un complément précieux à tout développeur. .<br/>
            Malgré avoir commencé à barboter dans ce grand monde comme un front end, je dois avouer que ma passion ne s'arrête pas là: j'étais très curieux de savoir comment les choses fonctionnent dans le "backstage", et donc voulu apprendre à créer des API, pas seulement interagir avec elles. Il était un peu écrasante la quantité de connaissances et de technologies qui sont liés à le backend, et j'ai ensuite réalisé que plus vous apprenez le plus conscient que vous êtes de la longue route à venir (et ce, pour moi, c'est excitant). Enfin, puisque les appareils mobiles gagnent plus de terrain chaque jour, je suis allé dans le monde du développement des applications hybrides (pour exploiter mes connaissances en JavaScript). <br/>
             Maintenant, quand je ne suis pas en train de programmer, je suis un lecteur avide de toutes sortes de livres, j'aime les films et les séries (Age d'Or de la télévision), j'aime les sports (surtout le football) et je suis passionné par l'apprentissage d'autres langues (je parle 3, jusqu'à présent)<br/>
            </p></div>,
}

const itemsInfo = {
    'ES': [
        {
            name: 'Front-end',
            src: './img/frontend.jpg',
            text: 'Buena experiencia en el desarrollo front-end, enfocado en usar las últimas tecnologias, buenas prácticas, frameworks, librerias y patrones de diseño para entregar interfaces limpias, totalmente responsive e interactivas que provean una excelente experiencia de usuario, sin olvidar el rendimiento y la accesibilidad. Actualmente mi libreria/framework de preferencia es React (con la cual está hecho este portafolio), pero he trabajado con Angular o solo jQuery, dependiendo de los requirimientos.'
        },
        {
            name: 'Back-end',
            src: './img/backend.jpg',
            text: 'Aunque mi fuerte es el front-end, poseo conocimientos practicos para la creacion de APIs (con NodeJS y Express), asi como la configuración y realizacion de queries a las bases de datos (relacionales, como mySQL, o noSql, como MongoDB). Además, estoy formandome en el uso de las web sockets (socket.io) para funcionalidades en tiempo real escalables.'
        },
        {
            name: 'Mobile',
            src: './img/mobile.jpg',
            text: 'Los dispositivos moviles ya son el mayor medio con el que los usuarios acceden a la web, nada ofrece una mejor experiencia de usuario que las apps, por lo que soluciones como las Apps hibridas y las PWA (progressive web apps) cobran popularidad y relevancia por la posibilidad de compartir código entre las diferentes plataformas: web, android e iOS, acortando asi el tiempo de desarrollo y los costos. Conozco Ionic + Angular + Cordova y estoy aprendiendo React Native.'
        },
    ],
    'EN': [
        {
            name: 'Front-end',
            src: './img/frontend.jpg',
            text: 'Experienced in front-end development, focused on using the latest technologies, good practices, frameworks, libraries and design patterns to deliver clean, fully responsive and interactive interfaces that provide an excellent user experience, without forgetting performance and accessibility. Currently my library/framework of preference is React (which i used to build this portfolio), but I have worked with angular or jQuery, depending on the requirements.'
        },
        {
            name: 'Back-end',
            src: './img/backend.jpg',
            text: 'Although my specialty is the front-end, I have practical knowledge for the creation of APIs (with NodeJS and Express) and configuration and querying of databases (relational, such as MySQL, or NOSQL, as MongoDB). In addition, I am starting to use Web Sockets (Socket.io) for scalable real-time functionality.'
        },
        {
            name: 'Mobile',
            src: './img/mobile.jpg',
            text: 'Mobile devices are already the most common way the users access the Web, and nothing offers a better user experience than the apps, therefore, solutions like the hybrid apps and the PWA (progressive web Apps) gain popularity and relevance thanks to the possibility of sharing code between the different platforms: Web, Android and IOS, shortening thus time of development and costs. I know Ionic + angular + Cordova and I am learning React Native.'
        },
    ],
    'FR': [
        {
            name: 'Front-end',
            src: './img/frontend.jpg',
            text: "Compétence dans le développement front-end, axé sur l'utilisation des dernières technologies, bonnes pratiques, frameworks, libraires et modèles de design pour offrir des interfaces propres, pleinement responsives et interactives qui fournissent une excellente expérience d'utilisateur, sans oublier le performance et l'accessibilité. Actuellement, ma libraire/framework de préférence est React (avec laquelle ce portefeuille est fait), mais j'ai travaillé avec Angular ou jQuery, selon les exigences."
        },
        {
            name: 'Back-end',
            src: './img/backend.jpg',
            text: "Bien que ma spécialité est le front-end, j'ai des connaissances pratiques pour la création d'APIs (avec NodeJS et Express) et la configuration et la réalisation de requêtes à des bases de données (relationnelles, comme MySQL, ou NoSQL, comme MongoDB). En outre, je suis en train de m'eduquer dans l'utilisation de Web Sockets (Socket.io) pour las fonctionnalités en temps réel."
        },
        {
            name: 'Mobile',
            src: './img/mobile.jpg',
            text: "Les appareils mobiles sont déjà le plus grand moyen avec lequel les utilisateurs accèdent au Web, rien n'offre une meilleure expérience d'utilisateur que les apps, par conséquent, des solutions comme les apps hybrides et les PWA (progressive Web Apps) gagnent de popularité et de pertinence par la possibilité de partage de code entre les différentes plates-formes: Web, Android et iOS, raccourcissant ainsi le temps de développement et les coûts. Je sais Ionic + Angular + Cordova et je suis en train d'apprendre React Native."
        },
    ],
}

export { headerSub, introInfo, itemsInfo };