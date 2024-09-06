import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TextBox from '../Components/TextBox.jsx'
import TextArea from '../Components/TextArea.jsx'
import ToggleSwitch from '../Components/ToggleSwitch.jsx'
import CheckBox from '../Components/CheckBox.jsx'
import RadioButtonGroup from '../Components/RadioButton.jsx'
import SelectOption from '../Components/SelectOption.jsx'
import MultiSelectOption from '../Components/MultiSelectOption.jsx'
import FileUpload from '../Components/FileUpload.jsx'
import SelectDate from '../Components/SelectDate.jsx'
import SubmitButton from '../Components/SubmitButton.jsx'

import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <TextBox/>
    <TextArea/>
    <ToggleSwitch/>
    <CheckBox/>
    <RadioButtonGroup/>
    <SelectOption/>
    <MultiSelectOption/>
    <FileUpload/>
    <SelectDate/> */}
    <App/>
  </StrictMode>,
)
