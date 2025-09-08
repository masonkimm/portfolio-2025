import './App.css'

const packages = [
  'Vite',
  'React 19',
  'Tailwind CSS',
  'Ant Design',
  'Emotion (styled & react)',
  'ESLint setup',
]

const App = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
    <h1 className="text-5xl font-bold mb-6 text-blue-700">Frontend Starter Template</h1>
    <p className="text-lg mb-10 text-gray-600">Preconfigured and ready to build!</p>
    <ul className="list-disc space-y-2">
      {packages.map((pkg) => (
        <li key={pkg} className="text-xl">{pkg}</li>
      ))}
    </ul>
  </div>
)

export default App
