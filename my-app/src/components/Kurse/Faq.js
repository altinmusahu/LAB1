import React, { useState } from 'react';
import '../Kurse/Faq';
import {AiOutlinePlusCircle} from 'react-icons/ai';
function FaqComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className='Pytjet'>
    <h2 className='PytjetESh'> 
        FAQs
    </h2>


    <div className={`faq ${isOpen ? 'open' : ''}`}>
      <button className="faq-btn-Question" onClick={handleClick}>
        <AiOutlinePlusCircle style={{ position:'relative' , top:'0.2em'}}/>
       Pyetja
      </button>
      {isOpen && (
        <div className="faqs__container">
          <div className="faq1">
            <div className="faqs__container">
              <div className="faq1">
                <article className="faq" >
                  <div className="faq-Answer" >
                    <h5>
                    asdasd</h5>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <div className={`faq ${isOpen ? 'open' : ''}`}>
      <button className="faq-btn-Question" onClick={handleClick}>
        <AiOutlinePlusCircle style={{ position:'relative' , top:'0.2em'}}/>
       Pyetja
      </button>
      {isOpen && (
        <div className="faqs__container">
          <div className="faq1">
            <div className="faqs__container">
              <div className="faq1">
                <article className="faq" >
                  <div className="faq-Answer" >
                    <h5>
                    asdasd</h5>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <div className={`faq ${isOpen ? 'open' : ''}`}>
      <button className="faq-btn-Question" onClick={handleClick}>
        <AiOutlinePlusCircle style={{ position:'relative' , top:'0.2em'}}/>
       Pyetja
      </button>
      {isOpen && (
        <div className="faqs__container">
          <div className="faq1">
            <div className="faqs__container">
              <div className="faq1">
                <article className="faq" >
                  <div className="faq-Answer" >
                    <h5>
                    asdasd</h5>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div></>
  );
}

export default FaqComponent;


// import React, { useState } from 'react';
// import { AiOutlinePlusCircle } from 'react-icons/ai';

// function FaqComponent() {
//   const [openIndex, setOpenIndex] = useState(-1);

//   const handleClick = (index) => {
//     setOpenIndex(index === openIndex ? -1 : index);
//   };

//   return (
//     <>
//       <div className='Pytjet'>
//         <h2 className='PytjetESh'>
//           FAQs
//         </h2>

//         <div className='faq-container'>
//           <div className='faq'>
//             {faqData.map((faq, index) => (
//               <div key={index} className={`faq-item ${index === openIndex ? 'open' : ''}`}>
//                 <button className='faq-btn-Question' onClick={() => handleClick(index)}>
//                   <AiOutlinePlusCircle style={{ position: 'relative', top: '0.2em' }} />
//                   {faq.question}
//                 </button>
//                 {index === openIndex && (
//                   <div className='faq-Answer'>
//                     <h5>{faq.answer}</h5>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default FaqComponent;