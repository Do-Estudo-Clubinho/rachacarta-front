import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full flex flex-col justify-center w-2/5 gap-y-6">
      <section className='flex flex-col gap-y-4'>
        <h1>Entrar.</h1>
        <p>Não possui uma conta? <a href='https://www.w3schools.com/html/html5_semantic_elements.asp'>Cadastre-se</a></p>
      </section>
      <input type="email" name="email" placeholder='@ E-Mail' />
      <input type="password" name="password" placeholder='# Password' />
      <a href='https://www.w3schools.com/html/html5_semantic_elements.asp' className='self-end'>Esqueci a senha</a>
      <button type="submit" className='font-bold py-2.5 bg-gradient-to-r from-[#E54818] to-[#FF7F00]'>ENTRAR</button>
    </main>
  )
}
