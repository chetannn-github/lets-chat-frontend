

const useSendMsg =async (message,recieverId) => {
    
  
  
    try{
  
      const res = await fetch(`http://localhost:3000/api/message/send/${recieverId}`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({message}),
            credentials: 'include',
      });
  
      const data = await res.json();
      console.log(data)
    }catch(err){
      console.log(err.message)
    }
  
  }
  
  export default useSendMsg