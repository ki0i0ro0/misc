const AUTH_FAILED = "Authorization Failed"

const errorJob = () => {
  throw new Error(AUTH_FAILED)
}

try {
  errorJob()
} catch (e) {
  switch (e.message) {
    case AUTH_FAILED:
      console.log(e)
      console.log("a")
      break
    case "0002":
      console.log("b")
      break
    default:
      break
  }
}
