import { useState } from "react"
import Accordion from "./Accordion"
import Minus from "./icones/Minus";
import Plus from "./icones/Plus";

export default function AccordionContainer({title, contentList, ...props} : {title ?: string, contentList ?: []}) {

    const accordionInfo = [
        {
            id: 1,
            title: "How can I open my account",
            info: "How can I open my account",
        },
        {
            id: 1,
            title: "How can I open my account",
            info: "How can I open my account",
        },
        {
            id: 1,
            title: "How can I open my account",
            info: "How can I open my account",
        },
        {
            id: 1,
            title: "How can I open my account",
            info: "How can I open my account",
        },
    ]

    const [selected, setSelected] = useState(-1);

    function handleClick(i: number) {
        if(selected == i) {
            setSelected(-1);
        }
        else setSelected(i);
    }

    return (

        <>
            {accordionInfo.map((element, i) => (
                <Accordion key={element.id} handleCLick={() => handleClick(i)} title = {element.title} icon={selected == i? <Minus /> : <Plus />} accordionClass={selected == i ? "accordion-principal accordion-content" : ""} activeClass={selected == i ? "active" : ""}>
                    {selected === i && 
                        <p className="m-0">{element.info}</p>}
                </Accordion>
            ))}
        </>

    )
}


//obtener el id del item que fue clickado
//actualizar su estado a active si es clicado
//si fue clicado se muestra la infod
