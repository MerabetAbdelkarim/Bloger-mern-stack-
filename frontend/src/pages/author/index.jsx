import authorImage from '../../assets/assets/images/author/thomas-macaulay.jpg';
import blogImage02 from '../../assets/assets/images/blog/02.jpg';
import blogImage09 from '../../assets/assets/images/blog/09.jpg';
import blogImage06 from '../../assets/assets/images/blog/06.jpg';

const posts = [
  {
    title: "The AGI hype train is running out of steam",
    image: blogImage02,
    date: "05 Dec, 2021",
    readTime: "02 min read",
    excerpt: "The AGI hype train has hit some heavy traffic. While futurists and fundraisers used to make bullish predictions about artificial general intelligence, …",
    tag: "Machine"
  },
  {
    title: "Why developers are so divided over WordPress",
    image: blogImage09,
    date: "12 Oct, 2020",
    readTime: "03 min read",
    excerpt: "After seeing WordPress top the most dreaded platform on Stack Overflow’s Developer Survey for two years in a row (2019 and 2020), a few weeks ago we …",
    tags: ["Work", "Lifestyle"]
  },
  {
    title: "Why everyone is talking about ‘green steel’ at COP26",
    image: blogImage06,
    date: "14 Sep, 2020",
    readTime: "03 min read",
    excerpt: "Among the rhetoric of climate change bingo and platitudes, there’s a term I’ve been hearing a lot at COP26 this week — green steel. But what is it, …",
    tag: "Lifestyle"
  }
];

function Author() {
  return (
    <>
      <section className="page-header section-sm">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-4 g-lg-5 text-center text-lg-start">
                <div className="col-lg-3 col-md-4 col-sm-5 col-6">
                  <img className="img-fluid rounded" src={authorImage} alt="Thomas Macaulay" width={250} height={250} />
                </div>
                <div className="col-lg-9 col-md-12">
                  <h1 className="h3 text-dark mb-3">Thomas Macaulay</h1>
                  <p>Thomas Macaulay is a writer based in New York City. He’s interested in all things tech, science, and photography related, and likes to yo-yo in his free time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="row gy-5 gx-4 g-xl-5">
          {posts.map((post, index) => (
            <div className="col-lg-6" key={index}>
              <article className="card post-card h-100 border-0 bg-transparent">
                <div className="card-body">
                  <a href="blog-single.html" title={post.title}>
                    <div className="post-image position-relative">
                      <img className="w-100 h-auto rounded" src={post.image} alt={post.title} width={970} height={500} />
                    </div>
                  </a>
                  <ul className="card-meta list-inline mb-3">
                    <li className="list-inline-item mt-2">
                      <i className="ti ti-calendar-event"></i>
                      <span>{post.date}</span>
                    </li>
                    <li className="list-inline-item mt-2">—</li>
                    <li className="list-inline-item mt-2">
                      <i className="ti ti-clock"></i>
                      <span>{post.readTime}</span>
                    </li>
                  </ul>
                  <a href="blog-single.html" title={post.title}>
                    <h3 className="mb-3 post-title">{post.title}</h3>
                  </a>
                  <p>{post.excerpt}</p>
                </div>
                <div className="card-footer border-top-0 bg-transparent p-0">
                  <ul className="card-meta list-inline">
                    <li className="list-inline-item mt-2">
                      <a href="author-single.html" className="card-meta-author" title="Read all posts by - Thomas Macaulay">
                        <img className="w-auto" src={authorImage} alt="Thomas Macaulay" width={26} height={26} /> by <span>Thomas</span>
                      </a>
                    </li>
                    <li className="list-inline-item mt-2">•</li>
                    <li className="list-inline-item mt-2">
                      <ul className="card-meta-tag list-inline">
                        {post.tag ? (
                          <li className="list-inline-item small"><a href="tag-single.html">{post.tag}</a></li>
                        ) : (
                          post.tags.map((tag, i) => (
                            <li className="list-inline-item small" key={i}><a href="tag-single.html">{tag}</a></li>
                          ))
                        )}
                      </ul>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Author;