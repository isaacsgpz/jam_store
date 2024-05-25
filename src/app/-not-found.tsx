import { useNavigate } from '@tanstack/react-router'

export const NotFoundRoute = () => {
  const navigate = useNavigate()

  const handleReturnHome = () => navigate({ to: '/', replace: true })

  return (
    <div className="grid flex-1 place-items-center ">
      <div className="flex flex-1 flex-col items-center gap-4">
        <h1>not found</h1>

        <button className="btn btn-primary" onClick={handleReturnHome}>
          Return Home
        </button>
      </div>
    </div>
  )
}
