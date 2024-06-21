import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string,
  message: string,
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  email,
  phone,
  message
}) => (
  <div className='bg-background text-text flex flex-col justify-center items-center'>
    <h1 className='text-primary'>Message received from: </h1>
    <p>Name: {firstName}{" "}{lastName}</p>
    <p>Email: {email}</p>
    <p>Phone Number: {phone}</p>
    <p>Query: {message}</p>
  </div>
);
