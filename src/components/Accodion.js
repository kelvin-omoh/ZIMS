import React,{useState} from "react";
import AccodionDetails from "./AccodionDetails";

const Accodion = () => {
  
    const [list, setList] = useState([
        // {
        //     question: 'When is the best time to visit the zoo?',
        //     answer: 'The animals tend to be more active earlier in the morning and later in the afternoon during the summer months.'
        // },
        {
            question: 'How long does it take to go through the park?',
            answer: 'Visitors are allowed to enjoy the park at their own pace and should allow approximately three hours for the entire Bearizona adventure. Many of our guests stay even longer.'
        },
        // {
        //     question: 'What time do you feed the animals?',
        //     answer: 'We don not have set feeding times'
        // }, 
        {
            question: 'Why do some animals get bored?',
            answer: 'Boredom is a tough behavior to determine in exotic animals. When animals are comfortable in their environment they tend to spend more time relaxing or playing with other exhibit mates..'
        }, 
        {
            question: 'What is the purpose of behavioral enrichment?',
            answer: 'The purpose of behavioral enrichment is to improve the overall welfare of our animals and to create a habitat similar to what they would experience in the wild. Behavioral enrichment should be random, interesting, and novel. The goals of enrichment are to offer a sense of control by allowing animals to make choices and to stimulate species-appropriate behaviors.'
        },
        {
            question: 'Will I see all of the animals in the park?',
            answer: 'The animals at ZIMS have ample area to roam and may not be visible at all times. Please feel free to drive through the drive-thru portion of the park a second time to ensure that you get to see the best levels of activity from each species.'
        }
    
    ]);

  return (
    <div className="max-w-[1240px] mx-auto mt-11 py-4 p-4">
      <div className="text-center ">
        <h1>Frequently Asked Questions</h1>
        <p className="pt-3 text-xl">click on the question to expand the answer</p>
      </div>

      <div className=" mt- flex justify-center items-center">
        <div className="list w-full flex flex-col justify-center items-center">
          {/* begin item */}
         {list.map((item, key) => (
            <AccodionDetails key={key} datas={item}/>
         ))}

          {/* end item */}
        </div>
      </div>
    </div>
  );
};

export default Accodion;
