import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Send, Sparkles, MessageCircle, Heart, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

const InvitationCard = () => {
  const [step, setStep] = useState(0); // 0: Greeting, 1: Opening, 2: Question, 3: Ending
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  
  // Playful 'No' button state
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [isHoveringNo, setIsHoveringNo] = useState(false);
  const [noBtnText, setNoBtnText] = useState("🙃 Nggak");
  const noBtnTexts = ["Yakin?", "Beneran nih?", "Aku traktir popcorn loh...", "Aku traktir minum loh...", "Jahat ih 🥺", "Coba pikir lagi..."];

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100; // Random x between -100 and 100
    const y = Math.random() * 200 - 100; // Random y between -100 and 100
    setNoBtnPosition({ x, y });
    setIsHoveringNo(true);
    
    // Change text randomly
    const randomText = noBtnTexts[Math.floor(Math.random() * noBtnTexts.length)];
    setNoBtnText(randomText);
  };

  const handleNextStep = () => {
    setStep(prev => prev + 1);
  };

  const handleWhatsappRedirect = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Format date for message
    const formattedDate = date ? new Date(date).toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : 'tanggal segitu';
    
    // WhatsApp Redirect
    const phoneNumber = '6281370925582';
    const message = `Halo Andreas, aku mau nonton 5 cm per second live action sama kamu! 🥰\n\n🎥 Film: 5 cm per second live action\n📅 Tanggal: ${formattedDate}\n⏰ Jam: ${time || 'nanti diobrolin'}\n\nCan't wait! ❤️`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.location.href = url;
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="relative z-10 bg-white/40 backdrop-blur-xl p-8 rounded-3xl shadow-2xl max-w-md w-full border border-white/60 text-center"
    >
      <AnimatePresence mode="wait">

        {/* STEP 0: GREETING (New Step) */}
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex justify-center">
               <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <Mail className="w-16 h-16 text-pink-500 fill-pink-100" />
               </motion.div>
            </div>
            
            <h1 className="text-2xl font-bold text-gray-800 mb-6 leading-relaxed" style={{ fontFamily: 'Dancing Script, cursive' }}>
              Hallo, Elisabeth Yohana Rotua Pardede... <br/>
              btw kannnn...
            </h1>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNextStep}
              className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg flex items-center gap-2 mx-auto transition-colors cursor-pointer"
            >
              👉 Lanjut
            </motion.button>
          </motion.div>
        )}
        
        {/* STEP 1: OPENING */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex justify-center">
               <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                  <MessageCircle className="w-16 h-16 text-pink-500 fill-pink-100" />
               </motion.div>
            </div>
            
            <p className="text-gray-700 text-lg mb-8 leading-relaxed font-medium">
              Ada satu pertanyaan penting, <br/>
              tapi jawabnya pelan-pelan ya...
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNextStep}
              className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg flex items-center gap-2 mx-auto transition-colors cursor-pointer"
            >
              👉 Lanjut
            </motion.button>
          </motion.div>
        )}

        {/* STEP 2: THE QUESTION */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6 flex justify-center">
              <Heart className="w-16 h-16 text-pink-500 fill-pink-500 animate-pulse" />
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Dancing Script, cursive' }}>
              Mau nonton film bareng aku?
            </h1>
            
            <p className="text-gray-700 mb-8 text-lg">
              Bukan cuma nonton sih... <br/>
              tapi berbagi waktu 🍿✨
            </p>

            <div className="flex flex-col gap-4 items-center relative h-32 justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNextStep}
                className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-12 rounded-full shadow-lg flex items-center gap-2 z-20 cursor-pointer"
              >
                💖 Mau
              </motion.button>

              <motion.button
                onMouseEnter={moveNoButton}
                animate={noBtnPosition}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-gray-400 text-white font-bold py-2 px-8 rounded-full shadow-md text-sm transition-all z-10"
                style={{ position: isHoveringNo ? 'absolute' : 'relative' }}
              >
                {noBtnText}
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* STEP 3: ENDING (DETAILS) */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
             <div className="mb-4 flex justify-center">
                <Sparkles className="w-16 h-16 text-pink-500 fill-pink-100 animate-bounce" />
             </div>

            <h1 className="text-4xl font-bold text-pink-600 mb-2" style={{ fontFamily: 'Dancing Script, cursive' }}>
              YEAY! 🎉
            </h1>
            <p className="text-gray-600 mb-6 font-medium">
              Seneng banget kamu mau! <br/>
              Pilih waktunya ya:
            </p>

             {/* Date & Time Selection */}
            <div className="space-y-4 mb-8 text-left bg-white/60 p-6 rounded-2xl shadow-inner">
               <h3 className="text-gray-800 font-bold text-center mb-2 border-b border-gray-200 pb-2">
                 🎥 Film: 5 cm per second
               </h3>
              
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-pink-500" /> Tanggal
                </label>
                <input 
                  type="date" 
                  className="w-full p-2 rounded-lg bg-pink-50 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all font-medium text-gray-700"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-pink-500" /> Jam
                </label>
                <input 
                  type="time" 
                  className="w-full p-2 rounded-lg bg-pink-50 border border-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all font-medium text-gray-700"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsappRedirect}
              disabled={!date || !time}
              className={`w-full font-bold py-4 px-8 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
                !date || !time 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-pink-500 hover:bg-pink-600 text-white'
              }`}
            >
              <Send className="w-5 h-5" />
              Kirim ke Aku
            </motion.button>
            
            {(!date || !time) && (
              <p className="text-xs text-pink-400 mt-2 font-medium">
                *Isi tanggal & jam dulu ya sabethh cantikk  😉
              </p>
            )}
          </motion.div>
        )}

      </AnimatePresence>
    </motion.div>
  );
};

export default InvitationCard;
