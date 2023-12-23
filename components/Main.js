export default function Main({ children, className }) {
  return (
    <main className={`my-4 max-w-5xl lg:mx-auto max-lg:px-4 lg:px-0${className ? ' ' + className : ''}`}>
      { children }
    </main>
  )
}