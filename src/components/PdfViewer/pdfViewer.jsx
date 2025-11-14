import { Worker, Viewer } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
// import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import './styles.css'
export default function PdfViewer() {
  return (
    <div
      className='resume-frame'
    >
      <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js'>
        <Viewer fileUrl='/portfolio-2025/Mason Kim_Resume_GuideHouse.pdf' defaultScale={0.95} />
      </Worker>
    </div>
  )
}
