import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Formulario, { mayorDeEdad } from "..\\components\\Formulario";

describe('mayorDeEdad', () => {
  test('devuelve un valor booleano', () => {
    expect(typeof mayorDeEdad(20)).toBe('boolean');
  });

  test('si la entrada es 18, devuelve true', () => {
    expect(mayorDeEdad(18)).toBe(true);
  });

  test('si la entrada es mayor a 18, devuelve un true', () => {
    expect(mayorDeEdad(25)).toBe(true);
  });

  test('si la entrada es menor a 18, devuelve false', () => {
    expect(mayorDeEdad(15)).toBe(false);
  });

  test('si la entrada es un número negativo, devuelve null', () => {
    expect(mayorDeEdad(-5)).toBe(null);
  });
  

  describe('Formulario Component', () => {
    it('renders de los elementos', () => {
        render(<Formulario />);
        const buttonElement = screen.getByRole('button', { name: /enviar/i });
        expect(buttonElement).toBeInTheDocument();
      });

      it('renders the image', () =>{
        render(<Formulario />);
        const catImageElement = screen.getByAltText('icono');
        expect(catImageElement).toBeInTheDocument();
        });
    
      it('renders the TextField', () => {
        render(<Formulario />);
        const textFieldElement = screen.getByLabelText('Nombre');
        expect(textFieldElement).toBeInTheDocument();
      });

      it('renders the TextField', () => {
        render(<Formulario />);
        const ageInput = screen.getByLabelText('Edad');
        expect(ageInput).toBeInTheDocument();
      });

      it('renders an h6 element', () => {
        render(<Formulario />);
        const headingElement = screen.getByRole('heading', { level: 6, name: /rellena el formulario/i });
        expect(headingElement).toBeInTheDocument();
      });
    });
});

