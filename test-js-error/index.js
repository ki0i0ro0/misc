const AUTH_FAILED = "Authorization Failed"

const errorJob = () => {
  throw new Error(AUTH_FAILED)
}

try {
  errorJob()
} catch (e) {
  const errorResponse = {
    headers: {},
    statusCode: 0,
    errors: "",
  }
  switch (e.message) {
    case AUTH_FAILED:
      errorResponse.statusCode = 300
      console.log(errorResponse)
      break
    case "0002":
      console.log("b")
      break
    default:
      break
  }
}
