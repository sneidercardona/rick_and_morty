import Card from './Card';

function Cards({characters}) {
   
   return <div>
   {
      characters.map((characters)=>{
         return <Card 
         key={characters.id}
         name={characters.name}
         species={characters.species}
         gander ={characters.gander}
         image = {characters.image}
         onClose ={() => window.alert('Emulamos que se esta cerrando la card')}
         />
      })
   }
   </div>;
}

export default Cards;
