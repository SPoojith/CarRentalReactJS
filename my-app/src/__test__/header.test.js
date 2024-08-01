import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../header/header';
import ComponentTest from '../mainBody/compotest';

describe("ComponentTest",()=>{
    it("should check header function",async ()=>{
        render(<ComponentTest />);
        const element = await screen.findByText("this is component");
        expect(element).toBeInTheDocument()
    })
})