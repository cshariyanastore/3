const YEAR = new Date().getFullYear()

export default {
  footer: (
    <div><small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Your Name.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small><div class="stats"><script src="https://arisuta.github.io/bloggerads/ads.js"></script></div></div>
  )
}
