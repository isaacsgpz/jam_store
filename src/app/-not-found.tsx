import { useNavigate } from '@tanstack/react-router'

export const NotFoundRoute = () => {
  const navigate = useNavigate()

  const handleReturnHome = () => navigate({ to: '/', replace: true })

  return (
    <div className="flex-1 grid place-items-center ">
      <div className="flex flex-col items-center gap-4 flex-1">
        <h1>not found</h1>

        <button className="btn btn-primary" onClick={handleReturnHome}>
          Return Home
        </button>
      </div>
    </div>
  )
}
