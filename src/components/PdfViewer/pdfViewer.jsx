import { Worker, Viewer } from '@react-pdf-viewer/core'
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'

export default function PdfViewer() {
  return (
    <div
      style={{
        width: '100%',
        overflow: 'auto',
        borderRadius: '8px',
      }}
    >
      <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js'>
        <Viewer
          fileUrl='/portfolio-2025/Resume-2025.pdf'
          defaultScale={0.95}
        />
      </Worker>
    </div>
  )
}
