import { Hash, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

const BlogTitles = () => {
  const blogCategories = [
    'General',
    'Technology',
    'Business',
    'Health',
    'Lifestyle',
    'Education',
    'Travel',
    'Food',
  ]

  const [selectedCategory, setSelectedCategory] = useState('General')
  const [input, setInput] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    console.log('Keyword:', input)
    console.log('Category:', selectedCategory)
  }

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start gap-4 flex-wrap text-slate-700">
      {/* Form */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        {/* Header */}
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#8E37EB]" />
          <h1 className="text-xl font-semibold">AI Title Generator</h1>
        </div>

        {/* Keyword input */}
        <p className="mt-6 text-sm font-medium">Keyword</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400"
          placeholder="The future is..."
          required
        />

        {/* Category selection */}
        <p className="mt-4 text-sm font-medium">Category</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-[90%]">
          {blogCategories.map((item) => (
            <span
              onClick={() => setSelectedCategory(item)}
              key={item}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer transition
                ${
                  selectedCategory === item
                    ? 'bg-purple-50 text-purple-700 border-purple-400'
                    : 'text-gray-500 border-gray-300'
                }`}
            >
              {item}
            </span>
          ))}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#C341F6] to-[#65ADFF] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer hover:opacity-90"
        >
          <Hash className="w-5" />
          Generate title
        </button>
      </form>

      {/* Generated Titles placeholder */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
        <div className="flex items-center gap-3">
          <Hash className="w-5 h-5 text-[#8E37EB]" />
          <h1 className="text-xl font-semibold">Generated Titles</h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Hash className="w-5 h-5 text-[#4A7AFF]" />
            <p>Enter a keyword and click "Generate Title"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogTitles
