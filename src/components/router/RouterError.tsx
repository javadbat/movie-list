import { useRouteError } from "react-router";

function RouterError() {
  const error = useRouteError() as Error;
  return (
    <div className="flex flex-col justify-center items-center w-svw h-svh">
      <div>we have a problem</div>
      <div>{error.message}</div>
    </div>
  )
}

export default RouterError;