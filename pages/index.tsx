import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const TODO_HEADERS = ['ID', 'title', 'Created At', 'edit', 'delete']

const Home: NextPage = () => {
  const router = useRouter()
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    fetch('/api/todos')
      .then((res) => res.json())
      .catch((err) => {
        alert(err)
      })
      .then((res) => {
        setData(res.todos)
      })
  }, [])

  const handleEdit = (id: number) => {
    router.push(`/edit/${id}`)
  }

  const handleDelete = (id: number) => {
    router.push(`/delete/${id}`)
  }

  const handleCreate = () => {
    router.push(`/create`)
  }

  const tableHeader = (
    <tr>
      {TODO_HEADERS.map((v) => (
        <th key={v}>{v}</th>
      ))}
    </tr>
  )
  const tableRows = data.map((v) => (
    <tr key={v.id}>
      <td>{v.id}</td>
      <td>{v.title}</td>
      <td>{v.createdAt}</td>
      <td>
        <button onClick={() => handleEdit(v.id)}>edit</button>
      </td>
      <td>
        <button onClick={() => handleDelete(v.id)}>delete</button>
      </td>
    </tr>
  ))

  return (
    <div className={styles.container}>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Todo App</h1>
        <button onClick={handleCreate}>新規作成</button>
        <p className={styles.description}>Nextで作ったToDoアプリ</p>
        <div className={styles.grid}>
          <table className={styles.card}>
            <thead>{tableHeader}</thead>
            <tbody>{tableRows}</tbody>
          </table>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
