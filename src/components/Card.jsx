import A from './Card.module.css'
export default function Card({name,gander,onClose,species,image}) {
   return (
         <div className={A.divs}>
            <button className={A.boton}  onClick={onClose}>X</button>
            <h2 className={A.stilo}>{name}</h2>
            <h2>{species}</h2>
            <h2>{gander}</h2>
            <img src={image} alt={name} />
         </div>
      );
   }
