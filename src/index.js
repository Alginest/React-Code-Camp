import React from 'react'
import ReactDom from 'react-dom'

// statless functional component
// always return JSX

// JSX Rules
// return a single Element
// div / section / article or Fragment
// use camelCase for html attribute
// className insted of class
// close every element
// formating

function BookList() {
  return (
    <section className='hello'>
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}
const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg'
    alt='1'
  />
)
const Title = () => <h1>I love u to the moon and back.</h1>

const Author = () => <h4>Amelia Hepworth</h4>

ReactDom.render(<BookList />, document.getElementById('root'))
