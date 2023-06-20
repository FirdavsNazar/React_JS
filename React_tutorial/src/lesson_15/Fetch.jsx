import React, {useState, useEffect} from 'react'

const Fetch = () => {

        const [students, setStudents] = useState([])
        const [selected, setSelected] = useState([])


        useEffect(() => {

            fetch('https://jsonplaceholder.typicode.com/users',{
                // method: 'Post',
            })
            .then((res)=> res.json())
            .then((res) =>{ setStudents(res)
                setStudents(res)
                });
        },[])

        
        const getInfo = (id) => {

            fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
                // method: 'Post',
            })
            .then((res)=> res.json())
            .then((res) =>{ 
                setSelected(res)
                });
        
        }


  return (
    <div style={{
        display: 'flex',
    }}>
     
        <div style={{flex: 1}}>
            {
                students.map((value) =>(
                    <h1 key={value.id}>Name: {value.id} {value.name} {' '} 
                        <button onClick={()=> getInfo(value.id)}>get info</button>
                    </h1>
                
                ) )}  
        </div>

        <div style={{flex: 1}}>
            
               
                    <div key={selected?.id}>
                    <h1 > Name: {selected?.name}  </h1>
                    <h2 > Username: {selected?.username}  </h2>
                    <h3 > Email: {selected?.email}  </h3>
                    
                    </div>
        
        </div>

    </div>
  )
}

export default Fetch