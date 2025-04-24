// components/Layout/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-lg font-bold">FocusTasks</h2>
              <p className="text-gray-300 text-sm">Aplikasi To-Do List untuk meningkatkan produktivitas Anda</p>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
              <a href="#" className="text-gray-300 hover:text-white">Tentang Kami</a>
              <a href="#" className="text-gray-300 hover:text-white">Kebijakan Privasi</a>
              <a href="#" className="text-gray-300 hover:text-white">Syarat dan Ketentuan</a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} FocusTasks. Hak Cipta Dilindungi.
          </div>
        </div>
      </footer>
    );
  }