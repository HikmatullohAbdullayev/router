import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const defaultContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minus culpa nesciunt, distinctio est impedit molestias iure nulla iusto deleniti possimus reiciendis, quo optio fugit minima, ea veniam? Iste, dolor.";


const left =[
    {
        id:"1",
        title:"What is StreamVibe?",
        number:"01",
        label:"1"
    },
    {
        id:"2",
        title:"How much does StreamVibe cost?",
        number:"02",
        label:"2"
    },
    {
        id:"3",
        title:"What content is available on StreamVibe?",
        number:"03",
        label:"3"
    },
    {
        id:"4",
        title:"How can I watch StreamVibe?",
        number:"04",
        label:"4"
    },
]

const rigth = [
    {
        id:"5",
        title:"How do I sign up for StreamVibe?",
        number:"05",
        label:"5"
    },
    {
        id:"6",
        title:"What is the StreamVibe free trial?",
        number:"06",
        label:"6"
    },
    {
        id:"7",
        title:"How do I contact StreamVibe customer support?",
        number:"07",
        label:"7"
    },
    {
        id:"8",
        title:"What are the StreamVibe payment methods?",
        number:"08",
        label:"8"
    },
]

function Accardion(props) {
    return (
        <div className="accordion flex justify-between items-center">
        <div className="left mr-1 w-1/2">
          <Accordion className=" " variant="splitted">
            {left.map((item) => (

            <AccordionItem
              className="text-white "
              key={item.id}
              aria-label={item.label}
              title={
                <div className="flex justify-between items-center p-2">
                  <span className=" p-3 bg-[#1F1F1F] font-bold rounded-lg ">{item.number}</span>
                  <p className="font-semibold text-xl ml-5">
                    {item.title}
                  </p>
                </div>
              }
            ><p className="p-2">
            {defaultContent}</p>
            </AccordionItem>
            ))}
            
          </Accordion>
        </div>
        <div className="rigth ml-1 w-1/2">
        <Accordion className=" " variant="splitted">
        {rigth.map((item) => (

<AccordionItem
  className="text-white "
  key={item.id}
  aria-label={item.label}
  title={
    <div className="flex justify-between items-center p-2">
      <span className=" p-3 bg-[#1F1F1F] font-bold rounded-lg ">{item.number}</span>
      <p className="font-semibold text-xl ml-5">
        {item.title}
      </p>
    </div>
  }
><p className="p-2">
            {defaultContent}</p>
</AccordionItem>
))}
          </Accordion>
        </div>
      </div>
    );
}

export default Accardion;