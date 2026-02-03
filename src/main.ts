import './styles.scss'

interface Links {
  id: string
  url: string
}

let timer: any

(() => {
  // links
  const linkMap: Links[] = [
    {
      id: 'link_one',
      url: 'https://github.com/Hub-yang',
    },
    {
      id: 'link_two',
      url: 'https://twitter.com/mochenghualei',
    },
    {
      id: 'link_three',
      url: 'https://space.bilibili.com/278851804',
    },
    {
      id: 'link_four',
      url: 'https://www.youtube.com/@HuberyYang',
    },
  ]

  linkMap.forEach(({ id, url }) => {
    const linkEl = document.getElementById(id) as HTMLElement
    linkEl.onclick = () => window.open(url, '_blank')
  })

  // navigater
  const nav_react = document.getElementById('link_react') as HTMLElement
  nav_react.onclick = () => window.open('https://huberyyang.site/', '_self')
  const nav_vue = document.getElementById('link_vue') as HTMLElement
  nav_vue.onclick = () => window.open('https://huberyyang.site:85/', '_self')

  // copy mail
  const copy = document.querySelectorAll('.mail') as any
  copy.forEach((node: any) => {
    const text = node.textContent
    node.onclick = async () => {
      try {
        await navigator.clipboard.writeText(text)
        const tootip = document.getElementById('tootip') as HTMLElement
        tootip.style.top = '10px'
        tootip.textContent = '拷贝成功'
        clearTimeout(timer)
        timer = setTimeout(() => {
          tootip.style.top = '-50px'
        }, 2000)
      }
      catch (err) {
        throw new Error(`${err}`)
      }
    }
  })
})()
