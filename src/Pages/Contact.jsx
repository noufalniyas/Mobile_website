import {useState} from 'react'
import './CSS/Contact.css'
import Form from 'react-bootstrap/Form'
const Contact = () => {

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8b71f78f-c71d-4666-9ecb-ccb4392dabe8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(<p className='fs-3 text-center'>Form Submitted Successfully</p>);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        
        <div className="contact-content">
            <h1 className='text-center pt-5'>Get In Touch With Us</h1>
            <p className='text-center text-danger fw-bold'>Get Your mobile ready with an amazing offers</p>
        </div>


        <div className="form-content">
        <Form className='form' onSubmit={onSubmit}>
            <div className="Firstname">
                <label>FirstName</label>
                <input type='text' placeholder='Your Name' name='firstName' required/>
            </div>
            
            <div className="Phone">
                <label>Phone</label>
                <input type='numeric' placeholder='Your Phone Number' name='Phone' required/>
            </div>
            <div className="Email">
                <label>Email</label>
                <input type='email' placeholder='Your Email ID' name='Phone' required />
            </div>
            <div className="message">
                <label>Message</label>
                <textarea name="message" className='message-text'></textarea>
            </div>

            <div className="submitBtn">
                <button className='contact'>Get In Touch </button>
            </div>
        </Form>
        <span>{result}</span>
        </div>
      
    
    </div>
  )
}

export default Contact
