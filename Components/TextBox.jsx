import React from 'react'

function TextBox() {
  return (
    <div>
        <div className="flex flex-col space-y-2">
        {/* <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
        </label> */}
            <input
                // disabled="false" 
                maxlength="1"   
                type="email"
                id="email"
                name="InputField"
                placeholder="Example@email.com"
                className="px-3 py-2 bg-textBoxBG border font-sans min-w-80 max-w-96 ring-1 ring-gray-300 rounded-md shadow-sm
                 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-orange-300"
            />
        </div>
    </div>
  )
}

export default TextBox
