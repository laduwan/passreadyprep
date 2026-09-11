import { useState, useEffect, useRef } from 'react';
import { BookOpen, Upload, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { getToken, authFetch } from '../lib/api';

export default function BookAccess() {
  const [status, setStatus] = useState(null); // null | 'none' | 'pending' | 'approved' | 'rejected'
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState('');
  const fileRef = useRef();
  const token = getToken();

  useEffect(() => {
    if (!token) { setLoading(false); setStatus('none'); return; }
    authFetch('/api/book/status')
      .then(r => r.json())
      .then(d => { setStatus(d.bookAccess?.status || 'none'); setLoading(false); })
      .catch(() => { setLoading(false); setStatus('none'); });
  }, []);

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5_000_000) { setMessage('Image must be under 5 MB'); return; }
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result);
    reader.readAsDataURL(file);
  };

  const submit = async () => {
    if (!preview || !token) return;
    setSubmitting(true);
    setMessage('');
    try {
      const res = await authFetch('/api/book/submit-receipt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ receiptImage: preview }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('pending');
        setMessage(data.message);
      } else {
        setMessage(data.error || 'Something went wrong');
      }
    } catch {
      setMessage('Network error — please try again');
    }
    setSubmitting(false);
  };

  if (loading) return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-slate-400">Loading...</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-2xl mx-auto px-4 py-12">

        {/* Header */}
        <div className="text-center mb-10">
          <BookOpen className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Unlock Your Digital Study Tools</h1>
          <p className="text-slate-400">Your book purchase includes free flashcards and 4 interactive cases</p>
        </div>

        {/* What you get */}
        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 mb-8">
          <h2 className="text-lg font-semibold text-emerald-400 mb-4">What You Get</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">200+ Digital Flashcards</p>
                <p className="text-sm text-slate-400">Spaced repetition across all 18 diagnostic families. Syncs across devices.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">4 Book Cases — Interactive</p>
                <p className="text-sm text-slate-400">Same cases from the book, with timed scoring and AI debrief analysis.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Status-dependent content */}
        {status === 'approved' && (
          <div className="bg-emerald-950/50 border border-emerald-800 rounded-xl p-6 text-center">
            <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
            <h2 className="text-xl font-bold text-emerald-400 mb-2">Access Active</h2>
            <p className="text-slate-300 mb-6">Your flashcards and 4 book cases are unlocked.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg font-medium transition-colors">
                Flashcards <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-medium transition-colors">
                Practice Cases <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {status === 'pending' && (
          <div className="bg-amber-950/30 border border-amber-800/50 rounded-xl p-6 text-center">
            <Clock className="w-10 h-10 text-amber-400 mx-auto mb-3" />
            <h2 className="text-xl font-bold text-amber-400 mb-2">Receipt Under Review</h2>
            <p className="text-slate-300">We'll verify your receipt and activate access within 24 hours.</p>
          </div>
        )}

        {status === 'rejected' && (
          <div className="bg-red-950/30 border border-red-800/50 rounded-xl p-6 text-center mb-6">
            <p className="text-red-400 font-medium mb-2">Receipt could not be verified</p>
            <p className="text-slate-400 text-sm">Please try again with a clearer photo of your purchase receipt.</p>
          </div>
        )}

        {(status === 'none' || status === 'rejected') && (
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
            <h2 className="text-lg font-semibold mb-4">Upload Your Purchase Receipt</h2>
            <p className="text-sm text-slate-400 mb-6">
              Take a photo of your Amazon order confirmation, bookstore receipt, or ebook purchase email.
            </p>

            {!token && (
              <div className="bg-slate-800 rounded-lg p-4 mb-6 text-center">
                <p className="text-slate-300 mb-3">Create a free account first, then come back to upload your receipt.</p>
                <a href="/register.html" className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg font-medium transition-colors">
                  Create Account <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            )}

            {token && (
              <>
                <div
                  onClick={() => fileRef.current?.click()}
                  className="border-2 border-dashed border-slate-700 hover:border-emerald-600 rounded-xl p-8 text-center cursor-pointer transition-colors"
                >
                  {preview ? (
                    <img src={preview} alt="Receipt preview" className="max-h-48 mx-auto rounded-lg" />
                  ) : (
                    <>
                      <Upload className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                      <p className="text-slate-400">Tap to upload receipt photo</p>
                      <p className="text-xs text-slate-600 mt-1">JPG or PNG, under 5 MB</p>
                    </>
                  )}
                </div>
                <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />

                {preview && (
                  <button
                    onClick={submit}
                    disabled={submitting}
                    className="w-full mt-4 py-3 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 rounded-lg font-medium transition-colors"
                  >
                    {submitting ? 'Submitting...' : 'Submit Receipt'}
                  </button>
                )}

                {message && <p className="mt-3 text-sm text-center text-slate-400">{message}</p>}
              </>
            )}
          </div>
        )}

        {/* Promo */}
        <div className="mt-10 text-center text-sm text-slate-500">
          <p>Want the full platform? 200+ cases, adaptive study tools, AI debrief.</p>
          <p className="mt-1">Use code <span className="text-emerald-400 font-mono font-bold">STUDYGUIDE</span> for 10% off.</p>
        </div>
      </div>
    </div>
  );
}
