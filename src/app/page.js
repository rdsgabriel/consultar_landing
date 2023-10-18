import Navbar from './navbar';
import Body from  './body'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-7 bg-slate-300 ">
      <Navbar/>
      <Body/>
      <Body/>
      <Body/>
      <Body/>
      <Body/>
    </main>
  );
}
