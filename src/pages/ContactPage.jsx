import  { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm('contact_service', 'contact_form', form.current, {
      publicKey: 'service_12feasr',
    })
      .then(() => {
        console.log('SUCCESS!');
        setSubmitStatus('success');
        form.current.reset();
      }, (error) => {
        console.log('FAILED...', error.text);
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-6 text-center">Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input type="hidden" name="contact_number" value="697483" />
        <div>
          <label htmlFor="user_name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" name="user_name" id="user_name" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="user_email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" name="user_email" id="user_email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea name="message" id="message" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows="4"></textarea>
        </div>
        <div>
          <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </div>
      </form>
      {submitStatus === 'success' && (
        <p className="mt-4 text-green-600 text-center">Message sent successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="mt-4 text-red-600 text-center">Failed to send message. Please try again.</p>
      )}
    </div>
  );
};

export default ContactPage;