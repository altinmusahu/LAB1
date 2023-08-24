import React from 'react';
import './Ask.css';
const AskAQuestion = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    // Handle form submission logic here
    // You can make an HTTP request to "../ADMIN/Komente/insertComment.php" using fetch or any other method
    // Remember to handle the form data and any further actions you need to take
  };

  return (
 <>
 <div class="formaAsk">
              
            
            <form  className="askform">
              <h2 class='h2ask'>Ask a Question</h2>
              <div className='askName'>
              <input class='inputform' type="ename" placeholder="First Name"  id="name" name="name"/>   
              <input class='inputform'  type="surname" placeholder="Last Name"  id="surname" name="surname"/>
              </div>

              <div className='askEmailQ'>
              <input   class="inputform" type="email" placeholder="Email Address"  id="email" name="email"/>
              <textarea  name="Message" class="inputform" rows="7" placeholder="Ask a question" id="mesazhii"></textarea>
             </div>
              
              <button className='sendMessage' type="submit">Send</button>

              
                <p className='p1-form'>By creating your account, you agree to</p>
                <p className='p2-form'>Learnfy Privacy Policy and Terms of Use.</p> 
                
              
            </form>
</div>
    

 
 </>
  );
};

export default AskAQuestion;