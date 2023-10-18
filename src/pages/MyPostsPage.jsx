// import { useState } from "react";
// import MyPostsPageCards from "../components/cards/MyPostsPageCards";

// const MyPostsPage = () => {
//   const [openModal, setOpenModal] = useState(false);

//   // useEffect(() => {
//   // }, []);

//   const addPostsModalOpen = () => {
//     setOpenModal(true);
//   };

//   // addPostsModalOpen();
//   return (
//     <section className="my-posts-page">
//       <div className="my-posts-upper-side container">
//         <h2>My Posts</h2>
//         <button onClick={addPostsModalOpen()}>Add post</button>
    
//       </div>
//       <div className="my-posts-main-content container">
//         {openModal ? (
//           <div className="my-posts-modal">
//             <form
//               className="myposts-post-form"
//               // onSubmit={registerFormSubmitFunc}
//             >
//               <div className="form-inputs">
//                 <input
//                   type="text"
//                   name="mypImage"
//                   id="mypImage"
//                   placeholder="Image"
//                 />
//               </div>
//               <div className="form-inputs">
//                 <input
//                   type="text"
//                   name="mypTitle"
//                   id="mypTitle"
//                   placeholder="Title"
//                 />
//               </div>
//               <div className="form-inputs">
//                 <input
//                   type="text"
//                   name="mypDesc"
//                   id="mypDesc"
//                   placeholder="Description"
//                 />
//               </div>
//               <div className="form-inputs">
//                 <input
//                   type="text"
//                   name="mypTags"
//                   id="mypTags"
//                   placeholder="Tags"
//                 />
//               </div>
//               <div className="form-inputs">
//                 <input
//                   type="password"
//                   name="mypCategory"
//                   id="mypCategory"
//                   placeholder="Category"
//                 />
//               </div>

//               <button className="mypSubmit" type="submit">
//                 Post
//               </button>
//             </form>
//           </div>
//         ) : null}
//         <input
//           type="search"
//           className="mpmc-search"
//           placeholder="Searching..."
//         />
//         <div className="mpmc-cards-wrapper">
//           <MyPostsPageCards />
//           <MyPostsPageCards />
//           <MyPostsPageCards />
//           <MyPostsPageCards />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MyPostsPage;

// apparently style stage is ok

import { useState } from "react";
import MyPostsPageCards from "../components/cards/MyPostsPageCards";

const MyPostsPage = () => {
  const [openModal, setOpenModal] = useState(false);

  const addPostsModalOpen = () => {
    setOpenModal(true);
  };

  const addPostsModalClose = () => {
    setOpenModal(true);
  };

  return (
    <section className="my-posts-page">
      <div className="my-posts-upper-side container">
        <h2>My Posts</h2>
        <button onClick={addPostsModalOpen}>Add post</button>
      </div>
      <div className="my-posts-main-content container">
        {openModal ? (
          <div className="my-posts-modal">
            <form
              className="myposts-post-form"
              // onSubmit={registerFormSubmitFunc}
            >
              <div className="form-inputs">
                <input
                  type="text"
                  name="mypImage"
                  id="mypImage"
                  placeholder="Image"
                />
              </div>
              <div className="form-inputs">
                <input
                  type="text"
                  name="mypTitle"
                  id="mypTitle"
                  placeholder="Title"
                />
              </div>
              <div className="form-inputs">
                <input
                  type="text"
                  name="mypDesc"
                  id="mypDesc"
                  placeholder="Description"
                />
              </div>
              <div className="form-inputs">
                <input
                  type="text"
                  name="mypTags"
                  id="mypTags"
                  placeholder="Tags"
                />
              </div>
              <div className="form-inputs">
                <input
                  type="password"
                  name="mypCategory"
                  id="mypCategory"
                  placeholder="Category"
                />
              </div>

              <button className="mypSubmit" type="submit">
                Post
              </button>
              <button onClick={addPostsModalClose} className="mypClosebtn" type="submit">
                Close
              </button>
            </form>
          </div>
        ) : null}
        <input
          type="search"
          className="mpmc-search"
          placeholder="Searching..."
        />
        <div className="mpmc-cards-wrapper">
          <MyPostsPageCards />
          <MyPostsPageCards />
          <MyPostsPageCards />
          <MyPostsPageCards />
        </div>
      </div>
    </section>
  );
};

export default MyPostsPage;

