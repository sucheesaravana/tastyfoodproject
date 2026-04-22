// import "./Profile.css";
// import a23 from "../assets/a23.webp";
// import a5 from "../assets/a5.webp";
// import b4 from "../assets/b4.png";

// const pblogs = [
//   {
//     id: 1,
//     title: "Sheet Pan Chicken",
//     img: a23
//   },
//   {
//     id: 2,
//     title: "Beef with Mushrooms",
//     img: a5
//   }
// ];

// const Profile = () => {
//   return (
//    <>
//         <div className="p-banner"
//                     style={{ backgroundImage: `url(${b4})` }}>
//                 </div>
//  <div className="profile-container">
     
//       <div className="profile-left">
//         <h6 className="x">Profile</h6>
//         <button className="y">Share Profile</button>
//         <div className="avatar">S</div>
//         <h3>Suchee</h3>
//         <p>@tastybites-suchee</p>

//         <button className="update-btn">Update Profile Picture</button>

//         <input type="text" className="location" placeholder="Tirunelveli, India" />

//         <div >
//           <input type="text" className="bio"  placeholder="Passionate home cook sharing easy recipes 🍲" />
//           <h6 className="act">Activity</h6>
//           <div className="p-button">
//           <button>4 likes</button>
//           <button>2 comments</button>
//           <button>Logout</button></div>
//         </div>
//       </div>

      
//       <div className="profile-right">
//            <div className="profile-top">
//     <button className="profile-blog">Write a blog</button>
//   </div>
//         <div className="stats">
//           <div className="stat-card">
//             <h4>Blogs</h4>
//             <p>2</p>
//           </div>
//           <div className="stat-card">
//             <h4>Draft</h4>
//             <p>0</p>
//           </div>
//         </div>

//         <h2>Your Blogs</h2>

//         <div className="p-blog-grid">
//           {pblogs.map((blog) => (
//             <div className="p-blog-card" key={blog.id}>
              
//               <img src={blog.img} alt={blog.title} />

             
//               <div className="p-card-overlay">
//                 <button className="p-edit-btn">Edit</button>
//                 <button className="p-unpublish-btn">Unpublish</button>
//               </div>

//               <p>{blog.title}</p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//     </>
//   );
// };

// export default Profile;


import "./Profile.css";
import { useNavigate } from "react-router-dom";
import a23 from "../assets/a23.webp";
import a5 from "../assets/a5.webp";
import b4 from "../assets/b4.png";

const pblogs = [
  {
    id: 1,
    title: "Sheet Pan Chicken",
    img: a23
  },
  {
    id: 2,
    title: "Beef with Mushrooms",
    img: a5
  }
];

const Profile = () => {
  const navigate = useNavigate(); // 🔥 navigation hook

  return (
    <>
      {/* BANNER */}
      <div
        className="p-banner"
        style={{ backgroundImage: `url(${b4})` }}
      ></div>

      <div className="profile-container">
        {/* LEFT SIDE */}
        <div className="profile-left">

          {/* HEADER */}
          <div className="profile-header">
            <h6>Profile</h6>
            <button className="y">Share Profile</button>
          </div>

          <div className="avatar">S</div>
          <h3>Suchee</h3>
          <p>@tastybites-suchee</p>

          <button className="update-btn">Update Profile Picture</button>

          <input
            type="text"
            className="location"
            placeholder="Tirunelveli, India"
          />

          <input
            type="text"
            className="bio"
            placeholder="Passionate home cook sharing easy recipes 🍲"
          />

          <h6 className="act">Activity</h6>

          <div className="p-button">
            <button>4 likes</button>
            <button>2 comments</button>
            <button>Logout</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="profile-right">

          {/* TOP BUTTON */}
          <div className="profile-top">
            <button
              className="profile-blog"
              onClick={() => navigate("/WritePost")} // 🚀 navigation
            >
              Write a blog
            </button>
          </div>

          {/* STATS */}
          <div className="stats">
            <div className="stat-card">
              <h4>Blogs</h4>
              <p>2</p>
            </div>
            <div className="stat-card">
              <h4>Draft</h4>
              <p>0</p>
            </div>
          </div>

          <h2>Your Blogs</h2>

          {/* BLOG GRID */}
          <div className="p-blog-grid">
            {pblogs.map((blog) => (
              <div className="p-blog-card" key={blog.id}>
                <img src={blog.img} alt={blog.title} />

                <div className="p-card-overlay">
                  <button className="p-edit-btn">Edit</button>
                  <button className="p-unpublish-btn">Unpublish</button>
                </div>

                <p>{blog.title}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Profile;