function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-blue-100/80">
        <p>© {new Date().getFullYear()} Blue Hair Studio. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#booking" className="hover:text-white">Book</a>
          <a href="/test" className="hover:text-white">System Check</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
