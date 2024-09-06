import React from 'react'

function TextArea() {
  return (
    <div>
        <div className="flex flex-col  space-y-2">
                <textarea
                // disabled="false"    
                name="TextArea"
                placeholder="Description"
                className="px-3 py-2 bg-textBoxBG border font-sans min-w-80 min-h-32 h- max-w-96 ring-1 ring-gray-300 rounded-md shadow-sm
                 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-orange-300"
            />
        </div>
    </div>
  )
}

export default TextArea