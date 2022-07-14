(() => {
  const $jqContainer = $('#jq-container')

  $jqContainer.append('<h1>jQuery</h1>')

  articleData.forEach((a) => {
    const title = a.likes ? `[人気記事]${a.title}` : a.title
    $jqContainer.append(`<div class="article-item" id="${a.id}">
      <div>ID：${a.id}</div>
      <div>Title：${title}</div>
      <div>Likes：${a.likes}<span class="btn btn-primary js-like-trigger">いいね</span></div>
    </div>`)
  })

  // イベントとコールバックの設定はDOM生成後に書く必要がある
  $('.js-like-trigger').on('click', function() {
    const $this = $(this)
    const $article = $this.closest('.article-item')
    const id = $article.attr('id')
    alert(`ID: ${id}、いいね！`)
  })
})()
