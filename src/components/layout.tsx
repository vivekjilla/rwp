import Alert from './alert'
import Footer from './footer'

export default function Layout({ preview, children }: any) {
  return (
    <>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
