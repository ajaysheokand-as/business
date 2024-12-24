import React ,{useEffect,useState} from 'react'

function Scrolldown() {

     const [showButton, setShowButton] = useState(false);
          const handleScroll = () => {
            if (window.scrollY > 100) {
              setShowButton(true);
            } else {
              setShowButton(false);
            }
          };
        
          useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => {
              window.removeEventListener("scroll", handleScroll);
            };
          }, []);
        
          const scrollToTop = () => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          };
  return (
  <>
  {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-green-800 text-white text-2xl p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          ↑
        </button>
      )}
  
  </>
  )
}

export default Scrolldown
