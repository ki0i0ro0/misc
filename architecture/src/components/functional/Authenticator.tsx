export const Authenticator: FC = ({ children }) => {
  const { isAuthenticated } = useAuth0()
  const router = useRouter()
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/')
    }
  }, [isAuthenticated, router])
  return <Main>{children}</Main>
}
