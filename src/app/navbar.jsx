import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="fixed max-w-full w-full text-lg lg:flex justify-between bg-blu pb-6 pt-7 items-center border-b border-gray-300 border-opacity-10">
      <div className="flex justify-around flex-1 text-white">

        <Link className='hover:bg-emerald-500' href="/servicos">
          Serviços
        </Link>
        <div className="mx-2 border-l-2 border-white border-opacity-10 h-6"></div>
        <Link className='hover:bg-emerald-500' href="/contatos">
          Contatos
        </Link>
        <div className="mx-2 border-l-2 border-white border-opacity-10 h-6"></div>
        <Link className='hover:bg-emerald-500' href="/portfolio">
          Portfólio
        </Link>
        <div className="mx-2 border-l-2 border-white border-opacity-10 h-6"></div>
      </div>



      <div className=" ">
        <Image
          src="/consult.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={30}
          priority
        />
      </div>

      <div className="flex justify-around flex-1 text-white ">
      <div className="mx-2 border-l-2 border-white border-opacity-10 h-6"></div>
        <Link className='hover:bg-emerald-500' href="/servicos">
          Serviços
        </Link>
        <div className="mx-2 border-l-2 border-white border-opacity-10 h-6"></div>
        <Link className='hover:bg-emerald-500' href="/contatos">
          Contatos
        </Link>
        <div className="mx-2 border-l-2 border-white border-opacity-10 h-6"></div>
        <Link className='hover:bg-emerald-500' href="/portfolio">
          Portfólio
        </Link>
      </div>
    </div>

  );
}

export default Navbar