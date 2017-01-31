---
layout: post_kevin
title: "Traduction: Développement Front-End dans le monde de l'Internet Des Objets"
author: kevin
category: frontend
---

Cet article est une traduction de ["Front-End Development in an Internet of Things World"](https://www.sitepoint.com/the-future-of-the-web-in-an-internet-of-things-world/), dont l'auteur est [Patrick Catanzariti](https://www.sitepoint.com/the-future-of-the-web-in-an-internet-of-things-world/). Je ne suis en aucun cas l'auteur de cet article, j'ai simplement eu envie de le traduire parce que j'aime ça et que je considère que beaucoup de ressources anglophones devraient être aussi à la portée des personnes qui ne parlent pas anglais.

<!--break-->

# Développement Front-End dans le monde de l'Internet Des Objets

Le World Wide Web a évolué constamment à travers ses 27 ans d'histoire. La façon d'afficher et de styliser le contenu est passé par de nombreuses phases, la plus récente étant l'émergence du web _responsive_, un Web qui s'adapte à plusieurs navigateurs et tailles d'écran. Avec un nombre toujours croissant d'Objets Connectés comme les Raspberry Pis, les smartwatches, les assistants personnels qui sont commandés par la voix, et plus encore, le potentiel du Web _responsive_ est mise à rude épreuve.

L'Internet des Objets signifie qu'encore plus d'outils peuvent potentiellement charger du contenu Web. Nous devons nous assurer que le Web reste accessible et utilisable pour ces dispositifs si nous voulons éviter une segmentation similaire à ce que nous avons eu entre les ordinateurs et les téléphones. La dernière chose que nous voulons c'est un Web conçu pour l'Internet des Objets, et un conçu pour les ordinateur et mobiles.

## Quels Objets Connectés pourraient afficher du Web?

![Un touchscreen pour RaspberryPi](/images/iot_01.jpg)

Une bonne partie des développeurs ne réalisent pas le nombre potentiel de dispositifs qui pourraient afficher du contenu Web dans le futur.

### Les Objets avec de petits affichages

Les dispositifs comme les [Raspberry Pis avec des écrans 2.4"](https://www.adafruit.com/categories/804) et plus ont le Wi-Fi, l'Ethernet, et même des connexions 3G/4G, leurs donnant tout le potentiel pour afficher du contenu Web. Ce contenu peut avoir la forme de page Web depuis le World Wide Web, ou depuis des pages Web locales pour les manuels d'objets embarqués, les outils contrôlés avec les pages Web et les tableaux de bords affichés en Web.

### Smartwatches

![Le navigateur web d'Android Web](/images/iot_02.jpg)

Les Smartwatches ont des écrans encore plus petits, avec des grandes palettes de couleurs et de résolutions. Alors que l'Apple Watch n'a pas encore de navigateur Web, Android dispose d'un [navigateur pour son Android Wear](https://play.google.com/store/apps/details?id=com.appfour.wearbrowser&hl=en) de Appfour et il y a toutes les chances pour qu'au fil du temps de plus en plus de montres connectées disposent de navigateurs Web (en espérant que quelqu'un conçoive l'application de manière à l'utiliser facilement!). Si le Web est vraiment _responsive_ et accessible partout, nous devrions être préparés pour cette situation. Que se passera-t-il si, dans le futur, quelqu'un lisant un email sur sa Smartwatch cliquera sur un lien Web? Un simple navigateur Web sur une puissante Smartwach n'est pas impossible.

### Les Assistants Personnels à commande vocale

![Echo de Amazon](/images/iot_03.jpg)

La nouvelle mode numérique est l'assistant vocal intelligent, comme Siri d'Apple, Echo Alexa d'Amazon, Google Now et Cortana de Microsoft. Le rôle de ces assistants dans une maison est d'éteindre ou d'allumer la lumière, mettre un réveil, ajuster la température et ainsi de suite. Ces services répondes aussi aux commandes vocales et aux questions avec les données qu'elles récupèrent de différents endroits sur le net, impliquant souvent de croiser chaque base de données des entreprises avec les informations à propos de la personne utilisant le service. Pour les personnes intéressées, j'ai (NDT: l'auteur original de l'article) écris des articles pour créer sa propre intelligence artificielle d'assistant sur SitePoint, comme [Five Simple Ways to Build Artificial Intelligence in 2016](https://www.sitepoint.com/five-simple-ways-to-build-artificial-intelligence-in-2016/) et une série sur [How to Build Your Own AI Assistant Using Api.ai](https://www.sitepoint.com/how-to-build-your-own-ai-assistant-using-api-ai/).

Au fil du temps avec les améliorations des intelligences artificielles et du _machine learning_, ces assistants pourraient parcourir le Web pour chercher des informations et nous les lire.

Pour que cela soit possible, il faut que le Web soit accessible aux Bots qui vont exploiter l'information plutôt que l'afficher. Dans l'idéal, les pages Web devraient déjà être structurées pour aider les lecteurs d'écran, cependant l'utilisation des outils d'accessibilité est souvent mis de côté aujourd'hui. L'émergence de services d'assistant personnel pourrait changer cela.

### De tout nouveaux affichages

Les écrans futurs, quand on parle d'Internet des Objets, peuvent apporter de nombreuses et fantastiques nouvelles possibilités. Pensez aux Smart Mirrors, aux Smart Windows (NDT: Ah ah, un Windows intelligent...), aux tableaux de bords de voitures, etc. Ceux-ci vont apparaître petit à petit dans notre vie, mais comment le Web s'affichera dessus? De nouvelles questions de conceptions sont à venir: pour afficher du contenu sur un miroir/une fenêtre, nous aurions besoin d'avoir un plus grand contraste de couleurs. Les écrans de miroir/fenêtre pourraient avoir une gamme de couleur limité, dont les développeurs auraient à prendre en compte? C'est en phase de devenir un tout nouveau monde.

![Un prototype de tableau de bord Mercedes Benz](/images/iot_04.jpg)

## Préparer notre CSS et notre Markup pour le futur

Il y a plusieurs points clés sur lesquels les développeurs web doivent concentrer leur attention, si vous voulons un Web qui convient à toutes ces nouvelles technologies.

### Du CSS vraiment Responsive

Les pages Web auront besoin de s'adapter et être relativement lisible sur de tout petits affichages. Détecter de toutes petites résolutions sera surement l'un des piliers ici d'un point de vue CSS. Est-ce que le CSS sur un tout petit écran sera similaire à un site sur mobile? Ou devons-nous créer des règles et des standards qui vont aider à afficher le texte dans une plus grande police? De nouveaux standards pour restructurer la disposition sur de petits écran en utilisant les flexbox? De nouveaux standards pour concevoir des menus sur de petits écrans? Seul le temps nous le dira, mais seule une poignée de développeurs Web seront pionniers dans cet effort et il sera fascinant de voir comment la communauté suivra.

### L'élément \<picture\>

L'élément picture nous permet de choisir plusieurs images en fonction de la résolution et du type d'écran. La version finale de cette spec sera clé pour avoir un web qui tournera bien lors du chargement de pages sur ce qui sera peut-être des objets avec peu de batteries et de faibles connections, et avec des objets avec de petites résolutions qui n'arriveront pas à afficher de larges images.

### La dépendance à JavaScript est dangereuse

Lorsque l'on regarde des dispositifs avec de petites batteries et des assistants personnels qui vont lire à voix haute le contenu de page web, il ne vont pas obligatoirement lancer du JavaScript ou être capable de le gérer de la même manière qu'un smartphone ou une tablette. Si votre site Web repose sur du JavaScript pour insérer ses données sans aucun moyen alternatifs, les derniers Objets Connectés pourraient avoir des problèmes à y accéder. S'assurer que le Web fonctionne même sans JavaScript est un effort valable!

### WAI-ARIA et autres techniques d'Accessibilité

Les techniques déjà en place pour rendre accessible le Web aux personnes qui ont des handicaps permettront aussi de rendre le web accessible aux intelligences artificielles, aux assistants personnels et autres technologies basées sur la voix. Créer des sites Web avec les outils WAI-ARIA et les autres techniques pour l'accessibilité dès aujourd'hui permettra de réduire le travail nécessaire dans le futur. C'est aussi extrêmement utile pour les personnes qui vivent avec un handicap, et dans tous les cas c'est une bonne pratique. Nous parlons de ce sujet en détail dans [How to Use ARIA Effectively with HTML5](https://www.sitepoint.com/how-to-use-aria-effectively-with-html5/) et [Avoiding Redundancy with WAI-ARIA in HTML pages](https://www.sitepoint.com/avoiding-redundancy-wai-aria-html-pages/).

### Choix de conception

Les écrans des miroirs et fenêtres auront probablement besoin d'un grand contraste de couleur dans votre design pour s'assurer qu'il soit visible sur la plupart des fonds: une baignoire, un ciel, une autre salle, etc.

Les écrans comme les Smart Mirors affichent du contenu similaire au "Mode contraste élevé" qu'on voit sur les systèmes d'exploitation, ce mode qui inverse les couleurs de l'écran et augmente le contraste. Afin d'afficher sur des affichages aussi différents, les Smart Mirrors pourraient adopter des techniques similaires. Si vos designs Web sont construits de telle sorte qu'il s'affichent correctement dans ce mode et ont de forts contrastes de couleur, alors ça ne devrait pas être un gros problème pour vous.

![Une version de SitePoint avec un haut contraste](/images/iot_05.jpg)

## Complexité du DOM

Si les PC et Smartwatches sont capables de gérer des DOM complexes avec de nombreux éléments imbriqués et de transitions CSS, il n'en sera peut-être pas de même avec les Objets Connectés et risquent d'avoir des problèmes avec. Garder une structure propre pour vos éléments DOM sera plus important que jamais pour les performances sur ces nouveaux outils.

## Les Tests deviendront difficiles

Il est déjà bien difficile de tester son site Web sur une large gamme de smartphones, de tablettes, de Smart TV, et de PC de bureau. Et comme l'Internet des Objets va aller en grandissant (la réalité augmenté et virtuelle arrive aussi!), cela deviendra beaucoup plus difficile de tout tester. Adopter des standards Web, des standards d'accessibilité, et d'autres idées mentionnées au-dessus vont aider à rendre le Web le plus accessible possible.

Un certain niveau sera nécessaire pour les développeurs Web professionnels dans les décennies à venir puisqu'il devront avoir une vision de conception Web et devront ajuster leurs affichages sur une large gamme d'appareils sans avoir d'accès physique a ceux-ci pour les tester. Heureusement, des émulateurs et des tests automatisés vont aider dans cette tâche.

## Une API omniprésente

Un Web _reponsive_ ne sera pas la seule source d'information Web pour l'Internet des Objets. Il aura un compagnon qui est tout aussi important et dont j'avais déjà parlé: l'[API omniprésente]. Ce sera l'équivalent coté serveur du web qui devra permettre des itérations et adaptations rapides pour les nouvelles technologies dans des domaines que les navigateurs Web ne peuvent pas atteindre. Une API omniprésente fournit des fonctionnalités et données d'une application ou un service indépendamment de la plate-forme. Un manque d'APIs omniprésentes, combiné à un Web qui ne peut s'adapter assez rapidement, conduira à une grosse segmentation avec chaque nouvelle technologie.

Il est crucial que les deux coexistent. Notre Web _responsive_ devrait utiliser du contenu de nos API omniprésentes qui peut ensuite être adapté selon le type de technologie. Les appareils sans navigateur Web devraient avoir des applications qui prennent leur contenu de ces API. Lorsqu'un objet à accès à un navigateur, ce contenu devrait être aussi accessible avec du Web _responsive_. Pour plus d'informations sur les APIs omniprésentes, je vous invite à lire mon article [The Era of the Omnipresent API](https://devdiner.com/opinion/the-era-of-the-omnipresent-api).

## Conclusion

Les pratiques de développement Front-End n'ont pas _besoin_ de s'adapter ainsi à l'Internet des Objets et autres évolutions technologiques. Mais je pense que si ce n'est pas le cas, le Web sera segmenté avec d'un côté une utilisation pour bureau et de l'autre sur mobile, exactement comme le potentiel du Web _reponsive_ a été entravé par les applications mobiles. Si le Web ne s'adapte pas, nous aurons une segmentation avec des applications pour l'Internet des Objets. Les applications Alexa et autre auront leur propre silos, au lieu de partager un écosystème commun avec le web.

N'hésitez pas à dire ce que vous pensez du futur du développement Web avec les nouvelles technologies en contactant Patrick Catanzariti (NDT: L'auteur original, oubliez pas ;)) sur twitter à @thatpatricjguy.

<div class="ui icon message inverted">
<i class="icon sticky note"></i>
<div class="content">
Complètement hors-sujet (quoique): Je vais complètement refaire le site parce qu'il y a beaucoup de choses qui ne me plaisent pas en l'état, et même si j'ai refait un ou deux trucs vite-fait c'est très loin du résultat que je veux. Le rythme d'article risque d'en pâtir un peu malheureusement. Mais je veux que ce site me serve à beaucoup plus que simplement un blog, comme mettre correctement en avant mes derniers projets et contributions, afficher une sorte de CV, peut-être une galerie d'images, enfin des vrai commentaires sur mon site, etc. Donc la plupart des prochains articles seront des traductions. C'est un peu moins créatif mais au moins je change de style de contenu et je peux m'imprégner un peu du travail d'autres personnes pour apprendre. Donc comme on dit, stay tuned!
</div>
</div>
