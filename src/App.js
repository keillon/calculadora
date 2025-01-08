import Input from './components/Input'
import Button from './components/Button'

import { Container, Content, Row, Footer } from './styles'
import { useState } from 'react'

const App = () => {
  const [displayNumber, setDisplayNumber] = useState('0')
  const [storedNumber, setStoredNumber] = useState('0')
  const [operation, setOperation] = useState('')

  const handleClear = () => {
    setDisplayNumber('0')
    setStoredNumber('0')
    setOperation('')
  }

  const handleAddNumber = num => {
    setDisplayNumber(prev => prev === '0' ? num : `${prev}${num}`)
  }

  const handleSum = () => {
    if (storedNumber === '0') {
      setStoredNumber(displayNumber)
      setDisplayNumber('0')
      setOperation('+')
    } else {
      const sum = Number(storedNumber) + Number(displayNumber)
      setDisplayNumber(String(sum))
      setStoredNumber('0')
    }
  }

  const handleEqual = () => {
    switch (operation) {
      case '+':
        handleSum()
        break
      case '-':
        handleSubtract()
        break
      case '*':
        handleMultiply()
        break
      case '/':
        handleDivigit initgit remote remove originson()
        break
      default:
        break
    }
  }

  const handleSubtract = () => {
    if (storedNumber !== '0') {
      const subtract = Number(storedNumber) - Number(displayNumber)
      setDisplayNumber(String(subtract))
      setStoredNumber('0')
    } else {
      setStoredNumber(displayNumber)
      setDisplayNumber('0')
      setOperation('-')
    }
  }

  const handleMultiply = () => {
    if (storedNumber !== '0') {
      const result = Number(storedNumber) * Number(displayNumber)
      setDisplayNumber(String(result))
      setStoredNumber('0')
    } else {
      setStoredNumber(displayNumber)
      setDisplayNumber('0')
      setOperation('*')
    }
  }

  const handleDivison = () => {
    if (storedNumber !== '0' && displayNumber !== '0') {
      const result = Number(storedNumber) / Number(displayNumber)
      setDisplayNumber(String(result))
      setStoredNumber('0')
    } else {
      setStoredNumber(displayNumber)
      setDisplayNumber('0')
      setOperation('/')
    }
  }

  const handleAddZero = () => {
    if (displayNumber !== '0') {
      setDisplayNumber(`${displayNumber}0`)
    }
  }

  const handleDeleteLastNumber = () => {
    setDisplayNumber(displayNumber.slice(0, -1))
  }

  return (
    <Container>
      <Content>
        <Input value={displayNumber} />

        <Row>
          <Button label='AC' onClick={handleClear} />
          <Button label='C' onClick={handleDeleteLastNumber} />
          <Button label='/' onClick={handleDivison} />
          <Button label='*' onClick={handleMultiply} />
        </Row>

        <Row>
          <Button label='7' onClick={() => handleAddNumber('7')} />
          <Button label='8' onClick={() => handleAddNumber('8')} />
          <Button label='9' onClick={() => handleAddNumber('9')} />
          <Button label='-' onClick={handleSubtract} />
        </Row>

        <Row>
          <Button label='4' onClick={() => handleAddNumber('4')} />
          <Button label='5' onClick={() => handleAddNumber('5')} />
          <Button label='6' onClick={() => handleAddNumber('6')} />
          <Button label='+' onClick={handleSum} />
        </Row>

        <Row>
          <Button label='0' onClick={handleAddZero} />
          <Button label='1' onClick={() => handleAddNumber('1')} />
          <Button label='2' onClick={() => handleAddNumber('2')} />
          <Button label='3' onClick={() => handleAddNumber('3')} />
          <Button label='=' onClick={handleEqual} />

        </Row>
      </Content>
      <Footer className='footer'>Powered by:  <a href='https://github.com/keillon' target='_blank' rel="noreferrer"> Keillon silva</a></Footer>
    </Container>

  )
}

export default App
