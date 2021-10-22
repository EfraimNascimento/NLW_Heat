const LinksSocialMedia = {
    github : "EfraimNascimento",
    youtube : "EfraimNascimento",
    facebook : "EfraimNascimento",
    intagram : "EfraimNascimento",
    twitter : "EfraimCamargo",
}

function changeSocialMediaLinks(){

    for(let li of socialLinks.children){
        const social = (li.getAttribute('class'));                   

        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
        
    }

    /*Chamando elemento HTML pelo id: userName.textContent = 'Marcelo' */
}

changeSocialMediaLinks()

/* camelCase
PascalCase
snake_case    */  

function getGitHubProfileInfos(){
    const url =`https://api.github.com/users/${LinksSocialMedia.github}`;

    fetch(url)
    .then(response => response.json())
    .then(data => { 
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        userPhoto.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()


/* 
    function nomeDaFuncao(argumentos, argumento2){
        //code
    }

    ARROW FUNCTION - função anonima

    (argumentos, argumento2) =>{
        //code
    }

    () => {
        //code
    }
 */

