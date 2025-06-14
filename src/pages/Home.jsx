import data from '../data.json';

const Home = () => {
  const { projects, blogPosts, skills, featured, tools, personalProjects, categories } = data;

  return (
    <main className="flex flex-col gap-12 px-6 py-8 overflow-y-auto bg-black min-h-screen">
      <section className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start max-w-3xl">
            <h1 className="text-4xl text-white font-bold">Hey there, I'm Shubha!</h1>
            <p className="text-white/80 mt-2 text-lg">
             I'm a front-end developer who designs with purpose and builds with care.  I care about how things look, feel, and work. I design and build with intention—clean layouts, smooth interactions, and fast performance.
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              src="https://picsum.photos/200?26"
              alt="Shubha"
              className="w-36 h-36 object-cover rounded-full border-4 border-green"
            />
          </div>
        </div>
      </section>

<section>
  <h2 className="text-2xl font-bold text-white mb-4">Featured Projects</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {projects.map((item, idx) => (
      <a
        key={idx}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/5 rounded-xl p-4 block transition-transform duration-300 ease-in-out hover:shadow-spotify hover:ring-1 hover:ring-green cursor-pointer"
      >
        <img src={item.image} className="w-full h-36 object-cover rounded mb-4" alt={item.title} />
        <p className="text-white font-semibold hover:text-green transition-colors">{item.title}</p>
      </a>
    ))}
  </div>
</section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {blogPosts.map((post, idx) => (
            <a
              key={idx}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 transition-all duration-300 ease-in-out rounded-xl p-4 block hover:shadow-spotify hover:ring-1 hover:ring-green cursor-pointer"
            >
              <img
                src={post.image}
                className="w-full h-36 object-cover rounded mb-4"
                alt={post.title}
              />
              <p className="text-white font-semibold hover:text-green transition-colors">{post.title}</p>
              <p className="text-white/60">{post.subtitle}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-white/5 rounded-xl p-6">
  <h2 className="text-3xl font-bold text-white mb-6">Core Skills</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {skills.map((skill, idx) => (
      <div
        key={idx}
        className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-5 flex flex-col gap-4"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12">
            <img
              src={skill.iconUrl}
              alt={`${skill.title} icon`}
              className="w-full h-full object-contain filter invert"
            />
          </div>
          <div>
            <p className="text-white text-lg font-semibold">{skill.title}</p>
            <p className="text-white/50 text-sm">Frontend Development</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>



      <section>
        <a
          href={featured.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block bg-white/5 hover:bg-white/10 rounded-xl p-6 transition-all duration-300 ease-in-out hover:shadow-spotify hover:ring-1 hover:ring-green cursor-pointer"
        >
          <img
            src={featured.image}
            alt={featured.title}
            className="rounded-xl w-full object-cover max-h-48 mb-4"
          />
          <h3 className="text-xl font-bold text-white mb-1">{featured.title}</h3>
          <p className="text-white/80">{featured.artist}</p>
        </a>
      </section>

            <section>
        <h2 className="text-2xl font-bold text-white mb-4">Tools I Use</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="group bg-white/5 transition-all duration-300 ease-in-out p-4 rounded-xl flex flex-col items-center justify-center text-center"
            >
              <div className="w-16 h-16 mb-3 transition-transform">
                <img
                  src={tool.iconUrl}
                  alt={`${tool.name} logo`}
                  className="w-full h-full object-contain filter invert"
                />
              </div>
              <p className="text-white text-sm font-medium transition-colors">{tool.name}</p>
            </div>
          ))}
        </div>
      </section>

  <section>
        <h2 className="text-2xl font-bold text-white mb-4">Side Projects</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {personalProjects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 transition-all duration-300 ease-in-out rounded-xl p-4 block hover:shadow-spotify hover:ring-1 hover:ring-green cursor-pointer"
            >
              <img
                src={project.image}
                className="w-full object-cover rounded mb-4"
                alt={project.title}
              />
              <p className="text-white font-semibold hover:text-green transition-colors">{project.title}</p>
              <p className="text-white/60">{project.description}</p>
            </a>
          ))}
        </div>
      </section>

<section>
  <h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
  <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-green scrollbar-track-black">
    {categories.map((category, idx) => (
      <a
        key={idx}
        href={category.link}
        className="flex-shrink-0 w-64 rounded-xl bg-white/5 p-3 cursor-pointer overflow-visible transition-shadow duration-300 ease-in-out hover:ring-1 hover:ring-green hover:ring-offset-2"
      >
        <div className="overflow-visible">
          <img
            src={category.image}
            alt={category.title}
            className="w-full object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
        <h3 className="mt-4 text-white font-semibold text-lg text-center">{category.title}</h3>
      </a>
    ))}
  </div>
</section>


    </main>
  );
};

export default Home;
