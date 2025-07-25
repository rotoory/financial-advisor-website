const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-900 p-8 text-white text-center shadow-lg mt-12">
      <div className="container mx-auto px-4">
        <p className="text-lg mb-2">&copy; {new Date().getFullYear()} FinAdvisor. All rights reserved.</p>
        <p className="text-md mb-4">Contact: <a href="mailto:info@example.com" className="hover:underline">info@example.com</a></p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-white hover:text-blue-200 transition duration-300 transform hover:scale-110" aria-label="Facebook"><i className="fab fa-facebook-f text-2xl"></i>Facebook</a>
          <a href="#" className="text-white hover:text-blue-200 transition duration-300 transform hover:scale-110" aria-label="Twitter"><i className="fab fa-twitter text-2xl"></i>Twitter</a>
          <a href="#" className="text-white hover:text-blue-200 transition duration-300 transform hover:scale-110" aria-label="LinkedIn"><i className="fab fa-linkedin-in text-2xl"></i>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
