import { createFileRoute } from '@tanstack/react-router'

const HomeScreen = () => {
  return (
    <main className="flex-1 grid place-items-center ">
      <div className="flex flex-col items-center gap-4">
        <h1>Jam</h1>

        <button className="btn btn-primary">Button</button>
      </div>
    </main>
  )
}

export const Route = createFileRoute('/')({ component: HomeScreen })
