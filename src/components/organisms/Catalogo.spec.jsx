import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import Catalogo from "./Catalogo"


beforeEach(()=>{
    Storage.prototype.getItem = jest.fn(()=>
        JSON.stringify([])
    )
    Storage.prototype.setItem = jest.fn()
    console.log(JSON.parse(JSON.stringify([])))
})

describe('Catalogo component', ()=>{
    const mockProduct = {
        code: "1",
        image: "https://media.falabella.com/falabellaCL/144879483_01/w=1500,h=1500,fit=pad",
        name: "PlayStation 5",
        description: "Consola de última generación con gráficos impresionantes.",
        price: "599990"
    }

    it('muestra producto correctamente', ()=>{
        render(<Catalogo {...mockProduct}/>)
        expect(screen.getByText("PlayStation 5")).toBeInTheDocument()
        expect(screen.getByText("Consola de última generación con gráficos impresionantes.")).toBeInTheDocument()
        expect(screen.getByText("599990")).toBeInTheDocument()
    })

    it('se guarda en localStorage al hacer clic en guardar',()=>{
        render(<Catalogo {...mockProduct}/>)
        const button = screen.getByText("Añadir al carro")

        fireEvent.click(button)
        expect(localStorage.setItem).toHaveBeenCalledWith(
            'catalogo', JSON.stringify([mockProduct])
        )
    })
})