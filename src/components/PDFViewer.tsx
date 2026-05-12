"use client";

import React, { useState, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Loader2, AlertCircle, Download } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  url: string | File;
  className?: string;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ url, className = '' }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
    setPageNumber(1);
    setError(null);
  }

  function onDocumentLoadError(err: Error) {
    console.error('Failed to load PDF:', err);
    setError(err);
    setLoading(false);
  }

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) => {
      const newPageNumber = prevPageNumber + offset;
      return Math.min(Math.max(1, newPageNumber), numPages || 1);
    });
  };

  const previousPage = () => changePage(-1);
  const nextPage = () => changePage(1);

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.2, 3.0));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.2, 0.5));

  return (
    <div className={`flex flex-col w-full bg-[#1e293b] rounded-xl overflow-hidden shadow-2xl border border-slate-800 ${className}`}>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-slate-200 z-10">
        <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-0">
          <button 
            onClick={zoomOut} 
            disabled={scale <= 0.5}
            className="p-2 hover:bg-slate-800 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Zoom Out"
          >
            <ZoomOut className="w-5 h-5 text-slate-300" />
          </button>
          <span className="text-sm font-medium w-14 text-center select-none text-slate-300">
            {Math.round(scale * 100)}%
          </span>
          <button 
            onClick={zoomIn} 
            disabled={scale >= 3.0}
            className="p-2 hover:bg-slate-800 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            title="Zoom In"
          >
            <ZoomIn className="w-5 h-5 text-slate-300" />
          </button>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1 sm:gap-2 mr-2 sm:mr-4">
            <button 
              onClick={previousPage} 
              disabled={pageNumber <= 1 || loading || !!error}
              className="p-2 hover:bg-slate-800 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Halaman Sebelumnya"
            >
              <ChevronLeft className="w-5 h-5 text-slate-300" />
            </button>
            <span className="text-sm font-medium select-none text-slate-300 min-w-[60px] text-center">
              {numPages ? `${pageNumber} / ${numPages}` : '-- / --'}
            </span>
            <button 
              onClick={nextPage} 
              disabled={pageNumber >= (numPages || 1) || loading || !!error}
              className="p-2 hover:bg-slate-800 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Halaman Selanjutnya"
            >
              <ChevronRight className="w-5 h-5 text-slate-300" />
            </button>
          </div>

          {typeof url === 'string' && (
            <>
              <div className="w-px h-6 bg-slate-700 hidden sm:block"></div>
              <a 
                href={url} 
                download 
                className="p-2 hover:bg-orange-500 hover:text-white bg-slate-800 rounded-md transition-colors text-slate-300 flex items-center gap-2"
                title="Download PDF"
              >
                <Download className="w-4 h-4" />
                <span className="text-xs font-medium hidden sm:inline">Download</span>
              </a>
            </>
          )}
        </div>
      </div>

      {/* Viewer Area */}
      <div 
        ref={containerRef}
        className="relative flex-1 bg-slate-800/50 overflow-auto flex justify-center p-4 sm:p-8 min-h-[500px] md:min-h-[700px] smooth-scroll"
      >
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={
            <div className="flex flex-col items-center justify-center text-slate-400 mt-20 gap-4">
              <Loader2 className="w-10 h-10 animate-spin text-orange-500" />
              <p className="font-medium animate-pulse">Memuat dokumen PDF...</p>
            </div>
          }
          error={
            <div className="flex flex-col items-center justify-center text-red-400 mt-20 gap-3 bg-red-500/10 p-6 rounded-xl max-w-sm text-center border border-red-500/20">
              <AlertCircle className="w-12 h-12 text-red-500 mb-2" />
              <p className="font-semibold text-lg text-red-500">Gagal memuat PDF</p>
              <p className="text-sm text-red-300">Terjadi kesalahan saat memuat dokumen. Pastikan file tersedia dan tidak rusak.</p>
            </div>
          }
          className="flex flex-col items-center"
        >
          {numPages && !error && (
             <Page 
               pageNumber={pageNumber} 
               scale={scale} 
               className="shadow-2xl bg-white transition-transform duration-200 ease-in-out origin-top"
               renderTextLayer={true}
               renderAnnotationLayer={true}
               loading={
                 <div className="flex items-center justify-center bg-white shadow-xl min-w-[300px] min-h-[400px]">
                   <Loader2 className="w-8 h-8 animate-spin text-slate-300" />
                 </div>
               }
             />
          )}
        </Document>
      </div>
    </div>
  );
}
