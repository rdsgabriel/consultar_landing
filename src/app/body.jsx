import Image from "next/image"

const Body = () => {
  return (
    <div className="w-screen h-80 mt-40 border-b border-white border-opacity-10 mb-4">
      <div className="bg-blue-900 p-24 flex justify-between">
      <Image
          src="/ice.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={30}
          priority
        />
        <Image
          src="/two.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={30}
          priority
        />
        <Image
          src="/ice.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={30}
          priority
        />
        <Image
          src="/two.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={30}
          priority
        />
        <Image
          src="/ice.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={30}
          priority
        />
      </div>
    </div>
  )
}

export default Body