import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_6kj4nic';
const EMAILJS_TEMPLATE_ID = 'template_wlfmcnf';
const EMAILJS_PUBLIC_KEY = '8BQMplODa7HqSNQuM'; // Replace with your actual public key

// Initialize EmailJS (optional - can be done in main.tsx or App.tsx)
export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};

// Send email function
export const sendEmail = async (templateParams: {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_name?: string;
}) => {
  try {
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );
    
    console.log('Email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
};

// Alternative method using emailjs.sendForm for form elements
export const sendFormEmail = async (form: HTMLFormElement) => {
  try {
    const response = await emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      form,
      EMAILJS_PUBLIC_KEY
    );
    
    console.log('Form email sent successfully:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Failed to send form email:', error);
    return { success: false, error };
  }
};