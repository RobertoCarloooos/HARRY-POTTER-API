const mongoose=require(`mongoose`);
const Personage=require(`./src/api/models/personage.model`);
const personages=[
  {
      "name": "Harry Potter",
      "description": "El niño que vivió, famoso por derrotar a Lord Voldemort cuando era un bebé.",
      "belonging": "El Ejército de Dumbledore",
      "age": 24
  },
  {
      "name": "Hermione Granger",
      "description": "Una brillante y valiente bruja, conocida por su inteligencia y dedicación.",
      "belonging": "El Ejército de Dumbledore",
      "age": 25
  },
  {
      "name": "Ron Weasley",
      "description": "El mejor amigo de Harry, miembro de una familia de renombre en el mundo de la magia.",
      "belonging": "El Ejército de Dumbledore",
      "age": 25
  },
  {
      "name": "Draco Malfoy",
      "description": "Un estudiante de sangre pura de Slytherin, con una relación complicada con Harry Potter.",
      "belonging": "Mortífagos (anteriormente)",
      "age": 26
  },
  {
      "name": "Albus Dumbledore",
      "description": "El director de Hogwarts y uno de los magos más poderosos de su tiempo.",
      "belonging": "Orden del Fénix",
      "age": 115
  },
  {
      "name": "Severus Snape",
      "description": "Profesor de Pociones y luego director de Slytherin, con una historia compleja y un profundo amor por Lily Potter.",
      "belonging": "Mortífagos (anteriormente), Orden del Fénix",
      "age": 38
  },
  {
      "name": "Sirius Black",
      "description": "El padrino de Harry y amigo cercano de James Potter, injustamente encarcelado en Azkaban durante años.",
      "belonging": "Orden del Fénix",
      "age": 41
  },
  {
      "name": "Remus Lupin",
      "description": "Un hombre lobo y amigo de los padres de Harry, que enseñó Defensa Contra las Artes Oscuras en Hogwarts.",
      "belonging": "Orden del Fénix",
      "age": 45
  },
  {
      "name": "Neville Longbottom",
      "description": "Un estudiante de Gryffindor que demostró ser valiente y habilidoso, especialmente en la Batalla de Hogwarts.",
      "belonging": "El Ejército de Dumbledore",
      "age": 25
  },
  {
      "name": "Luna Lovegood",
      "description": "Una estudiante excéntrica y soñadora de Ravenclaw, conocida por su perspectiva única del mundo mágico.",
      "belonging": "El Ejército de Dumbledore",
      "age": 25
  }
]



    const personagesDocument=personages.map(personage => new Personage (personage));

    mongoose.connect('mongodb+srv://desarrollo171094:Robe1974@cluster0.pvbvvfs.mongodb.net/movie-harry-potter?retryWrites=true&w=majority&appName=Cluster0')
    .then(async()=>{
    await Personage.insertMany(personagesDocument);
    })

.catch((error)=>console.log(error))
.finally(()=>mongoose.disconnect());
   