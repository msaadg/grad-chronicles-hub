
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const Profile = () => {
  // Demo profile data
  const [profile] = useState({
    name: "John Doe",
    bio: "CS101 Student at Habib University",
    university: "Habib University",
    major: "Computer Science",
    img: "https://randomuser.me/api/portraits/men/1.jpg"
  });

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f6f7]">
      <Navbar isLoggedIn={true} />
      <main className="flex-grow pt-8 pb-7 page-container">
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex flex-col items-center mb-6">
            <img src={profile.img} className="w-28 h-28 rounded-full border-4 border-brand-purple object-cover" alt="User" />
            <button className="mt-4 px-5 py-2 rounded-full bg-brand-purple text-white hover:bg-brand-purple-dark transition font-medium shadow text-base">Edit Picture</button>
          </div>
          <form className="space-y-4">
            <div>
              <label className="font-semibold mb-1 block">Name</label>
              <input type="text" className="form-input" value={profile.name} readOnly />
            </div>
            <div>
              <label className="font-semibold mb-1 block">Bio</label>
              <input type="text" className="form-input" value={profile.bio} readOnly />
            </div>
            <div>
              <label className="font-semibold mb-1 block">University</label>
              <input type="text" className="form-input" value={profile.university} readOnly />
            </div>
            <div>
              <label className="font-semibold mb-1 block">Major</label>
              <input type="text" className="form-input" value={profile.major} readOnly />
            </div>
            <div className="flex justify-end">
              <button className="bg-brand-purple text-white px-6 py-2.5 rounded-full font-semibold hover:bg-brand-purple-dark transition">Save Changes</button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {/* Activity Dashboard */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex justify-between mb-2">
              <span className="font-extrabold text-base">15 Documents Uploaded</span>
              <span className="font-extrabold text-base">Average Rating: 4.5/5</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-extrabold text-base">45 Comments Posted</span>
              <span className="font-extrabold text-base">120 Downloads</span>
            </div>
            <table className="mt-4 w-full">
              <thead>
                <tr className="text-sm font-bold text-gray-700">
                  <th className="py-2 text-left">Action</th>
                  <th className="py-2 text-left">Document</th>
                  <th className="py-2 text-left">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Uploaded</td>
                  <td>CS101 Midterm Notes</td>
                  <td>2h ago</td>
                </tr>
                <tr>
                  <td>Commented</td>
                  <td>CS101 Midterm Notes</td>
                  <td>3h ago</td>
                </tr>
                <tr>
                  <td>Rated</td>
                  <td>CS101 Midterm Notes</td>
                  <td>5h ago</td>
                </tr>
              </tbody>
            </table>
            <button className="mt-4 px-7 py-2.5 bg-brand-purple text-white rounded-full font-semibold hover:bg-brand-purple-dark transition">View All Activity</button>
          </div>
          {/* Change Password Card */}
          <div className="bg-white rounded-xl shadow-sm p-8 flex flex-col gap-3">
            <div className="text-lg font-extrabold mb-4">Change Password</div>
            <form className="flex flex-col gap-3">
              <div>
                <input className="form-input" placeholder="Enter your current password" type="password" />
              </div>
              <div>
                <input className="form-input" placeholder="Enter your new password" type="password" />
              </div>
              <div>
                <input className="form-input" placeholder="Confirm your new password" type="password" />
              </div>
              <button className="mt-4 px-7 py-2.5 bg-brand-purple text-white rounded-full font-semibold hover:bg-brand-purple-dark transition">Change Password</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Profile;

