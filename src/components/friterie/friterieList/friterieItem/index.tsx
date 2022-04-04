import IFretierie from "../../../../core/model/iFriterie";

interface FriterieItemProps{
    friterie: IFretierie;
}

export default function FriterieItem(props: FriterieItemProps){
    return ( 
        <div>
            <span>
                {props.friterie.name}
            </span>
            <span>
                {props.friterie.address}
            </span>
        </div>
    )
}