import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center w-2/5 gap-y-6">
      <section className='flex flex-col gap-y-4'>
        <h1 className="text-5xl font-semibold">Entrar.</h1>
        <h2>Não possui uma conta? <a href='https://www.w3schools.com/html/html5_semantic_elements.asp'>Cadastre-se</a></h2>
      </section>
      <input type="text" />
      <input type="password" />
      <a href='https://www.w3schools.com/html/html5_semantic_elements.asp' className='self-end'>Esqueci a senha</a>
      <button type="submit" className='font-bold py-2.5 bg-gradient-to-r from-[#E54818] to-[#FF7F00]'>ENTRAR</button>
    </main>
  )
}
