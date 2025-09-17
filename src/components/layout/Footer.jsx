import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-200 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Social Icons */}
        <div className="flex space-x-6 mb-8">
          <FaFacebookF className="text-2xl cursor-pointer hover:text-white" />
          <FaInstagram className="text-2xl cursor-pointer hover:text-white" />
          <FaTwitter className="text-2xl cursor-pointer hover:text-white" />
          <FaYoutube className="text-2xl cursor-pointer hover:text-white" />
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-sm">
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">Audio Description</a>
            <a href="#" className="hover:underline">Investor Relationship</a>
            <a href="#" className="hover:underline">Legal Notices</a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">Help Center</a>
            <a href="#" className="hover:underline">Jobs</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">Gift Cards</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Corporate Information</a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">Media Center</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-xs text-gray-500">@ 1997-2025 Netflix, Inc.</p>
      </div>
    </footer>
  );
}
