var form = document.getElementById("myform")


form.addEventListener('submit',async function(e){
    e.preventDefault()
    var search = document.getElementById("search").value
    
    
    // apiCall(search).then(data=>

// fetch(data.repos_url).then(repos=>repos.json()).then(
//     data=>console.log(data)
// )
//     // var response=await repos.json()
//     // for(i=0;i<9;i++){
        // document.getElementById("result").innerHTML=`
      
        // <h1>${i.name}</h1>`

//         // console.log(response[i].name)
    

// )
   
//     )
var str='<ul>'
apiCall(search).then(data=>{
    // document.getElementById("resulIamge").innerHTML=`<img src="${data.avatar_url}"/>`
    
    fetch(data.repos_url).then(repos=>repos.json()).then(resultData=>{
        document.getElementById("resultImage").innerHTML=`<img src="${data.avatar_url}"/>`
        // console.log(data)
        for(i=0;i<resultData.length;i++){
            str=str+'<li>'+resultData[i].name+", fork count:"+resultData[i].forks_count+", star count:"+resultData[i].stargazers_count+'</li>'
        }
        str+='</ul>'
        document.getElementById("result").innerHTML=str
        
    })
})
   
})


async function apiCall(searchTerm){
    var response=await fetch(" https://api.github.com/users/"+searchTerm)
    // return  response
   var data=await response.json()
   return data
}

// async function displayResults(data){
//     await document.getElementById("result").innerHTML=` <img src="${data.avatar_url}"/>`
// }