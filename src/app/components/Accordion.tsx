import Plus from "./icones/Plus";

type AccordionProps = {
  title : string;
  handleCLick: any;
  icon : React.ReactElement;
  accordionClass ?: string;
  activeClass ?: string;
  children: React.ReactNode;
};

export default function Accordion({
  title,
  handleCLick,
  icon,
  children,
  accordionClass,
  activeClass
}: AccordionProps) {

  return (

    <div className="container-xl">
      <div className="accordion">
        <div onClick={handleCLick} className={`accordion-principal ${activeClass}`}>
          <h5 className="accordion-title m-0">{title}</h5>
          <span className="plus-accordion"> {icon} </span>
        </div>

        <div className={`${accordionClass}`}>
          {children}
        </div>
      </div>
    </div>

  );

}
