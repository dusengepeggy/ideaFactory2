
import { Html } from 'next/document';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ResponseData {
  message: string;
  error?: string;
}

export  async function POST(
  req: NextRequest,

) {

    const body =await req.json();
    const { from, subject, text, name} = body;

    
    
    if (!from || !subject || !text) {
      return new NextResponse(JSON.stringify({ message: 'Missing required fields' }),{status:500});
    }

   
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    // Define mail options
    const mailOptions = {
      from,
      to: process.env.EMAIL,
      subject,
      text,
      html:`<h3>Email from: ${from}</h3></br> <h4>Name of sender: ${name}</h4></br><p>${text}`
    };

    try {
      // Send email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      return new NextResponse(JSON.stringify({ message: 'Email sent successfully' }),{status:200});
    } catch (error) {
      console.error('Error sending email:', error);
      return new NextResponse(JSON.stringify({ message: 'Error sending the email' ,error}),{status:500});
    }

}
