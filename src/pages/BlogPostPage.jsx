import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axioss from "../server";

const BlogPostPage = () => {
  const [onePost, setOnePost] = useState({});
  const [onePost2, setOnePost2] = useState({});
  const {blogId} = useParams();
  console.log(blogId);

   useEffect(() => {
     const onePostData = async () => {
       try {
         const { data: what } = await axioss.get(`post/${blogId}`); 
         console.log(what);
         setOnePost(what)
         setOnePost2(what.data)
         console.log(what);
       } catch (err) {
         console.error(err);
       }
     };

     onePostData();
   },);
   console.log(onePost);
   console.log(onePost2);

     if (!onePost) {
       return <Fragment>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, fugit iusto impedit ipsam ipsa omnis rerum dicta numquam eius corporis sed delectus possimus, repellat illo laudantium optio consequatur natus molestiae? Minima qui deserunt at quae consectetur mollitia eveniet quaerat maiores esse saepe eos blanditiis, commodi nam voluptas fugit tempora sint, sed corrupti, atque dolor explicabo! Doloremque facilis adipisci et deserunt qui consectetur earum libero nisi nulla corrupti, reiciendis temporibus officia exercitationem consequuntur vero delectus nobis repellendus sit minus atque incidunt, dolor voluptas? Recusandae commodi sint ratione, nam, quidem quos totam mollitia reprehenderit laudantium facilis animi ipsum eius sapiente ipsam qui veniam consequatur perferendis vitae aut suscipit dignissimos! Eius magnam vitae architecto numquam laborum voluptas tempora eaque temporibus voluptatem, optio illum necessitatibus tempore in excepturi deleniti possimus? Consequuntur dignissimos vel aperiam ad adipisci necessitatibus nisi sit tempore in quo. Incidunt, excepturi facilis odit, sint suscipit accusantium error nostrum, exercitationem ipsam ab eius adipisci. Molestiae vitae itaque, delectus praesentium sequi eos deleniti ullam ipsam saepe quas, aperiam consectetur possimus veritatis quibusdam ducimus rem eaque fuga cum placeat suscipit impedit. In nihil delectus explicabo iste quis unde eos eum excepturi quibusdam, ipsum vero quos. Vel facere natus sequi fuga quibusdam! Blanditiis, in deserunt!
       </Fragment>
     }

  return (
    <section className="blogpost-page">
      <div className="bpp-upper-image">
        <img src="/public/gp-hero-bg.png" alt="" />
      </div>
      <div className="bpp-content container">
        <div className="bpp-author">
          <img src="" alt="" />
          <div>
            <span>{onePost.user.first_name }</span>
            <p>{onePost.user?.updatedAt.split("T")[0]}</p>
          </div>
        </div>
        <h2 className="bpp-title">{onePost.title}</h2>
        <p className="bpp-topic">{onePost.tags[0]}</p>
        <p className="bpp-main-text">{onePost.description}</p>
      </div>
    </section>
  );
};

export default BlogPostPage;


