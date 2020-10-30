import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import ContactForm from './ContactForm';

describe('Test ContactForm', ()=> {
    test('app renders without errors', ()=>{
        render(<ContactForm/>);
    });
});

test('user can fill out and submit form', async ()=> {
    render(<ContactForm/>)

    const firstInput = screen.getByLabelText(/first name*/i);
    const lastInput = screen.getByLabelText(/last name*/i);
    const emailInput = screen.getByLabelText(/email*/i);
    const messageInput = screen.getByLabelText(/message*/i);
    const buttonSubmit = screen.getByTestId(/submit/i)

    fireEvent.change(firstInput, {target : {value: 'Goku'}})
    fireEvent.change(lastInput, {target : {value: 'sayian'}})
    fireEvent.change(emailInput, {target : {value: 'gmoney@ssj.com'}})
    fireEvent.change(messageInput, {target : {value: 'Im starving!'}})
    fireEvent.click(buttonSubmit)

    const fName = await screen.findByText(/Goku/i)
    const lName = await screen.findByText(/sayian/i)
    const email = await screen.findByText(/gmoney@ssj.com/i)
    const message = await screen.findByText(/Im starving/i)

    expect(fName).toBeInTheDocument()
    expect(lName).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(message).toBeInTheDocument()

});