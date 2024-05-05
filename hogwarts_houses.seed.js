const mongoose=require(`mongoose`);
const Houses=require(`./src/api/models/hogwarts_houses`);
const houses=[
    {
        "name": "Gryffindor",
        "description": "La casa de los valientes, donde se valoran el coraje, la valentía y la audacia. Sus miembros suelen ser conocidos por su espíritu intrépido y su disposición para enfrentar los desafíos con determinación.",
        "mascot": "León"
    },
    {
        "name": "Slytherin",
        "description": "La casa de los ambiciosos y astutos, donde se valoran la determinación, la astucia y la determinación para alcanzar el éxito a cualquier costo. Sus miembros suelen ser estratégicos y están dispuestos a hacer lo que sea necesario para lograr sus objetivos.",
        "mascot": "Serpiente"
    },
    {
        "name": "Ravenclaw",
        "description": "La casa de los sabios, donde se valoran la inteligencia, la creatividad y la sabiduría. Sus miembros suelen ser curiosos y tienen una pasión por el conocimiento, buscando constantemente aprender y comprender el mundo que les rodea.",
        "mascot": "Águila"
    },
    {
        "name": "Hufflepuff",
        "description": "La casa de los leales y justos, donde se valoran la amabilidad, la lealtad y la dedicación. Sus miembros suelen ser trabajadores y valoran la igualdad y la amistad por encima de todo, buscando siempre hacer lo correcto.",
        "mascot": "Tejón"
    }
]

const housesDocument=houses.map(houses => new Houses (houses));

mongoose.connect('mongodb+srv://desarrollo171094:Robe1974@cluster0.pvbvvfs.mongodb.net/movie-harry-potter?retryWrites=true&w=majority&appName=Cluster0')
.then(async()=>{
await Houses.insertMany(housesDocument);
})

.catch((error)=>console.log(error))
.finally(()=>mongoose.disconnect());

  