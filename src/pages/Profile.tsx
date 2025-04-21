import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const Profile = () => {
  const [profile] = useState({
    name: "John Doe",
    bio: "CS101 Student at Habib University",
    university: "Habib University",
    major: "Computer Science",
    img: "https://randomuser.me/api/portraits/men/1.jpg"
  });

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tr from-white via-[#faf7ff] to-[#ece8f9]">
      <Navbar isLoggedIn={true} />
      <main className="flex-grow pt-10 pb-10 page-container">
        <div className="bg-white rounded-2xl shadow-card p-10 flex flex-col md:flex-row gap-8 mb-10">
          <div className="flex flex-col items-center justify-center min-w-[270px] px-8">
            <img src={profile.img} className="w-32 h-32 rounded-full border-4 border-brand-purple object-cover shadow mb-4" alt="User" />
            <button className="primary-btn w-full py-2 rounded-full mt-3 mb-6">Edit Picture</button>
            <div className="bg-[#f7f2fc] rounded-2xl px-7 py-5 mt-2 w-full shadow">
              <div className="mb-2 text-lg font-semibold text-gray-800">{profile.name}</div>
              <div className="text-sm text-gray-600">{profile.bio}</div>
            </div>
          </div>
          <div className="flex-1">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-5 mb-10">
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
            </form>
            <div className="flex flex-col gap-7">
              <div className="bg-[#f9f5ff] p-7 rounded-xl shadow-inner border border-brand-purple/10">
                <div className="grid grid-cols-2 gap-x-7 mb-2">
                  <span className="font-bold text-brand-purple text-lg">15 Documents Uploaded</span>
                  <span className="font-bold text-brand-purple text-lg">Average Rating: 4.5/5</span>
                  <span className="font-bold text-brand-purple text-lg">45 Comments Posted</span>
                  <span className="font-bold text-brand-purple text-lg">120 Downloads</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="mt-4 w-full text-base">
                    <thead>
                      <tr className="text-sm font-bold text-gray-700 bg-brand-purple/10">
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
                </div>
                <button className="primary-btn mt-5">View All Activity</button>
              </div>
              <div className="bg-[#f9f5ff] p-7 rounded-xl shadow-inner border border-brand-purple/10">
                <div className="text-lg font-extrabold mb-4 text-brand-purple">Change Password</div>
                <form className="flex flex-col gap-3">
                  <input className="form-input" placeholder="Enter your current password" type="password" />
                  <input className="form-input" placeholder="Enter your new password" type="password" />
                  <input className="form-input" placeholder="Confirm your new password" type="password" />
                  <button className="primary-btn mt-4">Change Password</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Profile;
