import React from 'react'

const Book = ({title,price,author}) => {

  const students = {
    student1 : "emma",
    student2 : "enoch"
  }

  // objects destructuring
  const {student1,student2} = students
  console.log(student1,student2);
  return (
    <div className="bg-white p-4 rounded-lg mb-5">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/71nVwmu9x2L._AC_UL210_SR195,210_.jpg"
        alt=""
        className="w-24 h-24"
      />
      <p className="text-xs pb-1 pt-4 capitalize">title : {title}</p>
      <p className="text-xs py-1 capitalize">price : $ {price}</p>
      <p className="text-xs text-purple-600 capitalize">author : {author}</p>
      <div className="flex justify-between items-center text-xs mt-4 space-x-2 text-white">
        <p className="bg-green-400 p-2 rounded-md">buy now</p>
        <p className="bg-yellow-400 p-2 rounded-md">add to cart</p>
      </div>
    </div>
  );
}

export default Book