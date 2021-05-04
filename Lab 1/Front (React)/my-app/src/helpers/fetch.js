const postMessage=async(url='',data)=>{   
    const response=await fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    });
    console.log("nnn",response)
    if(response.status===204) return response;
    const resJson=response.json();
    console.log("vvvvvvv",resJson);

    return resJson;
}

export default postMessage;