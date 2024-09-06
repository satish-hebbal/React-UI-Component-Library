import { useState } from 'react'
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
import mandirLOGO from "../public/assets/mandir2.png"
import mandirTEXT from "../public/assets/MMtext.png"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className=' bg-yellow-100 font-gilorySemiBold text-orange-700 h-14 flex justify-between px-24 items-center sticky top-0 z-50'> 
      <div className='flex items-center'> <img src={mandirLOGO} alt="Mandir Logo" className='h-10' /> UI Component Library</div>
      <div className=''><img src={mandirTEXT} alt="Mandir Text" className='h-10' /> </div>
    </nav>

      <h2 className='mx-24 mt-12 font-giloryBold text-2xl text-gray-500 '>Form UI Elements</h2>

      <div className=' flex justify-between  flex-wrap h-screen mx-24 mt-12'>

        <div className=' min-w-[420px] flex flex-col gap-6'> 

        <div className='ring-1 bg-zinc-50 shadow-zinc-400 ring-gray-200 rounded-lg shadow-sm min-w-[400px]'> 
          <div className='border-b-2 p-4 font-gilorySemiBold text-gray-500'>Input Field</div>
          <div className='h-24 S flex justify-center items-center'>
            <TextBox/>
          </div>
        </div>

        <div className='ring-1 bg-zinc-50 shadow-zinc-400 ring-gray-200 rounded-lg shadow-sm min-w-[400px]'> 
          <div className='border-b-2 p-4 font-gilorySemiBold text-gray-500'>Check Box</div>
          <div className='py-6 flex flex-col justify-center  p-4 '>
            <div className='flex gap-2'><CheckBox/><p>Event 1</p></div>
            <div className='flex gap-2'><CheckBox/><p>Event 2</p></div>
            <div className='flex gap-2'><CheckBox/><p>event 3</p></div>
          </div>
        </div>

        <div className='ring-1 bg-zinc-50 shadow-zinc-400 ring-gray-200 rounded-lg shadow-sm min-w-[400px]'> 
          <div className='border-b-2 p-4 font-gilorySemiBold text-gray-500'>Select input</div>
          <div className='h-24 S flex justify-center items-center'>
            <SelectOption/>
          </div>
        </div>
        
        <div className='ring-1 bg-zinc-50 shadow-zinc-400 ring-gray-200 rounded-lg shadow-sm min-w-[400px]'> 
          <div className='border-b-2 p-4 font-gilorySemiBold text-gray-500'>Select input</div>
          <div className='h-24 S flex justify-center items-center'>
          <SubmitButton label="Submit" />
          </div>
        </div>
        
        </div>

        <div className=' min-w-[420px] flex flex-col gap-6'> 
          
        <div className='ring-1 bg-zinc-50 shadow-zinc-400 ring-gray-200 rounded-lg shadow-sm min-w-[400px]'> 
          <div className='border-b-2 p-4 font-gilorySemiBold text-gray-500'>Textarea Field</div>
          <div className='py-6 flex justify-center items-center'>
            <TextArea/>
          </div>
        </div>

        <div className='ring-1 bg-zinc-50 shadow-zinc-400 ring-gray-200 rounded-lg shadow-sm min-w-[400px]'> 
          <div className='border-b-2 p-4 font-gilorySemiBold text-gray-500'>Radio Buttons</div>
          <div className='h-24 flex items-center p-4'>
            <RadioButtonGroup/>
          </div>
        </div>

        <div className='ring-1 bg-zinc-50 shadow-zinc-400 ring-gray-200 rounded-lg shadow-sm min-w-[400px]'> 
          <div className='border-b-2 p-4 font-gilorySemiBold text-gray-500'>Select Multiple options</div>
          <div className='h-24 S flex justify-center items-center'>
            <MultiSelectOption/>
          </div>
        </div>

        </div>

        <div className=' min-w-[420px] flex flex-col gap-6'> 
          
        <div className='ring-1 bg-zinc-50 shadow-zinc-400 ring-gray-200 rounded-lg shadow-sm min-w-[400px]'> 
          <div className='border-b-2 p-4 font-gilorySemiBold text-gray-500'>Toggle switch input</div>
          <div className='py-6 flex justify-center items-center'>
            <ToggleSwitch/>
          </div>
        </div>

        <div className='ring-1 bg-zinc-50 shadow-zinc-400 ring-gray-200 rounded-lg shadow-sm min-w-[400px]'> 
          <div className='border-b-2 p-4 font-gilorySemiBold text-gray-500'>Date Field</div>
          <div className='py-6 flex justify-center items-center'>
            <SelectDate/>
          </div>
        </div>

        <div className='ring-1 bg-zinc-50 shadow-zinc-400 ring-gray-200 rounded-lg shadow-sm min-w-[400px]'> 
          <div className='border-b-2 p-4 font-gilorySemiBold text-gray-500'>File upload</div>
          <div className='py-6 flex justify-center items-center'>
            <FileUpload/>
          </div>
        </div>
        
        </div>
        
      </div>
      <footer className='bg-yellow-100 h-14 flex justify-center px-24 items-center'> 
      <img src="./src/assets/mandir2.png" className='h-10' alt="Mandir Manthan" />
      <p className='font-gilorySemiBold text-orange-700'>Mandir Manthan Project</p>
      </footer>
    </>
  )
}

export default App
