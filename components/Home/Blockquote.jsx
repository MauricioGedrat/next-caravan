import React from 'react'

const Blockquote = () => {
  return (
    <section id="home-quote" className=" p-md-5">
      <blockquote className="blockquote text-center text-light p-md-5 p-3">
        <p className="display-4">
          <em>
            "A felicidade não está na estrada que leva a algum lugar. A
            felicidade é a própria estrada."
          </em>
        </p>
        <footer className="blockquote-footer text-light">Bob Dylan</footer>
      </blockquote>
    </section>
  )
}

export default Blockquote
