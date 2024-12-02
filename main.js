let timer
(() => {
  // links
  const link_github = document.getElementById('link_one')
  link_github.onclick = () => window.open('https://github.com/Hub-yang', '_blank')

  const link_twitter = document.getElementById('link_two')
  link_twitter.onclick = () => window.open('https://twitter.com/mochenghualei', '_blank')

  const link_bilibili = document.getElementById('link_three')
  link_bilibili.onclick = () => window.open('https://space.bilibili.com/278851804', '_blank')

  const link_youtube = document.getElementById('link_four')
  link_youtube.onclick = () => window.open('https://www.youtube.com/@HuberyYang', '_blank')

  // copy mail
  const copy = document.querySelectorAll('.mail')
  copy.forEach((node) => {
    const text = node.textContent
    node.onclick = async () => {
      try {
        await navigator.clipboard.writeText(text)
        const tootip = document.getElementById('tootip')
        tootip.style.top = '10px'
        tootip.textContent = '拷贝成功'
        clearTimeout(timer)
        timer = setTimeout(() => {
          tootip.style.top = '-50px'
        }, 2000)
      }
      catch (err) {
        throw new Error('copy mail error')
      }
    }
  })
})()
