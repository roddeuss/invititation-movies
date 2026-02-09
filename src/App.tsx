import SakuraBackground from './components/SakuraBackground'
import InvitationCard from './components/InvitationCard'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-pink-100 to-blue-100">
      <SakuraBackground />
      <InvitationCard />
      
      <footer className="absolute bottom-4 text-center w-full text-pink-400 text-xs opacity-60">
        Dibuat dengan ❤️ untuk 5cm/s
      </footer>
    </div>
  )
}

export default App
