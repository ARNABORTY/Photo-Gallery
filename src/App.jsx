import { useMemo, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import DashboardPage from './components/DashboardPage'
import GalleryPage from './components/GalleryPage'
import LoginPage from './components/LoginPage'
import AdminPage from './components/AdminPage'

const demoPhotos = [
  { id: 'demo-1', title: 'Blue hour', category: 'Travel', owner: 'Alex Morgan', src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-2', title: 'Soft morning', category: 'Portraits', owner: 'Alex Morgan', src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-3', title: 'Open road', category: 'Places', owner: 'Jamie Lee', src: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-4', title: 'Wild garden', category: 'Nature', owner: 'Sam Rivera', src: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-5', title: 'Salt air', category: 'Travel', owner: 'Alex Morgan', src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-6', title: 'The quiet table', category: 'Places', owner: 'Jamie Lee', src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-7', title: 'Golden hour', category: 'Portraits', owner: 'Sam Rivera', src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-8', title: 'Forest floor', category: 'Nature', owner: 'Alex Morgan', src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-9', title: 'Long way home', category: 'Travel', owner: 'Jamie Lee', src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-10', title: 'Window light', category: 'Portraits', owner: 'Sam Rivera', src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-11', title: 'Coastal morning', category: 'Travel', owner: 'Alex Morgan', src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-12', title: 'Still waters', category: 'Places', owner: 'Jamie Lee', src: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-13', title: 'Wildflower season', category: 'Nature', owner: 'Sam Rivera', src: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-14', title: 'After the rain', category: 'Nature', owner: 'Alex Morgan', src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-15', title: 'A familiar face', category: 'Portraits', owner: 'Jamie Lee', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-16', title: 'City details', category: 'Places', owner: 'Sam Rivera', src: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-17', title: 'Curious eyes', category: 'Animal', owner: 'Alex Morgan', src: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-18', title: 'Meadow companion', category: 'Animal', owner: 'Jamie Lee', src: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-19', title: 'Little explorer', category: 'Animal', owner: 'Sam Rivera', src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-20', title: 'Morning visitor', category: 'Animal', owner: 'Alex Morgan', src: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-21', title: 'MotoGP apex', category: 'MotoGP', location: 'Circuit of the Americas', owner: 'Alex Morgan', src: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-22', title: 'Redline ritual', category: 'Formula 1', location: 'Monza, Italy', owner: 'Jamie Lee', src: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-23', title: 'Full lean', category: 'MotoGP', location: 'Mugello, Italy', owner: 'Sam Rivera', src: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-24', title: 'Lights out', category: 'Formula 1', location: 'Silverstone, England', owner: 'Alex Morgan', src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85' },
  { id: 'demo-25', title: 'Ducati launch', category: 'Ducati Racing', location: 'Mugello, Italy', owner: 'Alex Morgan', src: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'demo-26', title: 'Scarlet machine', category: 'Ducati Racing', location: 'Misano, Italy', owner: 'Jamie Lee', src: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { id: 'demo-27', title: 'Late braking', category: 'Ducati Racing', location: 'Phillip Island, Australia', owner: 'Sam Rivera', src: 'https://images.pexels.com/photos/2611690/pexels-photo-2611690.jpeg?auto=compress&cs=tinysrgb&w=900' },
]

const initialUsers = [
  { name: 'Alex Morgan', firstName: 'Alex', email: 'alex@framefolk.com', role: 'Member', joined: 'Aug 18, 2026', uploads: 12 },
  { name: 'Jamie Lee', firstName: 'Jamie', email: 'jamie@framefolk.com', role: 'Member', joined: 'Aug 21, 2026', uploads: 8 },
  { name: 'Sam Rivera', firstName: 'Sam', email: 'sam@framefolk.com', role: 'Member', joined: 'Aug 29, 2026', uploads: 4 },
]

function App() {
  const [currentPage, setCurrentPage] = useState('login')
  const [user, setUser] = useState(null)
  const [uploadedPhotos, setUploadedPhotos] = useState([])
  const [showUpload, setShowUpload] = useState(false)

  const allPhotos = useMemo(() => [...uploadedPhotos, ...demoPhotos], [uploadedPhotos])
  const login = (role, email) => {
    const isAdmin = role === 'admin'
    setUser({ name: isAdmin ? 'Studio Admin' : 'Alex Morgan', firstName: isAdmin ? 'Studio' : 'Alex', email })
    setCurrentPage(isAdmin ? 'admin' : 'dashboard')
  }
  const logout = () => { setUser(null); setCurrentPage('login') }

  return (
    <main className="gallery-page">
      {user && <Navbar currentPage={currentPage} onNavigate={setCurrentPage} onLogout={logout} isAdmin={user.email.includes('admin')} />}

      {!user && <LoginPage onLogin={login} />}
      {user && currentPage === 'dashboard' && <DashboardPage user={user} photos={allPhotos} onNavigate={setCurrentPage} onOpenUpload={() => { setShowUpload(true); setCurrentPage('gallery') }} />}
      {user && currentPage === 'gallery' && <GalleryPage photos={allPhotos} uploadedPhotos={uploadedPhotos} onUpload={(photos) => setUploadedPhotos((current) => [...photos, ...current])} showUpload={showUpload} setShowUpload={setShowUpload} />}
      {user && currentPage === 'admin' && <AdminPage users={initialUsers} photos={allPhotos} />}
    </main>
  )
}

export default App;
