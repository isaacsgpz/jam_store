import { createFileRoute, Link } from '@tanstack/react-router'

const HomePage = () => {
  return (
    <main className="flex flex-1 flex-col">
      <section className="page wrapper">
        <h2>Home</h2>

        <Link to="/cart">go to cart</Link>
      </section>

      <section className="page wrapper">
        <h2 id="sobre">About</h2>
      </section>

      <section className="page wrapper">
        <h2 id="contato">Contact</h2>
      </section>
    </main>
  )
}

export const Route = createFileRoute('/')({
  component: HomePage,
})
