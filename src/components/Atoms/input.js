import React from "react"

const Input = ({ placeholder, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className="ring-2 ring-cyan-500 border-cyan-500 bg-green-50 text-black placeholder-gray-500 focus:ring-cyan-500 focus:border-cyan-500 px-2 py-2 rounded-lg sm:width-full md:width-full xxs:text-sm"
    ></input>
  )
}

export default Input
