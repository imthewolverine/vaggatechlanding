
"use client";

import React, { useRef, useState } from "react";
import { User, Mail, Phone, Paperclip, Send, CheckCircle2, AlertCircle, ChevronDown } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  file?: File | null;
};

const SERVICES = [
  "IT Support Infrastructure",
  "Neural Website Engineering",
  "Adaptive Mobile Applications",
  "Custom AI Integration",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    file: null,
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleFilePick(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files && e.target.files[0];
    setForm((s) => ({ ...s, file: f || null }));
  }

  function triggerFileDialog() {
    fileRef.current?.click();
  }

  function validate() {
    if (!form.name.trim()) return "Identification required: Please enter your name.";
    if (!form.email.trim() && !form.phone.trim()) return "Channel missing: Provide email or phone.";
    if (!form.service) return "Request undefined: Select a service module.";
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    setLoading(true);
    // Simulate Neural Uplink
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        file: null,
      });
    }, 2000);
  }

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid-premium opacity-20 pointer-events-none" />
      <div className="glow-blob bottom-[-10%] left-[-10%] opacity-10 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        <div className="flex flex-col lg:flex-row gap-24">
          
          {/* Left: Branding & Copy */}
          <div className="lg:w-1/3 space-y-12">
            <div>
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/5 bg-white/2 px-5 py-1.5 backdrop-blur-2xl">
                <div className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.5em] text-white/40">Uplink Gateway</span>
              </div>
              <h2 className="text-5xl font-black uppercase tracking-tighter text-white leading-[0.9] italic sm:text-7xl lg:text-8xl">
                Ready to <br />
                <span className="text-outline">Collaborate?</span>
              </h2>
            </div>
            
            <p className="text-xl font-light text-white/30 italic leading-relaxed">
              Initiate connection to the Aivora Neural Matrix. Our systems architects are standing by for deployment.
            </p>

            <div className="pt-12 space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="h-px w-12 bg-emerald-500/20 group-hover:w-24 transition-all duration-500" />
                <span className="text-[10px] font-mono tracking-[0.4em] text-white/20 uppercase">Global Instance: 01</span>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="h-px w-12 bg-emerald-500/20 group-hover:w-24 transition-all duration-500" />
                <span className="text-[10px] font-mono tracking-[0.4em] text-white/20 uppercase">Latent Response: &lt;12h</span>
              </div>
            </div>
          </div>

          {/* Right: The Form HUD */}
          <div className="lg:w-2/3">
            <div className="relative rounded-3xl border border-white/10 bg-[#0A0D18]/60 p-1 lg:p-1.5 backdrop-blur-3xl shadow-2xl">
              <div className="absolute -inset-px rounded-3xl bg-linear-to-br from-emerald-500/10 via-transparent to-white/5 pointer-events-none" />
              
              <form 
                onSubmit={handleSubmit} 
                className="relative z-10 rounded-[22px] bg-[#010309]/80 p-8 lg:p-12 space-y-10"
              >
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                    <div className="h-20 w-20 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white">Transmission Successful</h3>
                    <p className="text-white/40 max-w-sm italic">Connection established. A systems architect will synchronize with your request shortly.</p>
                    <button 
                      type="button" 
                      onClick={() => setSent(false)}
                      className="mt-8 text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 hover:text-white transition-colors"
                    >
                      New Transmission
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                      {/* Name Input */}
                      <div className="group space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 group-focus-within:text-emerald-500 transition-colors">Identification</label>
                        <div className="relative">
                          <User className="absolute left-0 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-emerald-500 transition-colors" size={16} />
                          <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="OPERATOR NAME"
                            className="w-full border-b border-white/10 bg-transparent py-4 pl-8 text-sm font-medium tracking-wide text-white outline-none focus:border-emerald-500 transition-colors placeholder:text-white/5"
                          />
                        </div>
                      </div>

                      {/* Email Input */}
                      <div className="group space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 group-focus-within:text-emerald-500 transition-colors">Neural Channel</label>
                        <div className="relative">
                          <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-emerald-500 transition-colors" size={16} />
                          <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="EMAIL_ADDRESS@DOMAIN"
                            className="w-full border-b border-white/10 bg-transparent py-4 pl-8 text-sm font-medium tracking-wide text-white outline-none focus:border-emerald-500 transition-colors placeholder:text-white/5 uppercase"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
                      {/* Phone Input */}
                      <div className="group space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 group-focus-within:text-emerald-500 transition-colors">Voice Frequency</label>
                        <div className="relative">
                          <Phone className="absolute left-0 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-emerald-500 transition-colors" size={16} />
                          <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+00 000 000 000"
                            className="w-full border-b border-white/10 bg-transparent py-4 pl-8 text-sm font-medium tracking-wide text-white outline-none focus:border-emerald-500 transition-colors placeholder:text-white/5"
                          />
                        </div>
                      </div>

                      {/* Service Selection */}
                      <div className="group space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 group-focus-within:text-emerald-500 transition-colors">Service Module</label>
                        <div className="relative">
                          <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-emerald-500 transition-colors" size={16} />
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className="w-full appearance-none border-b border-white/10 bg-transparent py-4 pr-8 text-sm font-medium tracking-wide text-white outline-none focus:border-emerald-500 transition-colors placeholder:text-white/5 uppercase cursor-pointer"
                          >
                            <option value="" className="bg-slate-950">Select Directive</option>
                            {SERVICES.map((s) => (
                              <option key={s} value={s} className="bg-slate-900 text-white uppercase">{s}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Message Area */}
                    <div className="group space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 group-focus-within:text-emerald-500 transition-colors">Transmission Payload</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="DEFINE YOUR ARCHITECTURAL GOALS..."
                        rows={4}
                        className="w-full border-b border-white/10 bg-transparent py-4 text-sm font-medium tracking-wide text-white outline-none focus:border-emerald-500 transition-colors placeholder:text-white/5 uppercase resize-none"
                      />
                    </div>

                    {/* File Attach */}
                    <div className="flex items-center justify-between pt-4">
                      <button
                        type="button"
                        onClick={triggerFileDialog}
                        className="group/file flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/20 hover:text-emerald-500 transition-colors"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 group-hover/file:border-emerald-500/50 transition-colors">
                          <Paperclip size={14} />
                        </div>
                        <span>{form.file ? form.file.name : "Attach Blueprints"}</span>
                        <input ref={fileRef} onChange={handleFilePick} type="file" className="sr-only" />
                      </button>

                      {error && (
                        <div className="flex items-center gap-2 text-[10px] font-bold text-rose-500 uppercase tracking-wider italic animate-pulse">
                          <AlertCircle size={12} /> {error}
                        </div>
                      )}
                    </div>

                    <div className="pt-10">
                      <button
                        type="submit"
                        disabled={loading}
                        className="group/submit relative w-full overflow-hidden rounded-2xl bg-white py-6 text-[11px] font-black uppercase tracking-[0.5em] text-slate-950 transition-all hover:bg-emerald-500 disabled:opacity-40"
                      >
                        {loading ? (
                          <div className="flex items-center justify-center gap-4">
                            <div className="h-1.5 w-1.5 rounded-full bg-slate-950 animate-bounce [animation-delay:-0.3s]" />
                            <div className="h-1.5 w-1.5 rounded-full bg-slate-950 animate-bounce [animation-delay:-0.15s]" />
                            <div className="h-1.5 w-1.5 rounded-full bg-slate-950 animate-bounce" />
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-4">
                            Broadcast Signal <Send size={16} className="transition-transform group-hover/submit:translate-x-1 group-hover/submit:-translate-y-1" />
                          </div>
                        )}
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
