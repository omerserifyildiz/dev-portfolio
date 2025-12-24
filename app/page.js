import { getResumeData } from '../lib/api'
import ResumeContent from '../components/resume/ResumeContent'

export default async function Home() {
  const fullData = await getResumeData()
  
  return (
    <main>
      <div className="bg-pattern"></div>
      <ResumeContent fullData={fullData} />
    </main>
  )
}