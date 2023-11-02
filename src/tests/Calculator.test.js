import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it("should add 1 & 4 to get 5",()=>{
    fireEvent.click(container.getByTestId("number1"))
    fireEvent.click(container.getByTestId("operator-add"))
    fireEvent.click(container.getByTestId("number4"))
    fireEvent.click(container.getByTestId("operator-equals"))
    expect(container.getByTestId("running-total").textContent).toEqual("5")
  })

  it("should subtract 4 from 7 to get 3",()=>{
    fireEvent.click(container.getByTestId("number7"))
    fireEvent.click(container.getByTestId("operator-subtract"))
    fireEvent.click(container.getByTestId("number4"))
    fireEvent.click(container.getByTestId("operator-equals"))
    expect(container.getByTestId("running-total").textContent).toEqual("3")
  })

  it("should multiply 3 by 5 to get 15",()=>{
    fireEvent.click(container.getByTestId("number3"))
    fireEvent.click(container.getByTestId("operator-multiply"))
    fireEvent.click(container.getByTestId("number5"))
    fireEvent.click(container.getByTestId("operator-equals"))
    expect(container.getByTestId("running-total").textContent).toEqual("15")
  })

  it("should divide 21 by 7 to get 3",()=>{
    fireEvent.click(container.getByTestId("number2"))
    fireEvent.click(container.getByTestId("number1"))
    fireEvent.click(container.getByTestId("operator-divide"))
    fireEvent.click(container.getByTestId("number7"))
    fireEvent.click(container.getByTestId("operator-equals"))
    expect(container.getByTestId("running-total").textContent).toEqual("3")
  })

  it("should concatenate multiple number clicks",()=>{
    fireEvent.click(container.getByTestId("number1"))
    fireEvent.click(container.getByTestId("number1"))
    fireEvent.click(container.getByTestId("number2"))
    fireEvent.click(container.getByTestId("number9"))
    fireEvent.click(container.getByTestId("number0"))
    expect(container.getByTestId("running-total").textContent).toEqual("11290")
  })

  it("should chain operations",()=>{
    fireEvent.click(container.getByTestId("number2"))
    fireEvent.click(container.getByTestId("number1"))
    fireEvent.click(container.getByTestId("operator-divide"))
    fireEvent.click(container.getByTestId("number7"))
    fireEvent.click(container.getByTestId("operator-add"))
    fireEvent.click(container.getByTestId("number3"))
    fireEvent.click(container.getByTestId("operator-equals"))
    expect(container.getByTestId("running-total").textContent).toEqual("6")
    // (21/7)+3=6
  })

  it("should clear running total without affecting calculations",()=>{
    fireEvent.click(container.getByTestId("number1"))
    fireEvent.click(container.getByTestId("number6"))
    fireEvent.click(container.getByTestId("operator-divide"))
    fireEvent.click(container.getByTestId("number2"))
    fireEvent.click(container.getByTestId("operator-divide"))
    fireEvent.click(container.getByTestId("number2"))
    fireEvent.click(container.getByTestId("operator-equals"))
    expect(container.getByTestId("running-total").textContent).toEqual("4")
    // (16/2)/2=4
    fireEvent.click(container.getByTestId("clear"))
    expect(container.getByTestId("running-total").textContent).toEqual("0")
    // previousTotal is still 4
    fireEvent.click(container.getByTestId("operator-divide"))
    fireEvent.click(container.getByTestId("number2"))
    fireEvent.click(container.getByTestId("operator-equals"))
    expect(container.getByTestId("running-total").textContent).toEqual("2")
    // 4/2=2
  })
})