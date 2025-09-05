import { Edit, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

const WriteArticle = () => {
  const articleLength = [
    { length: 800, text: "Short (500-800 words)" },
    { length: 1200, text: "Medium (800-1200 words)" },
    { length: 1600, text: "Long (1200+ words)" }, // fixed label
  ]

  const [selectedLength, setSelectedLength] = useState(articleLength[0])
  const [input, setInput] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    console.log("Topic:", input)
    console.log("Length:", selectedLength)
  }

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start gap-4 flex-wrap text-slate-700">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        {/* Header */}
        <div className="flex items-center gap-3">
          <Sparkles className="text-blue-500" />
          <h1 className="text-xl font-semibold">Article Configuration</h1>
        </div>

        {/* Topic input */}
        <p className="mt-6 text-sm font-medium">Article Topic</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400"
          placeholder="The future is..."
          required
        />

        {/* Length selection */}
        <p className="mt-4 text-sm font-medium">Article Length</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-[90%]">
          {articleLength.map((item, index) => (
            <span
              onClick={() => setSelectedLength(item)}
              key={index}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer transition
                ${
                  selectedLength.text === item.text
                    ? "bg-blue-50 text-blue-700 border-blue-400"
                    : "text-gray-500 border-gray-300"
                }`}
            >
              {item.text}
            </span>
          ))}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#226BFF] to-[#65ADFF] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer hover:opacity-90"
        >
          <Edit className="w-5" />
          Generate article
        </button>
      </form>

      {/* Right side placeholder */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border 
      border-gray-200 min-h-96 max-h-[600px]">
        <div className='flex items-center gap-3'>
          <Edit className='w-5 h-5 text-[#4A7AFF]' />
          <h1 className='text-xl font-semibold'>Generated Article</h1>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <div className='text-sm flex flex-col items-center gap
          -5 text-gray-400'>
            <Edit className='w-5 h-5 text-[#4A7AFF]' />
            <p>Enter a topic and click "Generate Article"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WriteArticle
