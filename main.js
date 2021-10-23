// Objeto
const links_social_media = {
  github: 'JaoGaimiprais',
  youtube: '',
  instagram: 'jv_smartins',
  facebook: 'profile.php?id=100048077017850',
  twitter: ''
}
// Cria a Função
function change_social_media_links() {
  for (let li of social_media_links.children) {
    const social_media = li.getAttribute('class')

    //template string posso colocar variaveis dentro das strings
    li.children[0].href = `https://${social_media}.com/${links_social_media[social_media]}`
  }
}

change_social_media_links()
// o ser humano 12345678910
// o computador 0123456789, ele não conta ele vê a posição, posição 0, 1, 2 etc

function get_github_user_infos() {
  const url = `https://api.github.com/users/${links_social_media.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      user_name.textContent = data.name
      user_bio.textContent = data.bio
      user_link_github.href = data.html_url
      user_img.src = data.avatar_url
      user_login.textContent = data.login
    })
}

get_github_user_infos()

//fetch == pegar o que tem em algo, exemplo, ele abri o link da api do GIT e pega o quem tem lá, mais não sabe se é um .json ou etc.
// then == ele para o fetch, 'conseguiu pegar o conteúdo do link?' se sim vai fazer algo.
//function resumida == function arrow
//não precisa da chamada (Function), nem do nome, so do argumento, ou 2 argumento entre parentese (response, response2) ou nada somente () e depois, independentemente do argumento, {}
//function arrow sem {}, quando tem somente um passo a ser seguido na função, não precisa de {}
